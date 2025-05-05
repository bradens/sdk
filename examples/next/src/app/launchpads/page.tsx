'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  TokenRanking,
  TokenRankingAttribute,
  RankingDirection,
} from '@codex-data/sdk/dist/sdk/generated/graphql'; // Import SDK types
import {
  LaunchpadTokenEventType,
  LaunchpadFilterTokenResultFragment,
  OnLaunchpadTokenEventBatchDocument,
  OnLaunchpadTokenEventBatchSubscription,
  LaunchpadTokenEventFragment,
  LaunchpadTokensDocument,
} from '@/gql/graphql';
import { useCodexSdk } from '@/hooks/useCodexSdk';
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Clock, Repeat, Users } from "lucide-react";
import Image from 'next/image';
import { print } from 'graphql';
import Link from 'next/link'; // Import Link

// Define CleanupFunction type if not available elsewhere
type CleanupFunction = () => void;

// --- Helper Functions (remain the same) ---
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

// --- Updated Token Card Component ---
interface TokenCardProps {
  token: LaunchpadFilterTokenResultFragment;
}

const TokenCard: React.FC<TokenCardProps> = ({ token }) => {
    const name = token.token?.name ?? 'Unknown Name';
    const symbol = token.token?.symbol ?? '???';
    const imageUrl = token.token?.imageSmallUrl
                    || token.token?.info?.imageThumbUrl
                    || token.token?.info?.imageSmallUrl
                    || token.token?.info?.imageLargeUrl
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

    // Construct the link href
    const linkHref = (networkId && tokenId) ? `/networks/${networkId}/tokens/${encodeURIComponent(tokenId)}` : '#';
    // Disable link if missing required params
    const isLinkDisabled = !(networkId && tokenId);

    return (
        <Link
            href={linkHref}
            passHref // passHref is generally not needed without <a> but doesn't hurt
            // Removed legacyBehavior
            className={`transition-all hover:border-primary/60 border bg-background p-2 flex flex-col gap-1.5 ${isLinkDisabled ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}`}
            aria-disabled={isLinkDisabled}
            onClick={(e) => { if (isLinkDisabled) e.preventDefault(); }}
        >
            {/* Removed wrapping <a> tag - Content now direct child of Link */}
            {/* Top Row: Image, Name/Symbol */}
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

            {/* Second Row: Time Ago */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
                 <div className="flex items-center gap-1">
                     <Clock className="h-3 w-3" />
                     <span>{timeAgo}</span>
                </div>
            </div>

             {/* Third Row: Progress, Holders, Tx, V, MCap */}
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
                     <span className="font-medium text-foreground">{token.transactions1}</span>
                </div>
                 <div className="flex items-center gap-1" title="Volume (Placeholder)">
                     <span>V</span>
                     <span className="font-medium text-foreground">{token.volume1}</span>
                </div>
                 <div className="flex items-center gap-1" title="Market Cap">
                     <span>MC</span>
                     <span className="font-medium text-foreground">{formatNumber(marketCap, { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })}</span>
                </div>
             </div>
        </Link>
    );
};

// --- Loading Skeleton (remains the same) ---
const LoadingColumn: React.FC = () => (
  <div className="space-y-3">
    {[...Array(5)].map((_, i) => (
      <Skeleton key={i} className="h-[120px] w-full rounded-md" />
    ))}
  </div>
);

// --- Main Launchpads Page Component ---

export default function LaunchpadsPage() {
  const [newTokens, setNewTokens] = useState<LaunchpadFilterTokenResultFragment[]>([]);
  const [completingTokens, setCompletingTokens] = useState<LaunchpadFilterTokenResultFragment[]>([]);
  const [completedTokens, setCompletedTokens] = useState<LaunchpadFilterTokenResultFragment[]>([]);

  // Loading and Error States
  const [newLoading, setNewLoading] = useState(true);
  const [completingLoading, setCompletingLoading] = useState(true);
  const [completedLoading, setCompletedLoading] = useState(true);
  const [newError, setNewError] = useState<Error | null>(null);
  const [completingError, setCompletingError] = useState<Error | null>(null);
  const [completedError, setCompletedError] = useState<Error | null>(null);
  const [subError, setSubError] = useState<Error | null>(null);

  const { sdk, isLoading: isSdkLoading, isAuthenticated } = useCodexSdk();
  const cleanupSubscriptionRef = useRef<CleanupFunction | null>(null);

  // Effect for fetching NEW tokens
  useEffect(() => {
    if (!sdk || isSdkLoading || !isAuthenticated) return;
    let isMounted = true;
    setNewLoading(true);
    setNewError(null);
    sdk.query(LaunchpadTokensDocument, {
        limit: 20,
        offset: 0,
        filters: { launchpadMigrated: false, launchpadCompleted: false },
        rankings: [{ attribute: TokenRankingAttribute.CreatedAt, direction: RankingDirection.Desc }] as TokenRanking[],
    })
    .then(response => {
       if (!isMounted) return;
       // Adjusted filter: Filter out nullish items first
       const results = response.filterTokens?.results?.filter(item => !!item) ?? [];
       setNewTokens(results as LaunchpadFilterTokenResultFragment[]); // Cast after filtering nulls
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
  }, [sdk, isSdkLoading, isAuthenticated]);

  // Effect for fetching COMPLETING tokens
  useEffect(() => {
    if (!sdk || isSdkLoading || !isAuthenticated) return;
    let isMounted = true;
    setCompletingLoading(true);
    setCompletingError(null);
    sdk.query(LaunchpadTokensDocument, {
        limit: 20,
        offset: 0,
        filters: { launchpadCompleted: false, launchpadGraduationPercent: { gte: 80, lt: 100 }, lastTransaction: { gt: Math.floor(new Date().getTime() / 1000) - 60 * 60 * 24 } },
        rankings: [{ attribute: TokenRankingAttribute.GraduationPercent, direction: RankingDirection.Desc }] as TokenRanking[],
    })
    .then(response => {
      if (!isMounted) return;
      // Adjusted filter
      const results = response.filterTokens?.results?.filter(item => !!item) ?? [];
      setCompletingTokens(
        (results as LaunchpadFilterTokenResultFragment[]).filter(token => !(token.token?.launchpad?.completed))
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
  }, [sdk, isSdkLoading, isAuthenticated]);

  // Effect for fetching COMPLETED tokens
  useEffect(() => {
    if (!sdk || isSdkLoading || !isAuthenticated) return;
    let isMounted = true;
    setCompletedLoading(true);
    setCompletedError(null);
    sdk.query(LaunchpadTokensDocument, {
        limit: 20,
        offset: 0,
        filters: { launchpadMigrated: true },
        rankings: [{ attribute: TokenRankingAttribute.LaunchpadMigratedAt, direction: RankingDirection.Desc }] as TokenRanking[],
    })
    .then(response => {
      if (!isMounted) return;
      // Adjusted filter
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
  }, [sdk, isSdkLoading, isAuthenticated]);

  // Effect for Subscription
  useEffect(() => {
    if (!sdk || isSdkLoading || !isAuthenticated) return;

    let isSubscribed = true;
    cleanupSubscriptionRef.current = null;
    setSubError(null);

    const startSubscription = async () => {
        try {
            const cleanup = sdk.subscribe<OnLaunchpadTokenEventBatchSubscription>(
              print(OnLaunchpadTokenEventBatchDocument), // Pass the DocumentNode stringified
              {},
              {
                next: (data) => {
                  if (!isSubscribed) return;
                  // Use type from SDK subscription generic if possible, else cast
                  const batch = data?.data?.onLaunchpadTokenEventBatch as LaunchpadTokenEventFragment[];
                  if (!batch) return;

                  console.log(`batch updating ${batch.length} tokens`)

                  // --- State Update Logic ---
                   setNewTokens(prev => {
                        let updated = [...prev];
                        batch.forEach((event) => {
                            if (!event) return;
                            updated = updated.filter(t => t.token?.id !== event.token?.id);
                            if ((event.eventType === LaunchpadTokenEventType.Deployed || event.eventType === LaunchpadTokenEventType.Created || event.eventType === LaunchpadTokenEventType.Updated)
                                && !(event.token?.launchpad?.migrated) && !(event.token?.launchpad?.completed)) {
                                if (!updated.some(t => t.token?.id === event.token?.id)) {
                                 // Cast event to the type used in state
                                 updated.push(event as LaunchpadFilterTokenResultFragment);
                                }
                            }
                        });
                        return updated
                            .sort((a, b) => (b.token?.createdAt ?? 0) - (a.token?.createdAt ?? 0))
                            .slice(0, 20);
                    });

                    setCompletingTokens(prev => {
                        let updated = [...prev];
                        batch.forEach((event) => {
                            if (!event) return;
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
                            .slice(0, 20);
                    });

                    setCompletedTokens(prev => {
                        let updated = [...prev];
                        batch.forEach((event) => {
                            if (!event) return;
                            updated = updated.filter(t => t.token?.id !== event.token?.id);
                            if (event.token?.launchpad?.migrated) {
                                 if (!updated.some(t => t.token?.id === event.token?.id)) {
                                   updated.push(event as LaunchpadFilterTokenResultFragment);
                                 }
                            }
                        });
                        return updated
                            .sort((a, b) => (b.token?.launchpad?.migratedAt ?? 0) - (a.token?.launchpad?.migratedAt ?? 0))
                            .slice(0, 20);
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
             // Store the cleanup function (assuming sdk.subscribe returns it directly now)
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

    // Cleanup function
    return () => {
      isSubscribed = false;
      if (cleanupSubscriptionRef.current) {
        console.log("Cleaning up subscription...")
        cleanupSubscriptionRef.current();
        cleanupSubscriptionRef.current = null;
      }
    };

  }, [sdk, isSdkLoading, isAuthenticated]);

  // Consolidate errors
  const errors = [newError, completingError, completedError, subError].filter(Boolean);

  return (
    <div className="p-1 md:p-1 lg:p-1 h-screen flex flex-col">
       {/* Display Errors */}
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
        {/* New Column */}
        <div className="bg-card p-1 rounded-lg shadow flex flex-col overflow-hidden">
          <h2 className="text-xl font-semibold mb-2 pb-1 flex-shrink-0">New</h2>
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

        {/* Completing Column */}
         <div className="bg-card p-1 rounded-lg shadow flex flex-col overflow-hidden">
          <h2 className="text-xl font-semibold mb-2 pb-1 flex-shrink-0">Completing</h2>
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

        {/* Completed Column */}
         <div className="bg-card p-1 rounded-lg shadow flex flex-col overflow-hidden">
          <h2 className="text-xl font-semibold mb-2 pb-1 flex-shrink-0">Completed</h2>
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

