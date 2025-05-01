'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useCodexSdk } from '@/hooks/useCodexSdk';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { GetTokenEventsQuery, OnTokenEventsCreatedSubscription } from '@codex-data/sdk/dist/sdk/generated/graphql';
import { ExecutionResult } from 'graphql';
import { CleanupFunction } from '@codex-data/sdk';
import { Skeleton } from "@/components/ui/skeleton";

// Extract the type for a single event from the query type, handling potential nulls
type RawEventData = NonNullable<NonNullable<GetTokenEventsQuery['getTokenEvents']>['items']>[number];

// Define the structure for our formatted event data
type TokenEvent = {
  id: string;
  timestamp: number;
  transactionHash: string;
  eventDisplayType?: string | null;
  amountUsd?: number | null;
  uniqueId?: string; // For React key
};

interface TokenTransactionsProps {
  networkId: number;
  tokenId: string; // This is the token address
  initialEvents: TokenEvent[];
}

const MAX_EVENTS = 500; // Define the maximum number of events to keep

// Updated helper function to process a single RawEventData object
function formatRawEvent(rawEvent: RawEventData): TokenEvent | null {
    if (!rawEvent) return null;

    // TODO: Adjust calculation if needed based on subscription payload
    // We might need to fetch token decimals separately or pass them as a prop if required for amountUsd calculation
    const decimals = 18; // Placeholder: ideally get this dynamically or pass as prop
    const swapValue = parseFloat(rawEvent.token0SwapValueUsd || '0');
    const amount0 = parseFloat(rawEvent.data?.amount0 || '0');
    const calculatedAmountUsd = swapValue * Math.abs(amount0 / (10 ** decimals));

    return {
        id: rawEvent.id,
        timestamp: rawEvent.timestamp,
        uniqueId: `${rawEvent.id}-${rawEvent.transactionHash}-${rawEvent.blockNumber}-${rawEvent.transactionIndex}-${rawEvent.logIndex}`,
        transactionHash: rawEvent.transactionHash,
        eventDisplayType: rawEvent.eventDisplayType,
        amountUsd: calculatedAmountUsd,
    };
}

// Skeleton Loader for Table Rows
function TransactionTableSkeleton() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <TableRow key={`skeleton-${index}`}>
          <TableCell><Skeleton className="h-4 w-16" /></TableCell>
          <TableCell><Skeleton className="h-4 w-24" /></TableCell>
          <TableCell><Skeleton className="h-4 w-16" /></TableCell>
          <TableCell><Skeleton className="h-4 w-20" /></TableCell>
        </TableRow>
      ))}
    </>
  );
}

