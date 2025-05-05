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
import { Terminal } from "lucide-react";
import Image from 'next/image';
import { print } from 'graphql';

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

// --- Token Card Component (remain the same) ---
interface TokenCardProps {
  token: LaunchpadFilterTokenResultFragment;
}

const TokenCard: React.FC<TokenCardProps> = ({ token }) => {
  const name = token.token?.name ?? 'Unknown Name';
  const symbol = token.token?.symbol ?? '???';
  const imageUrl = token.token?.info?.imageThumbUrl
                 || token.token?.info?.imageSmallUrl
                 || token.token?.info?.imageLargeUrl
                 || token.token?.imageSmallUrl
  const marketCap = token.marketCap;
  const price = token.priceUSD;
  const graduationPercent = token.token?.launchpad?.graduationPercent;
  const holders = token.holders;

  return (
    <div className="border bg-background p-3 rounded-md shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-2">
        <Image
          key={imageUrl}
          src={imageUrl ?? '/placeholder-icon.png'}
          alt={`${name} logo`}
          width={24}
          height={24}
          className="rounded-full mr-2 object-cover bg-muted"
        />
        <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm truncate" title={name}>{name}</p>
            <p className="text-xs text-muted-foreground">{symbol}</p>
        </div>
      </div>
       <div className="text-xs space-y-1">
            <p>MCap: <span className="font-medium">{formatNumber(marketCap, { style: 'currency', currency: 'USD' })}</span></p>
            <p>Price: <span className="font-medium">{formatNumber(price, { style: 'currency', currency: 'USD', maximumFractionDigits: 8 })}</span></p>
            <p>Graduation: <span className="font-medium">{formatPercent(graduationPercent)}</span></p>
            <p>Holders: <span className="font-medium">{formatNumber(holders)}</span></p>
      </div>
    </div>
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
       const results = response.filterTokens?.results?.filter((item): item is LaunchpadFilterTokenResultFragment => !!item?.token) ?? [];
       setNewTokens(results);
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
        filters: { launchpadCompleted: false, launchpadGraduationPercent: { gte: 80, lt: 100 } },
        rankings: [{ attribute: TokenRankingAttribute.GraduationPercent, direction: RankingDirection.Desc }] as TokenRanking[],
    })
    .then(response => {
      if (!isMounted) return;
      const results = response.filterTokens?.results?.filter((item): item is LaunchpadFilterTokenResultFragment => !!item?.token) ?? [];
      setCompletingTokens(results.filter(token => !(token.token?.launchpad?.completed)));
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
      const results = response.filterTokens?.results?.filter((item): item is LaunchpadFilterTokenResultFragment => !!item?.token) ?? [];
      setCompletedTokens(results);
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
    cleanupSubscriptionRef.current = null; // Reset cleanup ref
    setSubError(null);

    const startSubscription = async () => {
        try {
            const cleanup = sdk.subscribe<OnLaunchpadTokenEventBatchSubscription>(print(OnLaunchpadTokenEventBatchDocument), {},
              {
                next: (data) => {
                  if (!isSubscribed) return;
                  const batch = data?.data?.onLaunchpadTokenEventBatch as LaunchpadTokenEventFragment[];
                  if (!batch) return;

                  console.log(`batch updating ${batch.length} tokens`)

                  // --- State Update Logic (remains the same) ---
                  setNewTokens(prev => {
                      let updated = [...prev];
                      batch.forEach((event) => {
                          if (!event) return;

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
                complete: () => { // Added complete method
                    if (!isSubscribed) return;
                    console.log('Subscription completed');
                    // Optionally reset error or perform other cleanup on complete
                    // setSubError(null);
                }
              }
            );
             // Store the cleanup function once the promise resolves
             if (cleanup && typeof cleanup === 'function') {
                 cleanupSubscriptionRef.current = cleanup;
             }
        } catch (err) { // Catch errors during the subscription setup itself
            if (!isSubscribed) return;
             console.error("Failed to start subscription:", err);
             setSubError(err instanceof Error ? err : new Error('Failed to start subscription'));
        }
    };

    startSubscription();

    // Cleanup function: Call the stored cleanup function
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

