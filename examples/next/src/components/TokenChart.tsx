'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from "@/components/ui/skeleton";
import TradingViewChart from './TradingViewChart';
import { ResolutionString } from './charting_library/charting_library';

interface TokenChartProps {
  isLoading: boolean;
  networkId: number;
  tokenId: string;
}

export const TokenChart: React.FC<TokenChartProps> = ({
    isLoading,
    networkId,
    tokenId,
}) => {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Token Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="w-full h-[300px] md:h-[400px]" />
        </CardContent>
      </Card>
    );
  }

  const tvSymbol = `${tokenId}:${networkId}`;
  const tvInterval = '30' as ResolutionString;

  return (
    <Card className="p-0 h-full border-0 shadow-none rounded-none flex flex-col">
      <CardContent className="my-0 p-0 flex-grow h-full">
        <TradingViewChart
            interval={tvInterval}
            symbol={tvSymbol}
        />
      </CardContent>
    </Card>
  );
};