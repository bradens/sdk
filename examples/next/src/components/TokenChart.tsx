'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming shadcn Card is installed
import { useCodexSdk } from '@/hooks/useCodexSdk'; // Import SDK hook
import { OnTokenBarsUpdatedSubscription } from '@codex-data/sdk/dist/sdk/generated/graphql'; // Import subscription type
import { ExecutionResult } from 'graphql'; // Import ExecutionResult type
import { CleanupFunction } from '@codex-data/sdk'; // Import CleanupFunction type

// Type for the data expected by the chart (from getBars)
// Adjust based on actual getBars response structure
export interface ChartDataPoint {
  time: number; // Assuming timestamp
  open?: number | null;
  high?: number | null;
  low?: number | null;
  close?: number | null;
  // Add other fields like volume if needed
}

interface TokenChartProps {
  initialData: ChartDataPoint[]; // Renamed from data
  networkId: number; // Need networkId separately
  tokenId: string; // Need tokenId (address) separately
  title?: string;
}

// Helper to format incoming bar data from subscription
// Assuming data is nested under aggregates -> r1 -> usd
function formatSubscriptionBar(payload: OnTokenBarsUpdatedSubscription['onTokenBarsUpdated'] | undefined | null): ChartDataPoint | null {
  // Adjust 'r1' if a different resolution is expected/relevant
  const usdData = payload?.aggregates?.r1?.usd;
  if (!usdData?.t || !usdData?.c) return null; // Check for time and close within the nested usd object
  return {
    time: usdData.t,
    open: usdData.o,
    high: usdData.h,
    low: usdData.l,
    close: usdData.c,
  };
}

export const TokenChart: React.FC<TokenChartProps> = ({ initialData, networkId, tokenId, title = "Price Chart" }) => {
  const [chartData, setChartData] = useState<ChartDataPoint[]>(initialData);
  const { sdk, isLoading, isAuthenticated } = useCodexSdk(); // Use SDK Hook
  const cleanupPromiseRef = useRef<Promise<CleanupFunction> | null>(null); // Ref for cleanup

  // Effect for subscription
  useEffect(() => {
    if (!sdk || !isAuthenticated || !networkId || !tokenId) {
      console.log('[TokenChart] SDK not ready or missing params for subscription.');
      return;
    }

    // Use networkId and tokenId for subscription input
    console.log(`[TokenChart] Subscribing to bars for ${tokenId} on network ${networkId}...`);

    const observer = {
      next: (result: ExecutionResult<OnTokenBarsUpdatedSubscription>) => {
        if (result.errors) {
          console.error("[TokenChart] GraphQL errors:", result.errors);
        }

        // Pass the correct payload object to the formatter
        const newBarRawPayload = result.data?.onTokenBarsUpdated;
        const newBar = formatSubscriptionBar(newBarRawPayload);

        if (newBar) {
          console.log("[TokenChart] Received bar update:", newBar);
          setChartData((currentData) => {
            const lastBar = currentData[currentData.length - 1];
            if (lastBar && lastBar.time === newBar.time) {
              console.log("[TokenChart] Updating last bar.");
              return [...currentData.slice(0, -1), newBar];
            } else if (!lastBar || newBar.time > lastBar.time) {
              console.log("[TokenChart] Appending new bar.");
              return [...currentData, newBar];
            } else {
              console.log("[TokenChart] Received out-of-order or duplicate bar, ignoring.");
              return currentData;
            }
          });
        }
      },
      error: (error: Error) => {
        console.error('[TokenChart] Subscription transport error:', error);
      },
      complete: () => {
        console.log('[TokenChart] Bar subscription completed by server.');
      },
    };

    try {
      cleanupPromiseRef.current = sdk.subscriptions.onTokenBarsUpdated(
        { tokenId: `${tokenId}:${networkId}` },
        observer
      );

      cleanupPromiseRef.current.catch(error => {
        console.error("[TokenChart] Error obtaining cleanup function promise:", error);
      });

    } catch (error) {
      console.error("[TokenChart] Failed to initiate subscription call:", error);
    }

    // Cleanup
    return () => {
      const promise = cleanupPromiseRef.current;
      if (promise) {
        const subId = `${tokenId}:${networkId}`; // Recreate identifier for logging
        console.log(`[TokenChart] Requesting cleanup for subscription ${subId}`);
        promise.then((cleanup) => {
          if (typeof cleanup === 'function') {
            cleanup();
            console.log(`[TokenChart] Subscription cleanup executed for ${subId}`);
          }
        }).catch(error => {
          console.error("[TokenChart] Error during subscription cleanup promise execution:", error);
        });
        cleanupPromiseRef.current = null;
      }
    };

  }, [sdk, isAuthenticated, networkId, tokenId]); // Update dependencies

  // Use chartData state for rendering
  if (!chartData || chartData.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{isLoading ? 'Loading chart data...' : 'No chart data available.'}</p>
        </CardContent>
      </Card>
    );
  }

  // Format timestamp for XAxis
  const formatXAxis = (tickItem: number) => {
    return new Date(tickItem * 1000).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  };

  // Format tooltip value
  const formatTooltipValue = (value: number) => {
    return value.toFixed(4);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="time"
              tickFormatter={formatXAxis}
              stroke="#AAAAAA"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#AAAAAA"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value.toFixed(2)}`}
              domain={['auto', 'auto']}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                borderColor: 'hsl(var(--border))',
                color: '#FFFFFF'
              }}
              labelFormatter={formatXAxis}
              formatter={formatTooltipValue}
            />
            <Line
              type="monotone"
              dataKey="close"
              stroke="#FFFFFF"
              activeDot={{ r: 8 }}
              dot={false}
            />
            {/* Add lines for open, high, low if needed */}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};