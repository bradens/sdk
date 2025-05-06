import { useState, useEffect, useRef, useCallback } from 'react';
import {
    TokenRanking,
    TokenRankingAttribute,
    RankingDirection,
    NumberFilter,
} from '@codex-data/sdk/dist/sdk/generated/graphql';
import {
    LaunchpadTokenEventType,
    LaunchpadFilterTokenResultFragment,
    OnLaunchpadTokenEventBatchDocument,
    OnLaunchpadTokenEventBatchSubscription,
    LaunchpadTokenEventFragment,
    LaunchpadTokensDocument,
    TokenFilters,
} from '@/gql/graphql';
import { useCodexSdk } from '@/hooks/useCodexSdk';
import { print } from 'graphql';
import { useDebounce } from "@/hooks/useDebounce";
import type { ColumnFilters } from '@/types/launchpad';

interface UseLaunchpadDataProps {
  networkId?: number;
}

// Define types used within the hook (can be moved to types file if needed elsewhere)
type LaunchpadEvent = LaunchpadTokenEventFragment;
type CleanupFunction = () => void;

// Initial state for filters (can be made configurable if needed)
const initialFilterState: ColumnFilters = {
    graduationPercent: { min: '', max: '' },
    priceChange1h: { min: '', max: '' },
    holders: { min: '', max: '' },
    marketCap: { min: '', max: '' },
    transactions1h: { min: '', max: '' },
};

