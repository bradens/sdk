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
import { Terminal, Clock, Repeat, Users, Filter } from "lucide-react";
import Image from 'next/image';
import { print } from 'graphql';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDebounce } from "@/hooks/useDebounce";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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

const formatNumber = (num: number | string | null | undefined, options: Intl.NumberFormatOptions = {}) => {
  if (num === null || num === undefined) return 'N/A';
  const numericValue = typeof num === 'string' ? parseFloat(num) : num;
  if (isNaN(numericValue)) return 'N/A';
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 2,
    ...options
  }).format(numericValue);
};

const formatPercent = (num: number | null | undefined) => {
  if (num === null || num === undefined) return 'N/A';
  return `${num.toFixed(2)}%`;
}

interface TokenCardProps {
  token: LaunchpadFilterTokenResultFragment;
}

const TokenCard: React.FC<TokenCardProps> = ({ token }) => {
    const name = token.token?.name ?? 'Unknown Name';
    const symbol = token.token?.symbol ?? '???';
    const imageUrl = token.token?.imageSmallUrl
                    || token.token?.info?.imageThumbUrl
                    || token.token?.info?.imageSmallUrl
                    || token.token?.info?.imageLargeUrl;
    const marketCap = token.marketCap;
    const graduationPercent = token.token?.launchpad?.graduationPercent;
    const holders = token.holders;
    const createdAt = token.token?.createdAt;
    const networkId = token.token?.networkId;
    const tokenId = token.token?.address;

    const getTimeAgo = (timestamp: number | null | undefined): string => {
        if (!timestamp) return '-';
        const seconds = Math.floor((new Date().getTime() - timestamp * 1000) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + "y";
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + "mo";
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + "d";
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + "h";
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + "m";
        return Math.floor(seconds) + "s";
    }
    const timeAgo = getTimeAgo(createdAt);

    const linkHref = (networkId && tokenId) ? `/networks/${networkId}/tokens/${encodeURIComponent(tokenId)}` : '#';
    const isLinkDisabled = !(networkId && tokenId);

    return (
        <Link
            href={linkHref}
            passHref
            className={`transition-all hover:border-primary/60 border bg-background p-2 flex flex-col gap-1.5 ${isLinkDisabled ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}`}
            aria-disabled={isLinkDisabled}
            onClick={(e) => { if (isLinkDisabled) e.preventDefault(); }}
        >
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-shrink min-w-0">
                    {imageUrl &&
                        <Image
                            key={imageUrl}
                            src={imageUrl}
                            alt={`${name} logo`}
                            width={36}
                            height={36}
                            placeholder="empty"
                            className="rounded-md flex-shrink-0 object-cover bg-muted"
                        />
                    }
                    <div className="flex-grow min-w-0">
                        <p className="font-semibold text-sm truncate" title={name}>{name}</p>
                        <p className="text-xs text-muted-foreground truncate">{symbol}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
                 <div className="flex items-center gap-1">
                     <Clock className="h-3 w-3" />
                     <span>{timeAgo}</span>
                </div>
            </div>

             <div className="flex items-center justify-between text-xs text-muted-foreground gap-2 flex-wrap">
                <div className="flex items-center gap-1" title="Graduation Progress">
                     <Repeat className="h-3.5 w-3.5 text-green-500" />
                     <span className="font-medium text-foreground">{formatPercent(graduationPercent)}</span>
                </div>
                 <div className="flex items-center gap-1" title="Holders">
                     <Users className="h-3.5 w-3.5" />
                     <span className="font-medium text-foreground">{formatNumber(holders)}</span>
                </div>
                 <div className="flex items-center gap-1" title="Transactions (Placeholder)">
                     <span>Tx</span>
                     <span className="font-medium text-foreground">{token.transactions1 ?? '-'}</span>
                </div>
                 <div className="flex items-center gap-1" title="Volume (Placeholder)">
                     <span>V</span>
                     <span className="font-medium text-foreground">{formatNumber(token.volume1, {style: 'currency', currency: 'USD'})}</span>
                </div>
                 <div className="flex items-center gap-1" title="Market Cap">
                     <span>MC</span>
                     <span className="font-medium text-foreground">{formatNumber(marketCap, { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })}</span>
                </div>
             </div>
        </Link>
    );
};

const LoadingColumn: React.FC = () => (
  <div className="space-y-3">
    {[...Array(5)].map((_, i) => (
      <Skeleton key={i} className="h-[120px] w-full rounded-md" />
    ))}
  </div>
);

interface FilterInputGroupProps {
    label: string;
    filterKey: keyof ColumnFilters;
    filters: ColumnFilters;
    setFilters: React.Dispatch<React.SetStateAction<ColumnFilters>>;
}

const FilterInputGroup: React.FC<FilterInputGroupProps> = ({ label, filterKey, filters, setFilters }) => {
    const handleChange = (bound: 'min' | 'max', value: string) => {
        setFilters(prev => ({
            ...prev,
            [filterKey]: {
                ...prev[filterKey],
                [bound]: value
            }
        }));
    };

    return (
        <div className="grid grid-cols-2 gap-2 items-end">
            <Label htmlFor={`${filterKey}-min`} className="text-xs col-span-2 mb-1">{label}</Label>
            <Input
                id={`${filterKey}-min`}
                type="number"
                placeholder="Min"
                value={filters[filterKey].min}
                onChange={(e) => handleChange('min', e.target.value)}
                className="h-8 text-xs"
            />
            <Input
                id={`${filterKey}-max`}
                type="number"
                placeholder="Max"
                value={filters[filterKey].max}
                onChange={(e) => handleChange('max', e.target.value)}
                className="h-8 text-xs"
            />
        </div>
    );
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
            <Popover open={openPopover === 'new'} onOpenChange={(isOpen) => setOpenPopover(isOpen ? 'new' : null)}>
                <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Filter className="h-4 w-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-2 space-y-2">
                    <h3 className="text-sm font-medium mb-1">Filter New</h3>
                    <FilterInputGroup label="Graduation %" filterKey="graduationPercent" filters={newFilters} setFilters={setNewFilters} />
                    <FilterInputGroup label="Holders" filterKey="holders" filters={newFilters} setFilters={setNewFilters} />
                    <FilterInputGroup label="Market Cap" filterKey="marketCap" filters={newFilters} setFilters={setNewFilters} />
                </PopoverContent>
            </Popover>
          </h2>
          <div className="flex-grow overflow-y-auto space-y-3 pr-1 custom-scrollbar">
            {newLoading || isSdkLoading ? (
              <LoadingColumn />
            ) : newTokens.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">No new tokens found.</p>
            ) : (
              newTokens.map((token) => <TokenCard key={token.token?.id ?? Math.random()} token={token} />)
            )}
          </div>
        </div>

         <div className="bg-card p-1 rounded-lg shadow flex flex-col overflow-hidden">
          <h2 className="text-xl font-semibold mb-2 pb-1 flex-shrink-0 flex items-center justify-between">
            Completing
            <Popover open={openPopover === 'completing'} onOpenChange={(isOpen) => setOpenPopover(isOpen ? 'completing' : null)}>
                <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Filter className="h-4 w-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-2 space-y-2">
                     <h3 className="text-sm font-medium mb-1">Filter Completing</h3>
                     <FilterInputGroup label="Graduation %" filterKey="graduationPercent" filters={completingFilters} setFilters={setCompletingFilters} />
                     <FilterInputGroup label="Holders" filterKey="holders" filters={completingFilters} setFilters={setCompletingFilters} />
                     <FilterInputGroup label="Market Cap" filterKey="marketCap" filters={completingFilters} setFilters={setCompletingFilters} />
                </PopoverContent>
            </Popover>
          </h2>
           <div className="flex-grow overflow-y-auto space-y-3 pr-1 custom-scrollbar">
             {completingLoading || isSdkLoading ? (
              <LoadingColumn />
            ) : completingTokens.length === 0 ? (
               <p className="text-muted-foreground text-center py-4">No completing tokens found.</p>
            ) : (
              completingTokens.map((token) => <TokenCard key={token.token?.id ?? Math.random()} token={token} />)
            )}
          </div>
        </div>

         <div className="bg-card p-1 rounded-lg shadow flex flex-col overflow-hidden">
          <h2 className="text-xl font-semibold mb-2 pb-1 flex-shrink-0 flex items-center justify-between">
            Completed
            <Popover open={openPopover === 'completed'} onOpenChange={(isOpen) => setOpenPopover(isOpen ? 'completed' : null)}>
                <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Filter className="h-4 w-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-2 space-y-2">
                     <h3 className="text-sm font-medium mb-1">Filter Completed</h3>
                     <FilterInputGroup label="Graduation %" filterKey="graduationPercent" filters={completedFilters} setFilters={setCompletedFilters} />
                     <FilterInputGroup label="Holders" filterKey="holders" filters={completedFilters} setFilters={setCompletedFilters} />
                     <FilterInputGroup label="Market Cap" filterKey="marketCap" filters={completedFilters} setFilters={setCompletedFilters} />
                </PopoverContent>
            </Popover>
          </h2>
           <div className="flex-grow overflow-y-auto space-y-3 pr-1 custom-scrollbar">
            {completedLoading || isSdkLoading ? (
              <LoadingColumn />
            ) : completedTokens.length === 0 ? (
               <p className="text-muted-foreground text-center py-4">No completed tokens found.</p>
             ) : (
              completedTokens.map((token) => <TokenCard key={token.token?.id ?? Math.random()} token={token} />)
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

