'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
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
  fill: string;
  name?: string;
  change24?: number;
}

// Custom Cell Component for Treemap
const CustomTreemapCell = (props: CustomCellProps) => {
  // Destructure props expected based on interface and usage
  const { name, change24, depth, x, y, width, height, fill } = props;

  // Determine fill color based on change24
  let cellFill = fill; // Start with default fill
  if (change24 != null) {
    if (change24 > 0) cellFill = '#22c55e'; // Green
    else if (change24 < 0) cellFill = '#ef4444'; // Red
    else cellFill = '#888'; // Gray
  }

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
  const [hideStables, setHideStables] = useState(false);
  const [displayedData, setDisplayedData] = useState<TokenData[]>([]);

  // Effect to filter data when props.data or hideStables changes
  useEffect(() => {
    let filteredData = data;
    if (hideStables) {
      filteredData = data.filter(token =>
        !(token.name?.toUpperCase().includes('USD') || token.symbol?.toUpperCase().includes('USD'))
      );
    }
    setDisplayedData(filteredData);
  }, [data, hideStables]);

  // Prepare data for Treemap based on displayedData
  const treemapChartData = displayedData.map(token => ({
    ...token,
    name: token.symbol || token.name || 'Unknown',
    size: token.marketCap != null ? Math.max(token.marketCap, 0) : 0,
  }));

  if (!data || data.length === 0) {
    return <div className="flex items-center justify-center h-full">Loading or no data available.</div>;
  }

  // Handler for standard HTML checkbox
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHideStables(event.target.checked);
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* Use standard HTML checkbox and label */}
      <div className="flex items-center space-x-2 p-2 border-b mb-2">
        <input
           type="checkbox"
           id="hide-stables"
           checked={hideStables}
           onChange={handleCheckboxChange}
           className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        />
        <label htmlFor="hide-stables" className="ml-2 block text-sm leading-5 text-gray-900 dark:text-gray-100">
            Hide Stablecoins (USD)
        </label>
      </div>

      {/* Chart Container - ensure it fills remaining space */}
      <div className="flex-grow">
        {displayedData.length === 0 && hideStables && (
           <div className="flex items-center justify-center h-full">No non-stablecoin data matching filters.</div>
        )}
        {displayedData.length === 0 && !hideStables && (
             <div className="flex items-center justify-center h-full">No data matching filters.</div>
        )}
        {displayedData.length > 0 && (
             <ResponsiveContainer width="100%" height="100%">
                <Treemap
                    data={treemapChartData}
                    dataKey="size"
                    stroke="#fff"
                    fill="#8884d8"
                    isAnimationActive={false}
                    nameKey="name"
                    content={CustomTreemapCell as any}
                >
                    <Tooltip content={<CustomTooltip />} />
                </Treemap>
             </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};