'use client';

import React from 'react';
import { Treemap, ResponsiveContainer, Tooltip, Rectangle } from 'recharts';
import type { TooltipProps } from 'recharts';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { useRouter } from 'next/navigation';

// Define the expected data structure for each token
interface TokenData {
  name: string;
  symbol: string;
  marketCap: number;
  change24?: number;
  networkId?: number;
  priceUSD?: number;
  volume24?: number;
  address?: string;
}

interface OverviewTreemapProps {
  data: TokenData[];
}

// Props that recharts provides to the Treemap content renderer
// (based on common Treemap usage and typical recharts patterns)
interface RechartsCellPayload extends TokenData {
    size: number; // Corresponds to dataKey
}

interface RechartsProvidedCellProps {
  depth: number;
  x: number;
  y: number;
  width: number;
  height: number;
  index: number;
  payload: RechartsCellPayload; // The individual data item for this cell
  change24: number;
  address: string;
  networkId: number;
  name: string; // Corresponds to nameKey
  value: number; // Corresponds to dataKey value
  fill: string; // Default fill from Treemap (we override this)
  router: ReturnType<typeof useRouter>;
}

// Function to calculate color based on change percentage
function calculateColor(change: number | null | undefined): string {
  const defaultFill = 'hsl(0, 0%, 10%)'; // Even darker default gray (e.g., #1a1a1a)
  if (change == null) {
    return defaultFill;
  }

  const maxAbsChange = 1;
  const intensityFactor = Math.min(Math.abs(change), maxAbsChange) / maxAbsChange;

  if (change === 0) {
    return 'hsl(0, 0%, 15%)'; // Distinct, very dark gray for zero change
  }

  let hue: number;
  const saturationForColor: number = 35; // Desaturated further

  // Even darker lightness range: e.g., 25% (low intensity) down to 10% (high intensity)
  const baseLightness = 25; // Max lightness for low intensity changes
  const lightnessVariation = 25; // Total variation from low to high intensity
  const lightness: number = baseLightness - intensityFactor * lightnessVariation;

  if (change > 0) {
    hue = 120; // Green
  } else { // change < 0
    hue = 0; // Red
  }

  return `hsl(${hue}, ${saturationForColor}%, ${lightness}%)`;
}

// Custom Cell Component for Treemap
const CustomTreemapCell: React.FC<RechartsProvidedCellProps> = (props) => {
  const { depth, x, y, width, height, router, change24, address, networkId, payload, name: cellName } = props;

  const cellFill = calculateColor(change24); // Use change24 from payload

  const handleCellClick = () => {
    if (networkId && address) {
      router.push(`/networks/${networkId}/tokens/${address}`);
    } else {
      console.warn('Missing networkId or address for navigation. Token name:', cellName, 'Payload:', payload);
    }
  };

  return (
    <g onClick={handleCellClick} style={{ cursor: 'pointer' }}>
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={cellFill}
        stroke={'hsl(0, 0%, 15%)'} // Very dark border color
        strokeWidth={1} // Ensure stroke is visible
        strokeDasharray="3 3" // Dashed border pattern
      />
      {depth === 1 && width > 60 && height > 25 ? (
        <text
          x={x + width / 2}
          y={y + height / 2 + 7}
          textAnchor="middle"
          fill="#fff"
          fontSize={14}
          pointerEvents="none"
          style={{ fontFamily: 'var(--font-geist-mono), monospace', fontWeight: 100, letterSpacing: '0.08em' }}
        >
          {cellName} {/* Use cellName (from props.name) for display */}
        </text>
      ) : null}
    </g>
  );
};

// Custom Tooltip for more details
const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const { payload: data } = payload[0];
    // If name already includes symbol (e.g. from nameKey logic), avoid double printing symbol
    // This logic assumes nameKey (props.name) is usually symbol if symbol exists.
    let title = data.name; // Prefer the full name
    if (data.symbol && data.name !== data.symbol) { // Add symbol if it's different from name
        title = `${data.name} (${data.symbol})`;
    } else if (!data.name && data.symbol) { // Only symbol available
        title = data.symbol;
    } else if (!title) { // Fallback if name is also null/undefined
        title = 'Unknown Token';
    }

    return (
      <div className="bg-background border border-border p-2 rounded shadow-lg text-sm">
        <p className="font-bold">{title}</p>
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
  const router = useRouter();

  // Reduce the data to a single token per symbol, summing the market cap
  const treemapChartData = Object.values(data.reduce((acc, curr) => {
    if (acc[curr.symbol]) {
      acc[curr.symbol].marketCap += curr.marketCap;
    } else {
      acc[curr.symbol] = curr;
    }
    return acc
  }, {} as Record<string, TokenData>)).map(token => ({
    ...token,
    name: token.symbol || token.name || 'Unknown',
    size: token.marketCap != null ? Math.max(token.marketCap, 0) : 0,
    router: router,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <Treemap
        data={treemapChartData}
        dataKey="size"
        nameKey="name"
        stroke="#fff"
        isAnimationActive={false}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        content={CustomTreemapCell as any }
      >
        <Tooltip content={<CustomTooltip />} />
      </Treemap>
    </ResponsiveContainer>
  );
};