export function useLaunchpadData({ networkId }: UseLaunchpadDataProps = {}) {
    const [newTokens, setNewTokens] = useState<LaunchpadFilterTokenResultFragment[]>([]);
    const [completingTokens, setCompletingTokens] = useState<LaunchpadFilterTokenResultFragment[]>([]);
    const [completedTokens, setCompletedTokens] = useState<LaunchpadFilterTokenResultFragment[]>([]);

    const [newFilters, setNewFilters] = useState<ColumnFilters>(initialFilterState);
    const [completingFilters, setCompletingFilters] = useState<ColumnFilters>(initialFilterState);
    const [completedFilters, setCompletedFilters] = useState<ColumnFilters>(initialFilterState);

    const debouncedNewFilters = useDebounce(newFilters, 500);
    const debouncedCompletingFilters = useDebounce(completingFilters, 500);
    const debouncedCompletedFilters = useDebounce(completedFilters, 500);

    const [newLoading, setNewLoading] = useState(true);
    const [completingLoading, setCompletingLoading] = useState(true);
    const [completedLoading, setCompletedLoading] = useState(true);
    const [newError, setNewError] = useState<Error | null>(null);
    const [completingError, setCompletingError] = useState<Error | null>(null);
    const [completedError, setCompletedError] = useState<Error | null>(null);
    const [subError, setSubError] = useState<Error | null>(null);

    const { sdk, isLoading: isSdkLoading, isAuthenticated } = useCodexSdk();
    const cleanupSubscriptionRef = useRef<CleanupFunction | null>(null);

    const buildGqlFilters = useCallback((baseFilters: Partial<TokenFilters>, columnFilters: ColumnFilters): Partial<TokenFilters> => {
      const gqlFilters: Partial<TokenFilters> = { ...baseFilters };
      // networkId filtering will be applied client-side for initial fetch,
      // as TokenFilters doesn't directly support it for the main entity.

      const parseBounds = (bounds: { min: string; max: string }) => {
          const min = parseFloat(bounds.min);
          const max = parseFloat(bounds.max);
          const filter: NumberFilter = {};
          if (!isNaN(min)) filter.gte = min;
          if (!isNaN(max)) filter.lte = max;
          return (filter.gte !== undefined || filter.lte !== undefined) ? filter : undefined;
      };

      const filterMappings: { [K in keyof ColumnFilters]: keyof TokenFilters | null } = {
          graduationPercent: 'launchpadGraduationPercent',
          priceChange1h: 'change1',
          holders: 'holders',
          marketCap: 'marketCap',
          transactions1h: 'txnCount1',
      };

      for (const key in columnFilters) {
          const filterKey = key as keyof ColumnFilters;
          const gqlKey = filterMappings[filterKey];
          if (gqlKey) {
              const boundsFilter = parseBounds(columnFilters[filterKey]);

              if (boundsFilter) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  gqlFilters[gqlKey] = boundsFilter as any;
              }
          }
      }
      return gqlFilters;
  }, []);

    const checkClientFilters = useCallback((event: LaunchpadEvent, columnFilters: ColumnFilters): boolean => {
        const parseMinMax = (filterKey: keyof ColumnFilters): { min: number | null; max: number | null } => {
            const minNum = parseFloat(columnFilters[filterKey].min);
            const maxNum = parseFloat(columnFilters[filterKey].max);
            return {
                min: isNaN(minNum) ? null : minNum,
                max: isNaN(maxNum) ? null : maxNum
            };
        };

        const eventAttrMap: { [K in keyof ColumnFilters]: string | null } = {
            graduationPercent: 'token.launchpad.graduationPercent',
            priceChange1h: 'change1',
            holders: 'holders',
            marketCap: 'marketCap',
            transactions1h: 'transactions1', // Assuming event provides this, adjust if needed
        };

        for (const key in columnFilters) {
            const filterKey = key as keyof ColumnFilters;
            const eventPath = eventAttrMap[filterKey];
            if (!eventPath) continue;

            let eventValue: unknown = event;
            const pathParts = eventPath.split('.');
            try {
                for (const part of pathParts) {
                    if (typeof eventValue === 'object' && eventValue !== null && part in eventValue) {
                        eventValue = (eventValue as Record<string, unknown>)[part];
                    } else {
                        eventValue = undefined;
                        break; // Exit loop if path is broken
                    }
                }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (_ignoredError) {
                eventValue = undefined;
            }

            if (eventValue === undefined || eventValue === null) continue;

            const { min, max } = parseMinMax(filterKey);

            let numericValue = eventValue;
            if (typeof eventValue === 'string') {
                numericValue = parseFloat(eventValue);
            }
            if (typeof numericValue !== 'number' || isNaN(numericValue)) continue;

            if (min !== null && numericValue < min) return false;
            if (max !== null && numericValue > max) return false;
        }

        return true;
    }, []);

    // Fetch Initial Data for New Tokens
    useEffect(() => {
        if (!sdk || isSdkLoading || !isAuthenticated) return;
        let isMounted = true;
        setNewLoading(true);
        setNewError(null);

        const baseGqlFilters: Partial<TokenFilters> = { launchpadMigrated: false, launchpadCompleted: false };
        // networkId will be applied client-side after fetch
        const gqlFilters = buildGqlFilters(
            baseGqlFilters,
            debouncedNewFilters
        );

        sdk.query(LaunchpadTokensDocument, {
            limit: 20,
            offset: 0,
            filters: gqlFilters,
            rankings: [{ attribute: TokenRankingAttribute.CreatedAt, direction: RankingDirection.Desc }] as TokenRanking[],
        })
        .then(response => {
           if (!isMounted) return;
           let fetchedTokens = (response.filterTokens?.results?.filter(item => !!item) ?? []) as LaunchpadFilterTokenResultFragment[];
           if (networkId) {
            fetchedTokens = fetchedTokens.filter(r => r.token?.networkId === networkId);
           }
           setNewTokens(fetchedTokens);
        })
        .catch(err => {
           if (!isMounted) return;
           console.error("Error fetching new tokens:", err);
           setNewError(err instanceof Error ? err : new Error('Failed to fetch new tokens'));
        })
        .finally(() => {
           if (!isMounted) return;
           setNewLoading(false);
        });
         return () => { isMounted = false; };
      }, [sdk, isSdkLoading, isAuthenticated, debouncedNewFilters, buildGqlFilters, networkId]);

    // Fetch Initial Data for Completing Tokens
    useEffect(() => {
        if (!sdk || isSdkLoading || !isAuthenticated) return;
        let isMounted = true;
        setCompletingLoading(true);
        setCompletingError(null);

        const baseGqlFilters: Partial<TokenFilters> = { launchpadMigrated: false, launchpadCompleted: false };
        // networkId will be applied client-side after fetch
        const gqlFilters = buildGqlFilters(
             baseGqlFilters,
             debouncedCompletingFilters
        );

        sdk.query(LaunchpadTokensDocument, {
            limit: 20,
            offset: 0,
            filters: gqlFilters,
            rankings: [{ attribute: TokenRankingAttribute.GraduationPercent, direction: RankingDirection.Desc }] as TokenRanking[],
        })
        .then(response => {
          if (!isMounted) return;
          let fetchedTokens = (response.filterTokens?.results?.filter(item => !!item) ?? []) as LaunchpadFilterTokenResultFragment[];
          if (networkId) {
            fetchedTokens = fetchedTokens.filter(r => r.token?.networkId === networkId);
          }
          setCompletingTokens(
            fetchedTokens.filter(token => !(token.token?.launchpad?.completed))
          );
        })
        .catch(err => {
          if (!isMounted) return;
          console.error("Error fetching completing tokens:", err);
          setCompletingError(err instanceof Error ? err : new Error('Failed to fetch completing tokens'));
        })
        .finally(() => {
          if (!isMounted) return;
          setCompletingLoading(false);
        });
         return () => { isMounted = false; };
      }, [sdk, isSdkLoading, isAuthenticated, debouncedCompletingFilters, buildGqlFilters, networkId]);

    // Fetch Initial Data for Completed Tokens
    useEffect(() => {
        if (!sdk || isSdkLoading || !isAuthenticated) return;
        let isMounted = true;
        setCompletedLoading(true);
        setCompletedError(null);

         const baseGqlFilters: Partial<TokenFilters> = { launchpadMigrated: true };
         // networkId will be applied client-side after fetch
         const gqlFilters = buildGqlFilters(
             baseGqlFilters,
             debouncedCompletedFilters
        );

        sdk.query(LaunchpadTokensDocument, {
            limit: 20,
            offset: 0,
            filters: gqlFilters,
            rankings: [{ attribute: TokenRankingAttribute.LaunchpadMigratedAt, direction: RankingDirection.Desc }] as TokenRanking[],
        })
        .then(response => {
          if (!isMounted) return;
          let fetchedTokens = (response.filterTokens?.results?.filter(item => !!item) ?? []) as LaunchpadFilterTokenResultFragment[];
          if (networkId) {
            fetchedTokens = fetchedTokens.filter(r => r.token?.networkId === networkId);
          }
          setCompletedTokens(fetchedTokens);
        })
        .catch(err => {
           if (!isMounted) return;
           console.error("Error fetching completed tokens:", err);
           setCompletedError(err instanceof Error ? err : new Error('Failed to fetch completed tokens'));
        })
        .finally(() => {
           if (!isMounted) return;
           setCompletedLoading(false);
        });
        return () => { isMounted = false; };
      }, [sdk, isSdkLoading, isAuthenticated, debouncedCompletedFilters, buildGqlFilters, networkId]);

      // Handle Subscription Updates
      useEffect(() => {
        if (!sdk || isSdkLoading || !isAuthenticated) return;

        let isSubscribed = true;
        cleanupSubscriptionRef.current = null;
        setSubError(null);

        const startSubscription = async () => {
            try {
                // Based on OnLaunchpadTokenEventBatchSubscriptionVariables, input itself is optional.
                const subscriptionVars = {};
                const cleanup = sdk.subscribe<OnLaunchpadTokenEventBatchSubscription>(
                  print(OnLaunchpadTokenEventBatchDocument),
                  subscriptionVars,
                  {
                    next: (data) => {
                      if (!isSubscribed) return;
                      const batch = data?.data?.onLaunchpadTokenEventBatch as LaunchpadTokenEventFragment[];
                      if (!batch) return;

                      // Update New Tokens
                      setNewTokens(prev => {
                            let updated = [...prev];
                            batch.forEach((event) => {
                                if (!event || (networkId && event.networkId !== networkId) || !checkClientFilters(event, newFilters)) return;
                                updated = updated.filter(t => t.token?.id !== event.token?.id);
                                if ((event.eventType === LaunchpadTokenEventType.Deployed || event.eventType === LaunchpadTokenEventType.Created || event.eventType === LaunchpadTokenEventType.Updated)
                                    && !(event.token?.launchpad?.migrated) && !(event.token?.launchpad?.completed)) {
                                    if (!updated.some(t => t.token?.id === event.token?.id)) {
                                     updated.push(event as LaunchpadFilterTokenResultFragment);
                                    }
                                }
                            });
                            return updated
                                .sort((a, b) => (b.token?.createdAt ?? 0) - (a.token?.createdAt ?? 0))
                                .slice(0, 50); // Limit displayed tokens
                        });

                        // Update Completing Tokens
                        setCompletingTokens(prev => {
                            let updated = [...prev];
                            batch.forEach((event) => {
                                if (!event || (networkId && event.networkId !== networkId) || !checkClientFilters(event, completingFilters)) return;
                                updated = updated.filter(t => t.token?.id !== event.token?.id);
                                if ((event.eventType === LaunchpadTokenEventType.Updated || event.eventType === LaunchpadTokenEventType.Completed)
                                    && !(event.token?.launchpad?.migrated)) {
                                    if (!updated.some(t => t.token?.id === event.token?.id)) {
                                     updated.push(event as LaunchpadFilterTokenResultFragment);
                                    }
                                }
                            });
                            return updated
                                .filter(t => !(t.token?.launchpad?.migrated) && !(t.token?.launchpad?.completed))
                                .sort((a, b) => (b.token?.launchpad?.graduationPercent ?? 0) - (a.token?.launchpad?.graduationPercent ?? 0))
                                .slice(0, 50);
                        });

                        // Update Completed Tokens
                        setCompletedTokens(prev => {
                            let updated = [...prev];
                            batch.forEach((event) => {
                                if (!event || (networkId && event.networkId !== networkId) || !checkClientFilters(event, completedFilters)) return;
                                updated = updated.filter(t => t.token?.id !== event.token?.id);
                                if (event.token?.launchpad?.migrated) {
                                     if (!updated.some(t => t.token?.id === event.token?.id)) {
                                       updated.push(event as LaunchpadFilterTokenResultFragment);
                                     }
                                }
                            });
                            return updated
                                .sort((a, b) => (b.token?.launchpad?.migratedAt ?? 0) - (a.token?.launchpad?.migratedAt ?? 0))
                                .slice(0, 50);
                        });
                    },
                    error: (err: Error) => {
                      if (!isSubscribed) return;
                      console.error("Subscription error:", err);
                      setSubError(err instanceof Error ? err : new Error('Subscription failed'));
                    },
                    complete: () => {
                       if (!isSubscribed) return;
                      console.log('Subscription completed');
                    }
                  }
                );
                if (cleanup && typeof cleanup === 'function') {
                     cleanupSubscriptionRef.current = cleanup;
                 } else {
                     console.warn("Subscription did not return a cleanup function.");
                 }
            } catch (err) {
                if (!isSubscribed) return;
                console.error("Failed to start subscription:", err);
                setSubError(err instanceof Error ? err : new Error('Failed to start subscription'));
            }
        };

        startSubscription();

        return () => {
            isSubscribed = false;
            if (cleanupSubscriptionRef.current) {
                console.log("Cleaning up subscription...")
                cleanupSubscriptionRef.current();
                cleanupSubscriptionRef.current = null;
            }
        };
    }, [sdk, isSdkLoading, isAuthenticated, checkClientFilters, newFilters, completingFilters, completedFilters, buildGqlFilters, networkId]); // Added buildGqlFilters dependency and networkId

    // Combine errors for easy display
    const combinedErrors = [newError, completingError, completedError, subError].filter(Boolean);

    return {
        // Token lists
        newTokens,
        completingTokens,
        completedTokens,
        // Filter states and setters
        newFilters,
        setNewFilters,
        completingFilters,
        setCompletingFilters,
        completedFilters,
        setCompletedFilters,
        // Loading states
        isSdkLoading,
        newLoading,
        completingLoading,
        completedLoading,
        // Error states
        errors: combinedErrors,
    };
}