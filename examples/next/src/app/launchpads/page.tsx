'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
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
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";
import { LaunchpadTokenCard } from '@/components/LaunchpadTokenCard';
import { print } from 'graphql';
import { ColumnFilterPopover } from '@/components/ColumnFilterPopover';

type CleanupFunction = () => void;

type LaunchpadEvent = LaunchpadTokenEventFragment;

type FilterBounds = { min: string; max: string };
interface ColumnFilters {
    graduationPercent: FilterBounds;
    priceChange1h: FilterBounds;
    holders: FilterBounds;
    marketCap: FilterBounds;
    transactions1h: FilterBounds;
}

const initialFilterState: ColumnFilters = {
    graduationPercent: { min: '', max: '' },
    priceChange1h: { min: '', max: '' },
    holders: { min: '', max: '' },
    marketCap: { min: '', max: '' },
    transactions1h: { min: '', max: '' },
};

export default function LaunchpadsPage() {
  const [newTokens, setNewTokens] = useState<LaunchpadFilterTokenResultFragment[]>([]);
  const [completingTokens, setCompletingTokens] = useState<LaunchpadFilterTokenResultFragment[]>([]);
  const [completedTokens, setCompletedTokens] = useState<LaunchpadFilterTokenResultFragment[]>([]);

  const [newFilters, setNewFilters] = useState<ColumnFilters>(initialFilterState);
  const [completingFilters, setCompletingFilters] = useState<ColumnFilters>(initialFilterState);
  const [completedFilters, setCompletedFilters] = useState<ColumnFilters>(initialFilterState);

  const debouncedNewFilters = useDebounce(newFilters, 500);
  const debouncedCompletingFilters = useDebounce(completingFilters, 500);
  const debouncedCompletedFilters = useDebounce(completedFilters, 500);

  const [openPopover, setOpenPopover] = useState<'new' | 'completing' | 'completed' | null>(null);

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
      const gqlFilters = { ...baseFilters };

      const parseBounds = (bounds: FilterBounds) => {
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

  useEffect(() => {
    if (!sdk || isSdkLoading || !isAuthenticated) return;
    let isMounted = true;
    setNewLoading(true);
    setNewError(null);

    const gqlFilters = buildGqlFilters(
        { launchpadMigrated: false, launchpadCompleted: false },
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
       const results = response.filterTokens?.results?.filter(item => !!item) ?? [];
       setNewTokens(results as LaunchpadFilterTokenResultFragment[]);
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
  }, [sdk, isSdkLoading, isAuthenticated, debouncedNewFilters, buildGqlFilters]);

  useEffect(() => {
    if (!sdk || isSdkLoading || !isAuthenticated) return;
    let isMounted = true;
    setCompletingLoading(true);
    setCompletingError(null);

    const gqlFilters = buildGqlFilters(
         { launchpadMigrated: false, launchpadCompleted: false },
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
      const results = response.filterTokens?.results?.filter(item => !!item) ?? [];
      setCompletingTokens(
        (results as LaunchpadFilterTokenResultFragment[])
          .filter(token => !(token.token?.launchpad?.completed))
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
  }, [sdk, isSdkLoading, isAuthenticated, debouncedCompletingFilters, buildGqlFilters]);

  useEffect(() => {
    if (!sdk || isSdkLoading || !isAuthenticated) return;
    let isMounted = true;
    setCompletedLoading(true);
    setCompletedError(null);

     const gqlFilters = buildGqlFilters(
         { launchpadMigrated: true },
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
      const results = response.filterTokens?.results?.filter(item => !!item) ?? [];
      setCompletedTokens(results as LaunchpadFilterTokenResultFragment[]);
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
  }, [sdk, isSdkLoading, isAuthenticated, debouncedCompletedFilters, buildGqlFilters]);

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
            transactions1h: 'transactions1',
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

  useEffect(() => {
    if (!sdk || isSdkLoading || !isAuthenticated) return;

    let isSubscribed = true;
    cleanupSubscriptionRef.current = null;
    setSubError(null);

    const startSubscription = async () => {
        try {
            const cleanup = sdk.subscribe<OnLaunchpadTokenEventBatchSubscription>(
              print(OnLaunchpadTokenEventBatchDocument),
              {},
              {
                next: (data) => {
                  if (!isSubscribed) return;
                  const batch = data?.data?.onLaunchpadTokenEventBatch as LaunchpadTokenEventFragment[];
                  if (!batch) return;

                  console.log(`batch updating ${batch.length} tokens`);

                  setNewTokens(prev => {
                        let updated = [...prev];
                        batch.forEach((event) => {
                            if (!event || !checkClientFilters(event, newFilters)) return;
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
                            .slice(0, 50);
                    });

                    setCompletingTokens(prev => {
                        let updated = [...prev];
                        batch.forEach((event) => {
                            if (!event || !checkClientFilters(event, completingFilters)) return;
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

                    setCompletedTokens(prev => {
                        let updated = [...prev];
                        batch.forEach((event) => {
                            if (!event || !checkClientFilters(event, completedFilters)) return;
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

}, [sdk, isSdkLoading, isAuthenticated, checkClientFilters, newFilters, completingFilters, completedFilters]);

  const errors = [newError, completingError, completedError, subError].filter(Boolean);

  return (
    <div className="p-1 md:p-1 lg:p-1 h-screen flex flex-col">
       {errors.length > 0 && (
        <Alert variant="destructive" className="mb-4 flex-shrink-0">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {errors.map((err, i) => <p key={i}>{err?.message ?? 'An unknown error occurred.'}</p>)}
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 flex-grow overflow-hidden">
        <div className="bg-card p-1 rounded-lg shadow flex flex-col overflow-hidden">
          <h2 className="text-xl font-semibold mb-2 pb-1 flex-shrink-0 flex items-center justify-between">
            New
            <ColumnFilterPopover
                title="Filter New"
                popoverKey="new"
                filters={newFilters}
                setFilters={setNewFilters}
                openPopover={openPopover}
                setOpenPopover={setOpenPopover}
            />
          </h2>
          <div className="flex-grow overflow-y-auto space-y-3 pr-1 custom-scrollbar">
            {newLoading || isSdkLoading ? (
              <LoadingColumn />
            ) : newTokens.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">No new tokens found.</p>
            ) : (
              newTokens.map((token) => <LaunchpadTokenCard key={token.token?.id ?? Math.random()} token={token} />)
            )}
          </div>
        </div>

         <div className="bg-card p-1 rounded-lg shadow flex flex-col overflow-hidden">
          <h2 className="text-xl font-semibold mb-2 pb-1 flex-shrink-0 flex items-center justify-between">
            Completing
             <ColumnFilterPopover
                title="Filter Completing"
                popoverKey="completing"
                filters={completingFilters}
                setFilters={setCompletingFilters}
                openPopover={openPopover}
                setOpenPopover={setOpenPopover}
            />
          </h2>
           <div className="flex-grow overflow-y-auto space-y-3 pr-1 custom-scrollbar">
             {completingLoading || isSdkLoading ? (
              <LoadingColumn />
            ) : completingTokens.length === 0 ? (
               <p className="text-muted-foreground text-center py-4">No completing tokens found.</p>
            ) : (
              completingTokens.map((token) => <LaunchpadTokenCard key={token.token?.id ?? Math.random()} token={token} />)
            )}
          </div>
        </div>

         <div className="bg-card p-1 rounded-lg shadow flex flex-col overflow-hidden">
          <h2 className="text-xl font-semibold mb-2 pb-1 flex-shrink-0 flex items-center justify-between">
            Completed
            <ColumnFilterPopover
                title="Filter Completed"
                popoverKey="completed"
                filters={completedFilters}
                setFilters={setCompletedFilters}
                openPopover={openPopover}
                setOpenPopover={setOpenPopover}
            />
          </h2>
           <div className="flex-grow overflow-y-auto space-y-3 pr-1 custom-scrollbar">
            {completedLoading || isSdkLoading ? (
              <LoadingColumn />
            ) : completedTokens.length === 0 ? (
               <p className="text-muted-foreground text-center py-4">No completed tokens found.</p>
             ) : (
              completedTokens.map((token) => <LaunchpadTokenCard key={token.token?.id ?? Math.random()} token={token} />)
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: hsl(var(--muted-foreground) / 0.5);
          border-radius: 10px;
          border: 3px solid transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: hsl(var(--muted-foreground));
        }
      `}</style>

    </div>
  );
}

const LoadingColumn: React.FC = () => (
  <div className="space-y-3">
    {[...Array(5)].map((_, i) => (
      <Skeleton key={i} className="h-[120px] w-full rounded-md" />
    ))}
  </div>
);

