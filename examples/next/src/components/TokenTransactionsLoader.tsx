'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useCodexSdk } from '@/hooks/useCodexSdk';
import {
    OnTokenEventsCreatedSubscription,
    GetTokenEventsQuery,
} from '@codex-data/sdk/dist/sdk/generated/graphql';
import { ExecutionResult } from 'graphql';
import { CleanupFunction } from '@codex-data/sdk';
import { TokenTransactions } from "@/components/TokenTransactions"; // Import the display component

// --- Types ---
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

// --- Component Props ---
interface TokenTransactionsLoaderProps {
  networkId: number;
  tokenId: string;
  decimals?: number | null;
  onPriceUpdate: (price: number | null) => void;
}

const MAX_EVENTS = 50; // Limit initial fetch and display

// --- Helper Function (Moved from TokenDetailView) ---
function formatRawEvent(rawEvent: RawEventData, decimals: number | null | undefined, tokenAddress: string): TokenEvent | null {
    if (!rawEvent) return null;
    const resolvedDecimals = decimals ?? 18;

    // Helper to safely get string representation
    const safeToString = (value: unknown): string | undefined => {
        if (value == null) return undefined;
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            return value.toString();
        }
        // Add checks for other potential types if necessary
        return undefined;
    }

    // Safely parse potential string values from SDK
    const token0SwapValueUsdStr = safeToString(rawEvent.token0SwapValueUsd);
    const token1SwapValueUsdStr = safeToString(rawEvent.token1SwapValueUsd);
    const amount0Str = safeToString(rawEvent.data?.amount0);

    const swapValue = parseFloat(token0SwapValueUsdStr || '0');
    const amount0 = parseFloat(amount0Str || '0');
    const calculatedAmountUsd = swapValue * Math.abs(amount0 / (10 ** resolvedDecimals));

    const priceString = rawEvent.token0Address === tokenAddress ? token0SwapValueUsdStr : token1SwapValueUsdStr;
    const price = priceString ? parseFloat(priceString) : null;

    return {
        id: rawEvent.id,
        timestamp: rawEvent.timestamp,
        uniqueId: `${rawEvent.id}-${rawEvent.transactionHash}-${rawEvent.blockNumber}-${rawEvent.transactionIndex}-${rawEvent.logIndex}`,
        price: price,
        transactionHash: rawEvent.transactionHash,
        eventDisplayType: rawEvent.eventDisplayType,
        amountUsd: calculatedAmountUsd,
    };
}

// --- Loader Component ---
const TokenTransactionsLoader: React.FC<TokenTransactionsLoaderProps> = ({
    networkId,
    tokenId,
    decimals,
    onPriceUpdate
}) => {
    const [events, setEvents] = useState<TokenEvent[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [newestEventTimestamp, setNewestEventTimestamp] = useState<number | null>(null);
    const { sdk, isLoading: isSdkLoading, isAuthenticated } = useCodexSdk();

    const eventsCleanupPromiseRef = useRef<Promise<CleanupFunction> | null>(null);
    const newestTimestampTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Effect for initial fetch
    useEffect(() => {
        let isMounted = true;
        setIsLoading(true);
        onPriceUpdate(null);

        if (!sdk || !networkId || !tokenId) {
            setIsLoading(false);
            return;
        }

        sdk.queries.getTokenEvents({ query: { networkId: networkId, address: tokenId }, limit: MAX_EVENTS })
            .then(result => {
                if (!isMounted) return;
                const rawItems = result.getTokenEvents?.items;
                let latestFetchedPrice: number | null = null;
                if (rawItems) {
                    const formatted = rawItems
                        .filter((item): item is RawEventData => !!item)
                        .map(raw => formatRawEvent(raw, decimals, tokenId))
                        .filter((item): item is TokenEvent => !!item);
                    setEvents(formatted);
                    latestFetchedPrice = formatted.length > 0 ? formatted[0].price : null;
                } else {
                    setEvents([]);
                }
                onPriceUpdate(latestFetchedPrice);
            })
            .catch(error => {
                console.error("[TokenTransactionsLoader] Error fetching initial events:", error);
                if (isMounted) {
                   setEvents([]);
                   onPriceUpdate(null);
                }
            })
            .finally(() => {
                if (isMounted) setIsLoading(false);
            });

        return () => {
            isMounted = false;
            onPriceUpdate(null);
        };
    }, [sdk, networkId, tokenId, decimals, onPriceUpdate]);

    // Effect for Live Subscription
    useEffect(() => {
        let isMounted = true;
        if (!sdk || !isAuthenticated || !networkId || !tokenId) return;

        const observer = {
            next: (result: ExecutionResult<OnTokenEventsCreatedSubscription>) => {
                 if (!isMounted) return;
                 if (result.errors) console.error("[TokenTransactionsLoader Events] GraphQL errors:", result.errors);
                 const payload = result.data;
                 const receivedEvents = payload?.onTokenEventsCreated?.events;
                 if (Array.isArray(receivedEvents) && receivedEvents.length > 0) {
                     const rawEvent = receivedEvents[0];
                     if (rawEvent) {
                         const formattedEvent = formatRawEvent(rawEvent as RawEventData, decimals, tokenId);
                         if (formattedEvent && formattedEvent.uniqueId) {
                             setNewestEventTimestamp(formattedEvent.timestamp);
                             onPriceUpdate(formattedEvent.price);
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
             error: (error: Error) => console.error('[TokenTransactionsLoader Events] Subscription transport error:', error),
             complete: () => console.log('[TokenTransactionsLoader Events] Subscription completed by server.'),
         };
         try {
             eventsCleanupPromiseRef.current = sdk.subscriptions.onTokenEventsCreated({ input: { networkId: networkId, tokenAddress: tokenId } }, observer);
             eventsCleanupPromiseRef.current.catch(error => console.error("[TokenTransactionsLoader Events] Error obtaining cleanup promise:", error));
         } catch (error) { console.error("[TokenTransactionsLoader Events] Failed to initiate subscription call:", error); }

         return () => {
           isMounted = false;
           const promise = eventsCleanupPromiseRef.current;
           if (promise) {
             promise.then(cleanup => { if (typeof cleanup === 'function') cleanup(); })
                    .catch(error => console.error("[TokenTransactionsLoader Events] Error during cleanup promise:", error));
             eventsCleanupPromiseRef.current = null;
           }
           onPriceUpdate(null);
         };
     }, [sdk, isAuthenticated, networkId, tokenId, decimals, onPriceUpdate]);

    // Effect for Transaction Animation Timeout
    useEffect(() => {
        if (newestEventTimestamp) {
            if (newestTimestampTimeoutRef.current) clearTimeout(newestTimestampTimeoutRef.current);
            newestTimestampTimeoutRef.current = setTimeout(() => {
                setNewestEventTimestamp(null);
                newestTimestampTimeoutRef.current = null;
            }, 2000);
        }
        return () => {
            if (newestTimestampTimeoutRef.current) clearTimeout(newestTimestampTimeoutRef.current);
        };
    }, [newestEventTimestamp]);

    return (
        <TokenTransactions
            events={events}
            newestEventTimestamp={newestEventTimestamp}
            isLoading={isLoading || isSdkLoading}
            isAuthenticated={isAuthenticated}
        />
    );
};

export default TokenTransactionsLoader;