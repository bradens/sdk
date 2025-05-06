import React from 'react';
import { Codex } from '@codex-data/sdk';
import OverviewClientPage from './OverviewClientPage'; // Import the new client component
import { RankingDirection, TokenRankingAttribute } from '@codex-data/sdk/dist/sdk/generated/graphql';

// Interface for the data structure passed to the client/treemap component
interface TreemapTokenData {
  address?: string | null;
  name: string;
  symbol: string;
  marketCap: number;
  change24?: number;
  networkId?: number;
  priceUSD?: number;
  volume24?: number;
}

// Updated type for SDK results, reflecting potential string types for numbers
type SdkResultItem = {
  marketCap?: string | number | null; // Allow string or number
  change24?: string | number | null;
  priceUSD?: string | number | null;
  volume24?: string | number | null;
  token?: {
    address?: string | null;
    name?: string | null;
    symbol?: string | null;
    networkId?: number | null;
  } | null;
} | null;

// Helper to safely convert string/number/null to number or undefined
function safeToNumber(value: string | number | null | undefined): number | undefined {
  if (value == null) return undefined;
  const num = Number(value);
  return isNaN(num) ? undefined : num;
}

// Data fetching function
async function getTreemapData(): Promise<TreemapTokenData[]> {
  const apiKey = process.env.CODEX_API_KEY;
  if (!apiKey) {
    console.warn("CODEX_API_KEY not set.");
  }
  const codexClient = new Codex(apiKey || '');

  try {
    const response = await codexClient.queries.filterTokens({
      filters: {
        holders: { gt: 5000 },
        network: [1399811149, 1, 8453, 56, 42161, 130, 146, 43114, 137, 728126428, 999, 49705, 10, 80094, 531, 2741, 369, 5000, 42220, 100, 59144, 57073, 25, 534352, 2020, 81457, 169, 57420037, 250, 324, 1284, 1285, 34443, 1514, 88888, 1923, 480, 747, 1088, 428962, 1116, 888, 109, 48900, 50104, 7700, 1480, 1101, 33139, 4689, 1313161554, 122, 592, 2000, 288, 55244, 53935, 2001, 204, 42262, 54176, 7777777, 106, 660279, 321, 1996, 10000, 20, 246, 4321, 98866, 24, 666666666, 8217, 153153, 40, 9001, 5112, 1666600000, 820, 57],
        uniqueTransactions24: { gt: 1000 },
        volume24: { gt: 1000 },
        priceUSD: { lt: 1000000 },
        liquidity: { gt: 100000 }
      },
      rankings: [{ attribute: TokenRankingAttribute.MarketCap, direction: RankingDirection.Desc }], // Keep strings - known lint issue
      limit: 100,
    });

    // Use the updated SdkResultItem type hint for results
    const results: SdkResultItem[] | null | undefined = response.filterTokens?.results;

    if (!results) {
      console.warn("No results found in filterTokens response.");
      return [];
    }

    const treemapData: TreemapTokenData[] = results
      .map((item: SdkResultItem) => {
        const marketCapNum = safeToNumber(item?.marketCap);
        // Ensure we have a valid marketCap and the token object exists
        if (marketCapNum == null || !item?.token) {
          return null;
        }
        // Construct the object matching TreemapTokenData
        const tokenData: TreemapTokenData = {
          name: item.token.name || 'N/A',
          address: item.token.address || '',
          symbol: item.token.symbol || 'N/A',
          marketCap: marketCapNum,
          change24: safeToNumber(item.change24),
          networkId: item.token.networkId ?? undefined,
          priceUSD: safeToNumber(item.priceUSD),
          volume24: safeToNumber(item.volume24),
        };
        return tokenData;
      })
      // Filter out the nulls, the remaining items should match TreemapTokenData
      .filter((item): item is TreemapTokenData => item !== null);

    return treemapData;

  } catch (error) {
    console.error("Error fetching treemap data:", error);
    return [];
  }
}

// The Page component (Server Component)
export default async function OverviewPage() {
  // Fetch data on the server
  const initialTreemapData = await getTreemapData();

  // Render the client component, passing the initial data
  return <OverviewClientPage initialData={initialTreemapData} />;
}