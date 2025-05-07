'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import { OverviewTreemap } from '@/components/OverviewTreemap';

// Define the expected data structure for each token
// This should match the structure passed from the server component
// and expected by OverviewTreemap
interface TokenData {
  name: string;
  symbol: string;
  marketCap: number;
  change24?: number;
  networkId?: number;
  priceUSD?: number;
  volume24?: number;
}

interface OverviewClientPageProps {
  initialData: TokenData[];
}

export default function OverviewClientPage({ initialData }: OverviewClientPageProps) {
  const [hideStables, setHideStables] = useState(true);
  const [displayedData, setDisplayedData] = useState<TokenData[]>([]);

  // Effect to filter data when initialData or hideStables changes
  useEffect(() => {
    let filteredData = initialData || []; // Handle potential null/undefined initialData
    if (hideStables) {
      filteredData = filteredData.filter(token =>
        !(token.name?.toUpperCase().includes('USD') || token.symbol?.toUpperCase().includes('USD'))
      );
    }
    setDisplayedData(filteredData);
  }, [initialData, hideStables]);

  // Handler for standard HTML checkbox
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHideStables(event.target.checked);
  };

  return (
    <main className="flex flex-col w-full h-[calc(100vh-45px)] p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Tokens by Market Cap</h1>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="hide-stables"
            checked={hideStables}
            onChange={handleCheckboxChange}
            className="form-checkbox h-4 w-4 text-primary/70 transition duration-150 ease-in-out focus:ring-primary/50"
          />
          <label htmlFor="hide-stables" className="block text-sm leading-5 text-foreground/80">
            Hide Stablecoins (USD)
          </label>
        </div>
      </div>

      <div className="flex-grow border border-border/70 rounded-md overflow-hidden"> {/* Adjusted border & overflow */}
        {displayedData.length === 0 && hideStables && (
          <div className="flex items-center justify-center h-full text-muted-foreground">No non-stablecoin data matching filters.</div>
        )}
        {displayedData.length === 0 && !hideStables && (
          <div className="flex items-center justify-center h-full text-muted-foreground">No data matching filters.</div>
        )}
        {displayedData.length > 0 && (
          <OverviewTreemap data={displayedData} />
        )}
      </div>
    </main>
  );
}