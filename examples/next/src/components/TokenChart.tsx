'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from "@/components/ui/skeleton";
import TradingViewChart from './TradingViewChart';
import { ResolutionString } from './charting_library/charting_library';

interface TokenChartProps {
  isLoading: boolean;
  title?: string;
  networkId: number;
  tokenId: string;
}

export const TokenChart: React.FC<TokenChartProps> = ({
    isLoading,
    title = "Price Chart",
    networkId,
    tokenId,
}) => {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
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
    <Card className="p-0">
      <CardContent className="my-0 h-[300px] md:h-[400px] p-0">
        <TradingViewChart
            interval={tvInterval}
            symbol={tvSymbol}
        />
      </CardContent>
    </Card>
  );
};