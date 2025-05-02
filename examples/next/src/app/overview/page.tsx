
import React from 'react';
import { Codex } from '@codex-data/sdk'; // Keep base import
import { OverviewTreemap } from '@/components/OverviewTreemap';
import { RankingDirection, TokenRankingAttribute } from '@codex-data/sdk/dist/sdk/generated/graphql';

// Data fetching function
async function getTreemapData(): Promise<{ name: string; symbol: string; marketCap: number; networkId: number; priceUSD: number; volume24: number; }[]> {
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
      // Revert to using string literals as enums might not be exported/correct
      rankings: [{ attribute: TokenRankingAttribute.MarketCap, direction: RankingDirection.Desc }],
      limit: 200, // Consider adding a limit
    });

    const results = response.filterTokens?.results;

    if (!results) {
      console.warn("No results found in filterTokens response.");
      return [];
    }

    // Simplify filtering and mapping, use optional chaining
    const treemapData = results
      .map((item) => {
        const marketCap = item?.marketCap;

        if (marketCap == null || !item) {
          return null; // Filter this out later
        }

        return {
          name: item?.token?.name || 'N/A',
          symbol: item?.token?.symbol || 'N/A',
          marketCap: Number(marketCap),
          change24:  Number(item.change24),
          networkId: item.token!.networkId!,
          priceUSD: Number(item.priceUSD),
          volume24: Number(item.volume24)
        };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);

    return treemapData;

  } catch (error) {
    console.error("Error fetching treemap data:", error);
    return [];
  }
}

// The Page component (Server Component)
export default async function OverviewPage() {
  const treemapData = await getTreemapData();

  return (
    <main className="flex flex-col w-full h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Token Overview Treemap</h1>
      <div className="flex-grow">
        <OverviewTreemap data={treemapData} />
      </div>
    </main>
  );
}