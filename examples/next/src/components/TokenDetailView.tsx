'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useCodexSdk } from '@/hooks/useCodexSdk';
import {
    OnTokenEventsCreatedSubscription,
    OnTokenBarsUpdatedSubscription,
    GetTokenEventsQuery,
    EventDisplayType, // For RawEventData type
} from '@codex-data/sdk/dist/sdk/generated/graphql';
import { ExecutionResult } from 'graphql';
import { CleanupFunction } from '@codex-data/sdk';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { TokenChart, ChartDataPoint } from "@/components/TokenChart";
import { TokenTransactions } from "@/components/TokenTransactions";

// --- Types (Copied/adapted from page.tsx and child components) ---
// Event type for display
type TokenEvent = {
  id: string;
  timestamp: number;
  price: number | null;
  transactionHash: string;
  eventDisplayType?: string | null;
  amountUsd?: number | null;
  uniqueId?: string;
};
// Type for raw event data from subscription/query
type RawEventData = NonNullable<NonNullable<GetTokenEventsQuery['getTokenEvents']>['items']>[number];
// Token details type
type TokenDetails = {
  id: string;
  address: string;
  name?: string | null;
  symbol?: string | null;
  networkId?: number | null;
  description?: string | null;
  decimals?: number | null;
  info?: {
    imageThumbUrl?: string | null;
  } | null;
};

// --- Component Props ---
interface TokenDetailViewProps {
  initialDetails: TokenDetails | null;
  initialBars: ChartDataPoint[];
  initialEvents: TokenEvent[];
  networkId: number;
  tokenId: string; // address
}

const MAX_EVENTS = 100; // Max events for transactions table

// --- Helper Functions (Moved/Adapted) ---
function formatCurrency(num: number | undefined | null): string {
  if (num === undefined || num === null) return '-';
  num = parseFloat(num.toString());
  return `$${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 16 })}`;
}

// Format raw event from subscription
export function formatRawEvent(rawEvent: RawEventData, decimals: number | null | undefined, tokenAddress: string): TokenEvent | null {
    if (!rawEvent) return null;
    const resolvedDecimals = decimals ?? 18;
    const swapValue = parseFloat(rawEvent.token0SwapValueUsd || '0');
    const amount0 = parseFloat(rawEvent.data?.amount0 || '0');
    const calculatedAmountUsd = swapValue * Math.abs(amount0 / (10 ** resolvedDecimals));

    // Parse price string to float or null
    const priceString = rawEvent.token0Address === tokenAddress ? rawEvent.token0SwapValueUsd : rawEvent.token1SwapValueUsd;
    const price = priceString ? parseFloat(priceString) : null;

    return {
        id: rawEvent.id,
        timestamp: rawEvent.timestamp,
        uniqueId: `${rawEvent.id}-${rawEvent.transactionHash}-${rawEvent.blockNumber}-${rawEvent.transactionIndex}-${rawEvent.logIndex}`,
        price: price, // Use parsed value
        transactionHash: rawEvent.transactionHash,
        eventDisplayType: rawEvent.eventDisplayType,
        amountUsd: calculatedAmountUsd,
    };
}

// Format raw bar from subscription
function formatSubscriptionBar(payload: OnTokenBarsUpdatedSubscription['onTokenBarsUpdated'] | undefined | null): ChartDataPoint | null {
    const aggs = payload?.aggregates?.r1?.usd;
    if (!aggs?.t || !aggs?.c) return null;
    return { time: aggs.t, open: aggs.o, high: aggs.h, low: aggs.l, close: aggs.c };
}


