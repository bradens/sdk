'use client';

import React, { useEffect, useRef, memo } from 'react';
import {
    IChartingLibraryWidget as TradingViewWidget,
    ChartingLibraryWidgetOptions,
    LanguageCode,
    ResolutionString,
    IBasicDataFeed,
    LibrarySymbolInfo,
    OnReadyCallback,
    SearchSymbolsCallback,
    ResolveCallback,
    HistoryCallback,
    SubscribeBarsCallback,
    SearchSymbolResultItem,
} from './charting_library/charting_library';
import { useCodexSdk } from '@/hooks/useCodexSdk';
import { Codex, CleanupFunction } from '@codex-data/sdk';
import { OnTokenBarsUpdatedSubscription, TokenWithMetadata } from '@codex-data/sdk/dist/sdk/generated/graphql';
import { ExecutionResult } from 'graphql';
import { RankingDirection, TokenRankingAttribute } from '../gql/graphql';

const convertResolutionToBarPayload = (resolution: ResolutionString) => {
  switch (resolution) {
    case "1S":
      return "r1S";
    case "5S":
      return "r5S";
    case "15S":
      return "r15S";
    case "30S":
      return "r30S";
    case "1":
      return "r1";
    case "5":
      return "r5";
    case "15":
      return "r15";
    case "30":
      return "r30";
    case "60":
      return "r60";
    case "1D":
      return "r1D";
    default:
      return "r1";
  }
}

// Type definition for the expected TradingView object on window
interface TradingViewGlobal {
    widget: new (options: ChartingLibraryWidgetOptions) => TradingViewWidget;
    // Add other potential properties if needed, e.g., version
}

// Extend the global Window interface
declare global {
    interface Window {
        TradingView?: TradingViewGlobal;
    }
}

// Define the bar type TradingView expects
interface TradingViewBar {
    time: number; // TradingView expects milliseconds
    open: number;
    high: number;
    low: number;
    close: number;
    volume?: number;
}

// Assuming ChartDataPoint is defined elsewhere and imported, or define it here
// export interface ChartDataPoint { ... }

// --- Component Props ---
export interface TradingViewChartProps {
  symbol: string; // Now expected format: "<tokenId>:<networkId>"
  interval: ResolutionString;
  libraryPath?: string;
  containerId?: string;
  clientId?: string;
  userId?: string;
  fullscreen?: boolean;
  autosize?: boolean;
  studiesOverrides?: object;
}

// LocalStorage key for saving the interval
const LOCALSTORAGE_INTERVAL_KEY = 'tradingview_chart_interval';

