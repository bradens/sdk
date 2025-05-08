import { Codex } from "@codex-data/sdk";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

import { TokensPageDocument, TokensPageQuery, TokensPageQueryVariables, Network, TokenPageItemFragment, RankingDirection, TokenRankingAttribute } from "@/gql/graphql"; // Import directly from graphql.ts

export const revalidate = 60; // Revalidate at most every 60 seconds

export async function generateStaticParams() {
  const apiKey = process.env.CODEX_API_KEY;
  if (!apiKey) {
    console.warn("CODEX_API_KEY environment variable is not set for generateStaticParams. Codex SDK might not work, and no paths will be pre-rendered.");
    return [];
  }
  const codexClient = new Codex(apiKey || '');

  try {
    const networksResult = await codexClient.queries.getNetworks({});
    if (networksResult && networksResult.getNetworks) {
      return networksResult.getNetworks.map((network: Pick<Network, 'id'>) => ({
        networkId: String(network.id),
      }));
    }
    console.warn("Failed to fetch networks for generateStaticParams. No paths will be pre-rendered.");
    return [];
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return []; // Return empty array on error to prevent build failure
  }
}

interface NetworkPageProps {
  params: Promise<{
    networkId: string;
  }>;
}

// --- Metadata Generation ---
export async function generateMetadata({ params }: NetworkPageProps): Promise<Metadata> {
  const { networkId } = await params;
  const networkIdNum = parseInt(networkId, 10);
  let networkName: string | null = null;

  if (isNaN(networkIdNum)) {
    return {
      title: "Invalid Network",
      description: "The requested network ID is invalid.",
    };
  }

  const apiKey = process.env.CODEX_API_KEY;
  const codexClient = new Codex(apiKey || "");

  try {
    const networksResult = await codexClient.queries.getNetworks({});
    if (networksResult?.getNetworks) {
      const currentNetwork = networksResult.getNetworks.find(
        (net: Pick<Network, "id" | "name">) => net.id === networkIdNum
      );
      networkName = currentNetwork?.name || null;
    }
  } catch (error) {
    console.error("Error fetching network name for metadata (ID: " + networkIdNum + "):", error);
  }

  const pageTitle = networkName ? networkName + " Network Details | Tokedex" : "Network " + networkId + " | Tokedex";
  const pageDescription = networkName
    ? "Explore tokens, trading activity, and analytics for the " + networkName + " network on Tokedex."
    : "Explore tokens, trading activity, and analytics for network " + networkId + " on Tokedex.";

  const siteUrl = "https://tokedex.chromat.xyz";
  const pageUrl = siteUrl + "/networks/" + networkId;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: "Tokedex",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

// Restore helper functions
function formatCompactNumber(num: number | undefined | null): string {
  if (num === undefined || num === null) return '-';
  return Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 2 }).format(num);
}

function formatCurrency(num: number | undefined | null): string {
  if (num === undefined || num === null) return '-';
  return `$${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`;
}

function formatPercentage(num: number | undefined | null): string {
  if (num === undefined || num === null) return '-';
  return `${(num * 100).toFixed(2)}%`;
}

function formatTimestamp(ts: number | undefined | null): string {
  if (ts === undefined || ts === null) return '-';
  return new Date(ts * 1000).toLocaleString();
}

