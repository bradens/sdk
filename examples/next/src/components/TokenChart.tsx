'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from "@/components/ui/skeleton";

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

// Update Props Interface
interface TokenChartProps {
  chartData: ChartDataPoint[]; // Renamed from initialData, now the main data source
  isLoading: boolean; // Added prop for loading state
  title?: string;
}

export const TokenChart: React.FC<TokenChartProps> = ({
    chartData, // Use directly
    isLoading, // Use directly
    title = "Price Chart"
}) => {
  // Use isLoading prop directly for skeleton condition
  const showSkeleton = isLoading;

  // Calculate the minimum timestamp from the available bar data
  const minTime = React.useMemo(() => {
    if (!chartData || chartData.length === 0) {
      return 'auto'; // Default if no data
    }
    // Find the first bar with a valid price value (o, h, l, or c)
    const firstValidBar = chartData.find(d =>
        d.open != null ||
        d.high != null ||
        d.low != null ||
        d.close != null
    );
    // Use its timestamp, or default to 'auto' if none found
    return firstValidBar ? firstValidBar.time : 'auto';
  }, [chartData]);

  // Use chartData prop for rendering
  if (showSkeleton) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="w-full h-[300px]" />
        </CardContent>
      </Card>
    );
  }

  if (chartData.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No chart data available.</p>
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
              domain={[minTime, 'auto']}
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