// --- Main Client Component ---
export function TokenDetailView({
  initialDetails,
  initialBars,
  initialEvents,
  networkId,
  tokenId
}: TokenDetailViewProps) {

  // --- State Management ---
  const [details] = useState<TokenDetails | null>(initialDetails); // Details generally don't change
  const [chartData, setChartData] = useState<ChartDataPoint[]>(initialBars);
  const [events, setEvents] = useState<TokenEvent[]>(initialEvents.slice(0, MAX_EVENTS));
  const [newestEventTimestamp, setNewestEventTimestamp] = useState<number | null>(null); // For transaction row animation

  const { sdk, isLoading: isSdkLoading, isAuthenticated } = useCodexSdk();

  // Refs for cleanup functions and animation timeout
  const eventsCleanupPromiseRef = useRef<Promise<CleanupFunction> | null>(null);
  const barsCleanupPromiseRef = useRef<Promise<CleanupFunction> | null>(null);
  const newestEventTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const tokenName = details?.name || tokenId;
  const tokenSymbol = details?.symbol ? `(${details.symbol})` : '';

  const lastPrice = useMemo(() => {
    const  allEvents = initialEvents.concat(events);
    const lastSwapEventIndex = allEvents.findLastIndex((v) => {
      if (v.eventDisplayType === EventDisplayType.Buy || v.eventDisplayType === EventDisplayType.Sell) {
        return v;
      }
    })
    const lastSwapEvent = allEvents[lastSwapEventIndex];
    return lastSwapEvent.price
  }, [events, initialEvents])

  // --- Effects ---
  // Effect for Transaction Animation Timeout
  useEffect(() => {
    if (newestEventTimestamp) {
        if (newestEventTimeoutRef.current) clearTimeout(newestEventTimeoutRef.current);
        newestEventTimeoutRef.current = setTimeout(() => {
            setNewestEventTimestamp(null);
            newestEventTimeoutRef.current = null;
        }, 2000);
    }
    return () => {
        if (newestEventTimeoutRef.current) clearTimeout(newestEventTimeoutRef.current);
    };
  }, [newestEventTimestamp]);

  // Effect for Events Subscription
  useEffect(() => {
    if (!sdk || !isAuthenticated || !networkId || !tokenId) return;
    console.log(`[TokenDetailView] Subscribing to events for ${tokenId}`);

    const observer = {
        next: (result: ExecutionResult<OnTokenEventsCreatedSubscription>) => {
            if (result.errors) console.error("[TokenDetailView Events] GraphQL errors:", result.errors);
            const payload = result.data;
            const receivedEvents = payload?.onTokenEventsCreated?.events;
            if (Array.isArray(receivedEvents) && receivedEvents.length > 0) {
                const rawEvent = receivedEvents[0];
                if (rawEvent) {
                    const formattedEvent = formatRawEvent(rawEvent as RawEventData, details?.decimals, tokenId);
                    if (formattedEvent && formattedEvent.uniqueId) {
                        setNewestEventTimestamp(formattedEvent.timestamp);
                        setEvents((prevEvents) => {
                            const exists = prevEvents.some(ev => ev.uniqueId === formattedEvent.uniqueId);
                            if (exists) return prevEvents;
                            const updatedEvents = [formattedEvent, ...prevEvents];
                            if (updatedEvents.length > MAX_EVENTS) updatedEvents.splice(MAX_EVENTS);
                            return updatedEvents;
                        });
                    }
                }
            }
        },
        error: (error: Error) => console.error('[TokenDetailView Events] Subscription transport error:', error),
        complete: () => console.log('[TokenDetailView Events] Subscription completed by server.'),
    };
    try {
        eventsCleanupPromiseRef.current = sdk.subscriptions.onTokenEventsCreated({ input: { networkId: networkId, tokenAddress: tokenId } }, observer);
        eventsCleanupPromiseRef.current.catch(error => console.error("[TokenDetailView Events] Error obtaining cleanup promise:", error));
    } catch (error) { console.error("[TokenDetailView Events] Failed to initiate subscription call:", error); }

    return () => {
      const promise = eventsCleanupPromiseRef.current;
      if (promise) {
        promise.then(cleanup => { if (typeof cleanup === 'function') cleanup(); })
               .catch(error => console.error("[TokenDetailView Events] Error during cleanup promise:", error));
        eventsCleanupPromiseRef.current = null;
      }
    };
  }, [sdk, isAuthenticated, networkId, tokenId, details?.decimals]); // Add decimals dependency

  // Effect for Bars Subscription
  useEffect(() => {
    if (!sdk || !isAuthenticated || !networkId || !tokenId) return;
    console.log(`[TokenDetailView] Subscribing to bars for ${tokenId}`);

    const observer = {
      next: (result: ExecutionResult<OnTokenBarsUpdatedSubscription>) => {
        if (result.errors) console.error("[TokenDetailView Bars] GraphQL errors:", result.errors);
        const newBarRawPayload = result.data?.onTokenBarsUpdated;
        const newBar = formatSubscriptionBar(newBarRawPayload);
        if (newBar) {
          setChartData((currentData) => {
            const lastBar = currentData[currentData.length - 1];
            if (lastBar && lastBar.time === newBar.time) return [...currentData.slice(0, -1), newBar]; // Update last
            if (!lastBar || newBar.time > lastBar.time) return [...currentData, newBar]; // Append new
            return currentData; // Ignore old/duplicate
          });
        }
      },
      error: (error: Error) => console.error('[TokenDetailView Bars] Subscription transport error:', error),
      complete: () => console.log('[TokenDetailView Bars] Subscription completed by server.'),
    };
    try {
        barsCleanupPromiseRef.current = sdk.subscriptions.onTokenBarsUpdated({ tokenId: `${tokenId}:${networkId}` }, observer);
        barsCleanupPromiseRef.current.catch(error => console.error("[TokenDetailView Bars] Error obtaining cleanup promise:", error));
    } catch (error) { console.error("[TokenDetailView Bars] Failed to initiate subscription call:", error); }

    return () => {
      const promise = barsCleanupPromiseRef.current;
      if (promise) {
        promise.then(cleanup => { if (typeof cleanup === 'function') cleanup(); })
               .catch(error => console.error("[TokenDetailView Bars] Error during cleanup promise:", error));
        barsCleanupPromiseRef.current = null;
      }
    };
  }, [sdk, isAuthenticated, networkId, tokenId]);

  // --- Render Logic ---
  return (
    <>
      {/* Header (using potentially stale initialDetails, could be updated if needed) */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold truncate pr-4">
          {tokenName} {tokenSymbol}
        </h1>
        <Link href={`/networks/${networkId}`} className="text-sm hover:underline whitespace-nowrap">
          &lt; Back to Network
        </Link>
      </div>

      {/* Main Content Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left/Center Area (Chart and Transactions) */}
        <div className="lg:col-span-2 space-y-6">
          {/* TokenChart now receives chartData state */}
          <TokenChart
              chartData={chartData}
              title={`${tokenSymbol || 'Token'} Price Chart`}
              // Pass isLoading state for its internal skeleton
              isLoading={isSdkLoading || initialBars.length === 0}
          />
          {/* TokenTransactions now receives events state and newestEventTimestamp */}
          <TokenTransactions
              events={events}
              newestEventTimestamp={newestEventTimestamp}
              // Pass isLoading state for its internal skeleton
              isLoading={isSdkLoading || (isAuthenticated && events.length === 0 && initialEvents.length > 0)} // Show skeleton if sdk loading or initial events were present but state is empty
              isAuthenticated={isAuthenticated}
          />
        </div>

        {/* Right Area (Info Panel - uses latestPrice state) */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              {details?.info?.imageThumbUrl ? (
                 <Image src={details.info.imageThumbUrl} alt={`${details.name || 'Token'} icon`} width={40} height={40} className="rounded-full" />
              ) : (
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg font-semibold">
                    {details?.symbol ? details.symbol[0] : 'T'}
                  </div>
              )}
              <div>
                <CardTitle>Information</CardTitle>
                {details?.symbol && <CardDescription>{details.symbol}</CardDescription>}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Display LATEST Price from state */}
              <div>
                  <strong className="text-sm text-muted-foreground block">Current Price</strong>
                  <span className="text-xl font-semibold">{formatCurrency(lastPrice)}</span>
              </div>

              {details ? (
                <>
                  <div>
                    <strong className="text-sm text-muted-foreground block">Address</strong>
                    <span className="font-mono text-xs break-all block" title={tokenId}>{tokenId}</span>
                  </div>
                  {details.description && (
                    <div>
                       <strong className="text-sm text-muted-foreground block">Description</strong>
                       <p className="text-sm">{details.description}</p>
                    </div>
                  )}
                </>
              ) : (
                 <Skeleton className="h-4 w-3/4 mt-2" /> // Skeleton if details are missing
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}