export default async function NetworkPage({ params }: NetworkPageProps) {
  const { networkId } = await params;
  const networkIdNum = parseInt(networkId, 10);

  if (isNaN(networkIdNum)) {
    return (
      <main className="flex min-h-screen flex-col items-center p-12 md:p-24">
        <h1 className="text-2xl font-bold text-destructive">Invalid Network ID</h1>
        <Link href="/" className="mt-4 hover:underline">Go back home</Link>
      </main>
    );
  }

  const apiKey = process.env.CODEX_API_KEY;
  if (!apiKey) {
    console.warn("CODEX_API_KEY environment variable is not set. Codex SDK might not work.");
  }
  const codexClient = new Codex(apiKey || '');

  let tokenListItems: TokenPageItemFragment[] = [];
  let networkName: string | null = null;
  let fetchError: string | null = null;

  try {
    const [networksResult, tokensResponse] = await Promise.all([
      codexClient.queries.getNetworks({})
        .catch((err: Error) => {
          console.error(`Error fetching all networks:`, err);
          return null;
        }),

      codexClient.query<TokensPageQuery, TokensPageQueryVariables>(TokensPageDocument, {
        filters: { network: [networkIdNum] },
        limit: 15,
        rankings: {
          direction: RankingDirection.Desc,
          attribute: TokenRankingAttribute.TrendingScore24,
        },
      }).catch((err: Error) => {
        console.error(`Error fetching tokens for network ${networkIdNum}:`, err);
        throw new Error(`Failed to load tokens for network ${networkIdNum}.`);
      })
    ]);

    if (networksResult?.getNetworks) {
      const currentNetwork = networksResult.getNetworks.find((net: Pick<Network, 'id' | 'name'>) => net.id === networkIdNum);
      networkName = currentNetwork?.name || null;
    }
    if (!networkName) {
        console.warn(`Could not find network name for ID ${networkIdNum}`);
        networkName = `Network ${networkId}`;
    }

    if (tokensResponse && tokensResponse.filterTokens && Array.isArray(tokensResponse.filterTokens.results)) {
      type TokenResultItem = TokenPageItemFragment;
      tokenListItems = tokensResponse.filterTokens.results.filter((item: TokenResultItem | null): item is TokenResultItem => item !== null);
    }

  } catch (err: unknown) {
    console.error("Error loading network page data:", err);
    if (err instanceof Error) {
      fetchError = err.message;
    } else {
      fetchError = "An unknown error occurred while loading page data.";
    }
    if (!networkName) networkName = `Network ${networkId}`;
  }

  const pageTitle = fetchError && !tokenListItems?.length ? `Error loading tokens for ${networkName}` : networkName || `Tokens on Network ${networkId}`;

  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24">
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{pageTitle}</h1>
        <Link href="/" className="hover:underline">&lt; Back to Networks</Link>
      </div>

      <div className="w-full max-w-6xl border-b border-dashed border-border">
        {fetchError && <p className="text-destructive mb-4">{fetchError}</p>}

        {!fetchError || tokenListItems.length > 0 ? (
          <>
            {tokenListItems.length === 0 && !fetchError && <p>Loading tokens or no tokens found for {networkName}...</p>}
            {tokenListItems.length > 0 && (
              <table className="w-full table-fixed border-collapse border-dashed border-border border !border-bottom text-sm">
                <thead>
                  <tr className="border-b border-border border-dashed bg-muted/50">
                    <th className="p-2 text-left font-semibold w-[50px]">Icon</th>
                    <th className="p-2 text-left font-semibold">Name</th>
                    <th className="p-2 text-left font-semibold w-[10%]">Symbol</th>
                    <th className="p-2 text-right font-semibold w-[12%]">Price</th>
                    <th className="p-2 text-right font-semibold w-[12%]">Change 24h</th>
                    <th className="p-2 text-right font-semibold w-[12%]">Volume 24h</th>
                    <th className="p-2 text-right font-semibold w-[10%]">Swaps 24h</th>
                    <th className="p-2 text-right font-semibold w-[18%]">Last Tx</th>
                  </tr>
                </thead>
                <tbody>
                  {tokenListItems.map((item: TokenPageItemFragment) => {
                    const token = item.token;
                    const tokenAddress = token?.address;
                    if (!token || !tokenAddress) return null;

                    const linkHref = `/networks/${networkId}/tokens/${tokenAddress}`;

                    // Parse all potentially numeric fields defensively (assuming they might be strings)
                    const change24hNum = item?.change24 != null ? parseFloat(String(item.change24)) : null;
                    const changeColor = change24hNum == null ? 'text-muted-foreground' : change24hNum > 0 ? 'text-green-500' : change24hNum < 0 ? 'text-red-500' : 'text-muted-foreground';

                    const priceNum = item?.priceUSD != null ? parseFloat(String(item.priceUSD)) : null;
                    const volumeNum = item?.volume24 != null ? parseFloat(String(item.volume24)) : null;
                    const txnCountNum = item?.txnCount24 != null ? parseInt(String(item.txnCount24), 10) : null;
                    const lastTxNum = item?.lastTransaction != null ? parseInt(String(item.lastTransaction), 10) : null;

                    return (
                      <tr key={tokenAddress} className="border-b border-dashed border-border/30 hover:bg-muted/30">
                        <td className="p-2 flex items-center justify-center">
                          {token?.info?.imageThumbUrl ? (
                            <img
                              src={token.info.imageThumbUrl}
                              alt={`${token.name || 'Token'} icon`}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">
                              {token?.symbol ? token.symbol[0] : 'T'}
                            </div>
                          )}
                        </td>
                        <td className="p-2 truncate">
                          <Link href={linkHref} className="block w-full h-full">
                            {token?.name || "Unknown Name"}
                          </Link>
                        </td>
                        <td className="p-2 truncate">
                          <Link href={linkHref} className="block w-full h-full">
                            {token?.symbol || "-"}
                          </Link>
                        </td>
                        <td className="p-2 text-right font-mono">
                          <Link href={linkHref} className="block w-full h-full">
                            {formatCurrency(priceNum)}
                          </Link>
                        </td>
                        <td className={`p-2 text-right font-mono ${changeColor}`}>
                          <Link href={linkHref} className="block w-full h-full">
                            {formatPercentage(change24hNum)}
                          </Link>
                        </td>
                        <td className="p-2 text-right font-mono">
                          <Link href={linkHref} className="block w-full h-full">
                            {formatCompactNumber(volumeNum)}
                          </Link>
                        </td>
                        <td className="p-2 text-right font-mono">
                          <Link href={linkHref} className="block w-full h-full">
                            {formatCompactNumber(txnCountNum)}
                          </Link>
                        </td>
                        <td className="p-2 text-right font-mono">
                          <Link href={linkHref} className="block w-full h-full">
                            {formatTimestamp(lastTxNum)}
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                  {(tokenListItems.length === 0 && !fetchError) && (
                    <tr>
                      <td colSpan={8} className="p-4 text-center text-muted-foreground">No tokens found for {networkName}.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </>
        ) : null}
      </div>
    </main>
  );
}