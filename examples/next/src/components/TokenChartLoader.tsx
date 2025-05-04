'use client';

import React from 'react';
import { TokenChart } from "@/components/TokenChart"; // Import the actual chart component

interface TokenChartLoaderProps {
  networkId: number;
  tokenId: string;
  title?: string;
  // Add any other props needed by TokenChart besides networkId/tokenId
}

// This component acts as the Suspense boundary content for the chart.
// It directly renders the TokenChart, assuming TokenChart/TradingViewChart
// handles its own internal loading states for fetching data.
const TokenChartLoader: React.FC<TokenChartLoaderProps> = ({
  networkId,
  tokenId,
}) => {
  // The isLoading prop is removed as this component itself is the result of loading
  // TokenChart might need internal loading state management if TradingViewChart doesn't suffice
  return (
    <TokenChart
        networkId={networkId}
        tokenId={tokenId}
        // Pass false or remove isLoading prop if TokenChart is updated
        isLoading={false}
    />
  );
};

export default TokenChartLoader;