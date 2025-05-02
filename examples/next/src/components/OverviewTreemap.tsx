'use client';

import React from 'react';
import { Treemap, ResponsiveContainer, Tooltip, Rectangle } from 'recharts';
import type { TooltipProps } from 'recharts';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

// Define the expected data structure for each token
interface TokenData {
  name: string;
  symbol: string;
  marketCap: number;
  change24?: number;
  networkId?: number;
  priceUSD?: number;
  volume24?: number;
}

interface OverviewTreemapProps {
  data: TokenData[];
}

// Define props for the custom cell again, trying to be specific
interface CustomCellProps {
  depth: number;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string; // Default fill passed by Treemap
  name?: string;
  change24?: number;
}

// Function to calculate color based on change percentage
function calculateColor(change: number | null | undefined): string {
  const defaultFill = '#8884d8'; // Default Recharts fill or a neutral gray
  if (change == null) {
    return defaultFill;
  }

  const maxAbsChange = 1; // Consider 10% change as max intensity
  const intensityFactor = Math.min(Math.abs(change), maxAbsChange) / maxAbsChange;

  let hue: number;
  let saturation: number = 40; // Keep saturation constant for simplicity
  // Adjust lightness: 65% (low intensity) down to 45% (high intensity)
  let lightness: number = 60 - intensityFactor * 40;

  if (change > 0) {
    hue = 120; // Green
  } else if (change < 0) {
    hue = 0; // Red
  } else {
    // Zero change - make it gray
    hue = 0;
    saturation = 0;
    lightness = 50; // Neutral gray lightness
  }

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Custom Cell Component for Treemap
const CustomTreemapCell = (props: CustomCellProps) => {
  const { name, change24, depth, x, y, width, height } = props; // Removed unused default `fill`

  // Calculate fill color based on change24
  const cellFill = calculateColor(change24);

  return (
    <g>
      <Rectangle x={x} y={y} width={width} height={height} fill={cellFill} stroke="#fff" />
      {depth === 1 && width > 60 && height > 25 ? (
        <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
          {name}
        </text>
      ) : null}
    </g>
  );
};

// Custom Tooltip for more details
const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const { name, payload: data } = payload[0];
    return (
      <div className="bg-background border border-border p-2 rounded shadow-lg text-sm">
        <p className="font-bold">{data.symbol || name} ({data.symbol})</p>
        <p>Market Cap: ${data.marketCap?.toLocaleString()}</p>
        {data.change24 != null && <p>Change (24h): {data.change24.toFixed(2)}%</p>}
        {data.priceUSD != null && <p>Price: ${data.priceUSD?.toLocaleString()}</p>}
        {data.volume24 != null && <p>Volume (24h): ${data.volume24?.toLocaleString()}</p>}
        {data.networkId != null && <p>Network ID: {data.networkId}</p>}
      </div>
    );
  }
  return null;
};

export const OverviewTreemap: React.FC<OverviewTreemapProps> = ({ data }) => {
  // Prepare data directly from the passed (already filtered) props
  const treemapChartData = data.map(token => ({
    ...token,
    name: token.symbol || token.name || 'Unknown',
    size: token.marketCap != null ? Math.max(token.marketCap, 0) : 0,
  }));

  // Render container and chart directly
  // No need for conditional rendering based on filtering state here
  return (
    <ResponsiveContainer width="100%" height="100%">
      <Treemap
        data={treemapChartData}
        dataKey="size"
        stroke="#fff"
        fill="#8884d8" // Default fill (will be overridden by content renderer)
        isAnimationActive={false}
        nameKey="name"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        content={CustomTreemapCell as any}
      >
        <Tooltip content={<CustomTooltip />} />
      </Treemap>
    </ResponsiveContainer>
  );
};