const TradingViewChart: React.FC<TradingViewChartProps> = ({
    symbol, // Use the passed symbol directly
    interval: defaultInterval = '30' as ResolutionString, // Use prop as default
    containerId = 'tv_chart_container',
    libraryPath = '/charting_library/',
    clientId = 'tradingview.com',
    userId = 'public_user_id',
    fullscreen = false,
    autosize = true,
    studiesOverrides = {},
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const tvWidgetRef = useRef<TradingViewWidget | null>(null);
  const { sdk, isLoading: isSdkLoading } = useCodexSdk();
  const sdkRef = useRef<Codex | null>(null);
  const activeSubscriptionsRef = useRef<Record<string, Promise<CleanupFunction>>>({});
  const lastBarTimestampRef = useRef<Record<string, number>>({});

  useEffect(() => {
      sdkRef.current = sdk;
  }, [sdk]);

  useEffect(() => {
    if (!chartContainerRef.current || isSdkLoading) {
        console.log("[TradingViewChart] Waiting for container or SDK...");
        return;
    }

    const datafeed: IBasicDataFeed = {
        onReady: (callback: OnReadyCallback) => {
            console.log('[TradingViewChart Datafeed] onReady called');
            setTimeout(() => callback({ supported_resolutions: ["1S", "5S", "15S", "30S", "1", "5", "15", "30", "60", "1D"] as ResolutionString[] }), 0);
        },
        searchSymbols: async (userInput: string, exchange: string, symbolType: string, onResultReadyCallback: SearchSymbolsCallback) => {
            console.log('[TradingViewChart Datafeed] searchSymbols called', {userInput, exchange, symbolType});
            const currentSdk = sdkRef.current;
            if (!currentSdk) {
                console.warn('[TradingViewChart Datafeed searchSymbols] SDK not available.');
                onResultReadyCallback([]);
                return;
            }

            if (!userInput) {
                onResultReadyCallback([]);
                return;
            }

            try {
                console.log(`[TradingViewChart Datafeed searchSymbols] Searching for: "${userInput}"`);
                const searchResults = await currentSdk.queries.filterTokens({
                  phrase: userInput, limit: 30,
                  rankings: [{ attribute: TokenRankingAttribute.Volume24, direction: RankingDirection.Desc }],
                 });
                const results = searchResults.filterTokens?.results;

                if (results && results.length > 0) {
                    // Map over results, each item has a 'token' property
                    const tvSymbols = results.map(result => {
                        const token = result?.token as TokenWithMetadata; // Assert type and access token
                        if (!token || !token.address || typeof token.networkId !== 'number') {
                            return null; // Skip if essential data is missing
                        }
                        // Construct display names. Network name might not be directly on TokenWithMetadata.
                        // resolveSymbol will fetch full details including network name later.
                        const networkIdentifier = token.networkId; // Use networkId as a fallback

                        return {
                            symbol: `${token.address}:${token.networkId}`, // This is the ticker for resolveSymbol
                            full_name: `${token.symbol || token.name || token.address} / Network ${networkIdentifier}`,
                            description: `${token.name || token.symbol || token.id} on Network ${networkIdentifier}`,
                            exchange: 'Codex',
                            ticker: `${token.address}:${token.networkId}`, // Unique ID for TradingView
                            type: 'crypto',
                        };
                    }).filter(Boolean) as SearchSymbolResultItem[]; // Filter out nulls and assert type

                    console.log(`[TradingViewChart Datafeed searchSymbols] Found ${tvSymbols.length} symbols.`);
                    onResultReadyCallback(tvSymbols);
                } else {
                    console.log(`[TradingViewChart Datafeed searchSymbols] No symbols found for "${userInput}".`);
                    onResultReadyCallback([]);
                }
            } catch (error) {
                console.error('[TradingViewChart Datafeed searchSymbols] Error searching symbols:', error);
                onResultReadyCallback([]);
            }
        },
        resolveSymbol: async (symbolName: string, onSymbolResolvedCallback: ResolveCallback) => {
            console.log('[TradingViewChart Datafeed] resolveSymbol called for:', symbolName);

            // Default/fallback symbol info
            let tokenDisplay = symbolName;
            let tokenDescription = symbolName;

            // Parse networkId and tokenId from ticker
            const networkBoundaryIndex = symbolName?.lastIndexOf(':');
            if (!networkBoundaryIndex) {
                console.error(`[TradingViewChart resolveSymbol] Invalid ticker format: ${symbolName}. Expected "<tokenId>:<networkId>".`);
                 // Proceed with default display name
            } else {
                const tokenId = symbolName.slice(0, networkBoundaryIndex);
                const networkIdStr = symbolName.slice(networkBoundaryIndex + 1);
                const networkId = parseInt(networkIdStr, 10);

                if (tokenId && !isNaN(networkId)) {
                    const currentSdk = sdkRef.current;
                    if (currentSdk) {
                        try {
                            console.log(`[TradingViewChart resolveSymbol] Fetching token details for ${tokenId} on network ${networkId}`);
                            const detailsResult = await currentSdk.queries.token({ input: { networkId: networkId, address: tokenId } });
                            const details = detailsResult.token;
                            if (details) {
                                tokenDisplay = details.symbol || details.name || tokenId; // Prioritize symbol, then name, then ID
                                tokenDescription = details.name || details.symbol || symbolName; // Prioritize name, then symbol, then composite ID
                                console.log(`[TradingViewChart resolveSymbol] Using display: ${tokenDisplay}, description: ${tokenDescription}`);
                            } else {
                                console.warn(`[TradingViewChart resolveSymbol] No details found for ${tokenId}:${networkId}.`);
                            }
                        } catch (error) {
                            console.error(`[TradingViewChart resolveSymbol] Error fetching token details for ${tokenId}:${networkId}:`, error);
                            // Fallback to defaults if fetch fails
                        }
                    } else {
                         console.warn("[TradingViewChart resolveSymbol] SDK not available when resolving symbol.");
                    }
                } else {
                    console.error(`[TradingViewChart resolveSymbol] Could not parse valid tokenId/networkId from ${symbolName}`);
                }
            }

            const symbolInfo: LibrarySymbolInfo = {
                ticker: symbolName, // Keep original ticker
                name: tokenDisplay, // Use fetched symbol/name
                description: tokenDescription, // Use fetched name/symbol
                type: 'crypto',
                session: '24x7',
                timezone: 'Etc/UTC',
                exchange: 'Codex',
                listed_exchange: 'Codex',
                minmov: 1,
                minmove2: 1,
                pricescale: 100000000,
                has_intraday: true,
                has_weekly_and_monthly: true,
                has_seconds: true,
                volume_precision: 2,
                data_status: 'streaming',
                supported_resolutions: ["1S", "5S", "15S", "30S", "1", "5", "15", "30", "60", "1D"] as ResolutionString[],
                format: 'price',
            };
             // Use setTimeout to ensure it runs after the current execution context
            setTimeout(() => onSymbolResolvedCallback(symbolInfo), 0);
        },
        getBars: async (symbolInfo: LibrarySymbolInfo, resolution: ResolutionString, periodParams: { from: number; to: number; firstDataRequest: boolean; countBack?: number }, onHistoryCallback: HistoryCallback, _onErrorCallback: (reason: string) => void) => {
            // Add guard for ticker
            if (!symbolInfo.ticker) {
                console.error("[TradingViewChart getBars] Symbol ticker is missing.");
                _onErrorCallback("Symbol ticker missing");
                return;
            }

            const currentSdk = sdkRef.current;
            if (!currentSdk) {
                console.error("[TradingViewChart getBars] SDK not available.");
                _onErrorCallback("SDK not available");
                return;
            }
            const { from, to } = periodParams;

            const adjustedTo = to > Math.floor(Date.now() / 1000) ? Math.floor(Date.now() / 1000) : to;

            try {
                const sdkResolution = resolution.toString();
                console.log(`[TradingViewChart getBars] Fetching bars for ${symbolInfo.ticker} from ${new Date(from*1000)} to ${new Date(to*1000)} resolution ${sdkResolution}`);

                const barsResult = await currentSdk.queries.getBars({
                    symbol: symbolInfo.ticker, // Now guaranteed to be string
                    from: from,
                    to: adjustedTo,
                    resolution: sdkResolution,
                    removeEmptyBars: true,
                    removeLeadingNullValues: true
                });

                const barsData = barsResult.getBars;
                let tradingViewBars: TradingViewBar[] = [];

                if (barsData?.t) {
                    tradingViewBars = barsData.t.map((time: number, index: number) => {
                        const open = barsData.o?.[index];
                        const high = barsData.h?.[index];
                        const low = barsData.l?.[index];
                        const close = barsData.c?.[index];
                        const volume = barsData.v?.[index];

                        if (open == null || high == null || low == null || close == null) {
                            return null;
                        }

                        // Create the bar object explicitly matching TradingViewBar
                        const bar: TradingViewBar = {
                            time: time * 1000,
                            open: open,
                            high: high,
                            low: low,
                            close: close,
                        };
                        // Add volume only if it exists
                        if (volume != null) {
                            bar.volume = volume;
                        }
                        return bar;

                    }).filter(Boolean) as TradingViewBar[]; // Add type assertion

                    console.log(`[TradingViewChart getBars] Mapped ${tradingViewBars.length} valid bars.`);
                    onHistoryCallback(tradingViewBars, { noData: tradingViewBars.length === 0 });
                } else {
                    console.log(`[TradingViewChart getBars] No time data returned from SDK.`);
                    onHistoryCallback([], { noData: true });
                }
            } catch (error) {
                 console.error("[TradingViewChart getBars] Error fetching bars:", error);
                _onErrorCallback("Failed to fetch bars");
            }
        },
        subscribeBars: (symbolInfo: LibrarySymbolInfo, resolution: ResolutionString, onRealtimeCallback: SubscribeBarsCallback, subscriberUID: string) => {
            console.log('[TradingViewChart Datafeed] subscribeBars called', { symbolInfo, resolution, subscriberUID });
            const currentSdk = sdkRef.current;
            if (!currentSdk) {
                console.error("[TradingViewChart subscribeBars] SDK not available.");
                return;
            }

            // Parse networkId and tokenId from ticker
            const networkBoundaryIndex = symbolInfo.ticker?.lastIndexOf(':');
            if (!networkBoundaryIndex) {
                console.error(`[TradingViewChart subscribeBars] Invalid ticker format: ${symbolInfo.ticker}. Expected "<tokenId>:<networkId>".`);
                return;
            }
            const tokenId = symbolInfo.ticker?.slice(0, networkBoundaryIndex);
            const networkIdStr = symbolInfo.ticker?.slice(networkBoundaryIndex + 1);
            if (!networkIdStr) {
                console.error(`[TradingViewChart subscribeBars] Invalid networkId in ticker: ${symbolInfo.ticker}`);
                return;
            }
            const networkId = parseInt(networkIdStr, 10);
            if (isNaN(networkId)) {
                 console.error(`[TradingViewChart subscribeBars] Invalid networkId in ticker: ${symbolInfo.ticker}`);
                return;
            }

            // --- Define the SDK observer ---
            const observer = {
                next: (result: ExecutionResult<OnTokenBarsUpdatedSubscription>) => {
                    if (result.errors) {
                        console.error("[TradingViewChart subscribeBars] GraphQL errors:", result.errors);
                        return;
                    }
                    const barPayload = result.data?.onTokenBarsUpdated;

                    const aggs = barPayload?.aggregates?.[convertResolutionToBarPayload(resolution)]

                    const aggsUsd = aggs?.usd

                    console.log("[TradingViewChart subscribeBars] Received payload:",
                      aggsUsd?.t,
                      aggsUsd?.o,
                      aggsUsd?.h,
                      aggsUsd?.l,
                      aggsUsd?.c,
                      aggsUsd?.v,
                      !!(aggsUsd?.t && aggsUsd.o && aggsUsd.h && aggsUsd.l && aggsUsd.c)
                    );
                    if (aggsUsd?.t && aggsUsd.o && aggsUsd.h && aggsUsd.l && aggsUsd.c) {
                        const newBar: TradingViewBar = {
                            time: aggsUsd.t * 1000, // Convert s to ms
                            open: aggsUsd.o,
                            high: aggsUsd.h,
                            low: aggsUsd.l,
                            close: aggsUsd.c,
                            volume: aggsUsd.v ?? undefined, // Handle volume
                        };

                        console.log("New bar", newBar)

                        // --- Time Violation Check ---
                        const lastTimestamp = lastBarTimestampRef.current[subscriberUID];

                        if (lastTimestamp != null && newBar.time < lastTimestamp) {
                            console.error(`[TradingViewChart subscribeBars] Ignoring out-of-order bar for ${subscriberUID}. New: ${new Date(newBar.time)}, Last: ${new Date(lastTimestamp)}`);
                            return; // Discard older bar
                        }

                        console.log("Pushing new bar", newBar)
                        onRealtimeCallback(newBar); // Pass valid bar to TradingView

                        // Update the last timestamp for this subscription
                        lastBarTimestampRef.current[subscriberUID] = newBar.time;

                    } else {
                        console.warn("[TradingViewChart subscribeBars] Received payload without complete bar data.", barPayload);
                    }
                },
                error: (error: Error) => {
                    console.error('[TradingViewChart subscribeBars] Subscription transport error:', error);
                    // Potentially notify the chart library of the error?
                    delete lastBarTimestampRef.current[subscriberUID];
                },
                complete: () => {
                    console.log('[TradingViewChart subscribeBars] Subscription completed by server.');
                    // Remove subscription from tracking if completed?
                    delete activeSubscriptionsRef.current[subscriberUID];
                    delete lastBarTimestampRef.current[subscriberUID];
                },
            };

            // --- Initiate SDK subscription ---
            try {
                console.log(`[TradingViewChart subscribeBars] Initiating SDK subscription for ${tokenId}:${networkId}`);
                const subscriptionPromise = currentSdk.subscriptions.onTokenBarsUpdated(
                    { tokenId: `${tokenId}:${networkId}` },
                    observer
                );

                // Store the promise containing the cleanup function
                activeSubscriptionsRef.current[subscriberUID] = subscriptionPromise;

                subscriptionPromise.catch(error => {
                    console.error("[TradingViewChart subscribeBars] Error obtaining cleanup promise:", error);
                    // Remove from tracking if promise itself fails
                    delete activeSubscriptionsRef.current[subscriberUID];
                    delete lastBarTimestampRef.current[subscriberUID];
                });

            } catch (error) {
                 console.error("[TradingViewChart subscribeBars] Failed to initiate SDK subscription call:", error);
            }
        },
        unsubscribeBars: (subscriberUID: string) => {
            console.log('[TradingViewChart Datafeed] unsubscribeBars called', { subscriberUID });
            // Clear timestamp ref immediately
            delete lastBarTimestampRef.current[subscriberUID];
            const subscriptionPromise = activeSubscriptionsRef.current[subscriberUID];
            if (subscriptionPromise) {
                subscriptionPromise.then(cleanup => {
                    if (typeof cleanup === 'function') {
                        console.log(`[TradingViewChart unsubscribeBars] Executing cleanup for ${subscriberUID}`);
                        cleanup();
                    }
                }).catch(error => {
                    console.error("[TradingViewChart unsubscribeBars] Error during cleanup promise execution:", error);
                }).finally(() => {
                    // Always remove from tracking after attempt
                    delete activeSubscriptionsRef.current[subscriberUID];
                });
            } else {
                console.warn(`[TradingViewChart unsubscribeBars] No active subscription found for UID: ${subscriberUID}`);
            }
        },
    };

    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: symbol,
      datafeed: datafeed,
      interval: localStorage.getItem(LOCALSTORAGE_INTERVAL_KEY) as ResolutionString || defaultInterval,
      container: chartContainerRef.current,
      library_path: libraryPath,
      locale: 'en' as LanguageCode,
      client_id: clientId,
      user_id: userId,
      fullscreen: fullscreen,
      autosize: autosize,
      studies_overrides: studiesOverrides,
      toolbar_bg: '#030303',
      theme: 'dark',
      load_last_chart: true,
      enabled_features: [
        "seconds_resolution",
        "use_localstorage_for_settings",
        "save_chart_properties_to_local_storage",
      ],
      disabled_features: [
        "left_toolbar",
        "display_market_status",
        "header_compare",
        "header_symbol_search",
        "popup_hints",
        "save_shortcut",
        "symbol_search_hot_key",
        "header_saveload"
      ],
    };

    // Access widget constructor via typed window object
    if (!window.TradingView || !window.TradingView.widget) {
        console.error("[TradingViewChart] TradingView library or widget constructor not found on window object.");
        return;
    }

    console.log("[TradingViewChart Effect] Initializing widget...");
    // Instantiate using the typed window object
    const tvWidget = new window.TradingView.widget(widgetOptions);
    tvWidgetRef.current = tvWidget;

    tvWidget.onChartReady(() => {
      console.log("[TradingViewChart Effect] Chart is ready, subscribing to interval changes.");
      tvWidget.activeChart().onDataLoaded().subscribe(null, () => {
        const res = tvWidget.activeChart().resolution();
        if (typeof window !== 'undefined') {
            console.log('[TradingViewChart Event] Saving to localStorage:', res);
            localStorage.setItem(LOCALSTORAGE_INTERVAL_KEY, res);
        }
      });
    });

    // --- Cleanup Function ---
    return () => {
      // Cleanup widget using remove() - this should handle internal listeners
      if (tvWidgetRef.current) {
        console.log("[TradingViewChart] Removing widget");
        tvWidgetRef.current.remove();
        tvWidgetRef.current = null;
      }
      // Cleanup SDK subscriptions & timestamps
      console.log("[TradingViewChart] Cleaning up any dangling subscriptions and timestamps...");
      Object.keys(activeSubscriptionsRef.current).forEach(uid => {
          const promise = activeSubscriptionsRef.current[uid];
          promise.then(cleanup => { if(typeof cleanup === 'function') cleanup(); })
                 .catch(e => console.error("[TradingViewChart] Error during final subscription cleanup:", e));
      });
      activeSubscriptionsRef.current = {};
      lastBarTimestampRef.current = {};
    };
  }, [symbol, libraryPath, clientId, userId, fullscreen, autosize, studiesOverrides, isSdkLoading, defaultInterval]);

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      {isSdkLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 z-10">
           <p>Loading Chart...</p>
        </div>
      )}
      <div
          ref={chartContainerRef}
          id={containerId}
          className="tv-chart-container h-full"
          style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default memo(TradingViewChart);