export function TokenTransactions({ networkId, tokenId, initialEvents }: TokenTransactionsProps) {
  // Limit initial events
  const limitedInitialEvents = initialEvents.slice(0, MAX_EVENTS);
  const [events, setEvents] = useState<TokenEvent[]>(limitedInitialEvents);
  const [newestEventId, setNewestEventId] = useState<string | null>(null);
  const { sdk, isLoading, isAuthenticated } = useCodexSdk();
  const newestEventTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cleanupPromiseRef = useRef<Promise<CleanupFunction> | null>(null);

  // Effect to clear the newest event ID after a delay
  useEffect(() => {
    if (newestEventId) {
        if (newestEventTimeoutRef.current) {
            clearTimeout(newestEventTimeoutRef.current);
        }
        newestEventTimeoutRef.current = setTimeout(() => {
            setNewestEventId(null);
            newestEventTimeoutRef.current = null;
        }, 2000);
    }

    // Cleanup timeout on component unmount or if newestEventId changes before timeout finishes
    return () => {
        if (newestEventTimeoutRef.current) {
            clearTimeout(newestEventTimeoutRef.current);
        }
    };
  }, [newestEventId]);

  // Effect for subscription
  useEffect(() => {
    if (!sdk || !isAuthenticated || !networkId || !tokenId) {
      return;
    }

    // Define the observer object
    const observer = {
        next: (result: ExecutionResult<OnTokenEventsCreatedSubscription>) => {
            if (result.errors) {
                console.error("GraphQL errors:", result.errors);
            }
            const payload = result.data;
            const receivedEvents = payload?.onTokenEventsCreated?.events;
            if (Array.isArray(receivedEvents) && receivedEvents.length > 0) {
                const rawEvent = receivedEvents[0];
                if (rawEvent) {
                    const formattedEvent = formatRawEvent(rawEvent as RawEventData);
                    if (formattedEvent && formattedEvent.uniqueId) {
                        setNewestEventId(formattedEvent.uniqueId);
                        setEvents((prevEvents) => {
                            const exists = prevEvents.some(ev => ev.uniqueId === formattedEvent.uniqueId);
                            if (exists) {
                                return prevEvents;
                            } else {
                                const updatedEvents = [formattedEvent, ...prevEvents];
                                if (updatedEvents.length > MAX_EVENTS) {
                                    updatedEvents.splice(MAX_EVENTS);
                                }
                                return updatedEvents;
                            }
                        });
                    }
                }
            } else if (!result.errors) {
                console.log("Received subscription payload without data or events.");
            }
        },
        error: (error: Error) => {
            console.error('Subscription transport error:', error);
        },
        complete: () => {
            console.log('Subscription completed by server.');
        },
    };

    try {
        cleanupPromiseRef.current = sdk.subscriptions.onTokenEventsCreated(
            { // Argument 1: Input
                input: { networkId: networkId, tokenAddress: tokenId }
            },
            observer // Argument 2: Observer object
        );

        // Handle potential errors during promise resolution (optional)
        cleanupPromiseRef.current.catch(error => {
             console.error("Error obtaining cleanup function promise:", error);
        });

    } catch (error) {
        console.error("Failed to initiate subscription call:", error);
    }

    // Cleanup: Use the promise stored in the ref
    return () => {
      const promise = cleanupPromiseRef.current;
      if (promise) {
        const subId = `${tokenId}:${networkId}`;
        promise.then((cleanup) => {
            if (typeof cleanup === 'function') {
                cleanup();
                console.log(`Subscription cleanup executed for ${subId}`);
            }
        }).catch(error => {
            console.error("Error during subscription cleanup promise execution:", error);
        });
        cleanupPromiseRef.current = null; // Clear the ref
      }
    };

  }, [sdk, isAuthenticated, networkId, tokenId]);

  const showSkeleton = isLoading || (isAuthenticated && events.length === 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions (Live)</CardTitle>
      </CardHeader>
      <CardContent>
        {!isAuthenticated && !isLoading && <p className="text-muted-foreground">Session needed for live updates.</p>}
        <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Value (USD)</TableHead>
                <TableHead>Tx Hash</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {showSkeleton ? (
                <TransactionTableSkeleton />
              ) : (
                events.map((event) => {
                    const isNewest = event.uniqueId === newestEventId;
                    return (
                        <TableRow
                          key={event.uniqueId || event.id}
                          className={isNewest ? 'animate-row-pulse' : ''}
                        >
                          <TableCell>{event.eventDisplayType || 'N/A'}</TableCell>
                          <TableCell>{new Date(event.timestamp * 1000).toLocaleString()}</TableCell>
                          <TableCell>{event.amountUsd ? `$${event.amountUsd.toFixed(8)}` : 'N/A'}</TableCell>
                          <TableCell className="truncate">
                            <span title={event.transactionHash}>{event.transactionHash?.substring(0, 8) ?? 'N/A'}...</span>
                          </TableCell>
                        </TableRow>
                    );
                })
              )}
            </TableBody>
          </Table>
        {(events.length === 0 && !showSkeleton && !isLoading && isAuthenticated) &&
          <p className="text-muted-foreground pt-4">No transactions found yet.</p>
        }
      </CardContent>
    </Card>
  );
}