import { Codex } from "@codex-data/sdk";
import React, { Suspense } from "react";
import { Card, CardContent, CardHeader} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TokenDetailView } from "@/components/TokenDetailView";

// --- Type Definitions ---
// Keep TokenDetails definition (needed for fetching & props)
type TokenDetails = {
  id: string;
  address: string;
  name?: string | null;
  symbol?: string | null;
  networkId?: number | null;
  description?: string | null;
  decimals?: number | null;
  info?: {
    imageThumbUrl?: string | null;
  } | null;
};

// Keep TokenEvent definition (needed for fetching & props)
type TokenEvent = {
  id: string;
  timestamp: number;
  transactionHash: string;
  eventDisplayType?: string | null;
  amountUsd?: number | null;
  uniqueId?: string;
  price: number | null;
};

// Need ChartDataPoint definition for fetching and passing props
// (Should match the one in TokenDetailView/TokenChart)
export interface ChartDataPoint {
  time: number;
  open?: number | null;
  high?: number | null;
  low?: number | null;
  close?: number | null;
}

// Combined data structure for the page (Keep as is)
interface TokenPageData {
  details: TokenDetails | null;
  events: TokenEvent[];
}

// --- Page Props (Keep as is) ---
interface TokenPageProps {
  params: Promise<{
    networkId: string;
    tokenId: string;
  }>;
}

// --- Helper: Data Fetching Function ---
async function getTokenPageData(networkIdNum: number, tokenId: string): Promise<TokenPageData> {
  const apiKey = process.env.CODEX_API_KEY;
  if (!apiKey) {
    console.warn("CODEX_API_KEY not set.");
  }
  const codexClient = new Codex(apiKey || '');

  // Fetch details, bars (using oneWeekAgo), and recent events concurrently
  const results = await Promise.allSettled([
    codexClient.queries.token({ input: { networkId: networkIdNum, address: tokenId } }),
    // Fetch recent events (limit 50, default sort is DESC timestamp)
    codexClient.queries.getTokenEvents({ query: { networkId: networkIdNum, address: tokenId }, limit: 50 }),
  ]);

  const detailsResult = results[0];
  const eventsResult = results[1]; // Renamed back from recentEventsResult

  const details: TokenDetails | null = detailsResult.status === 'fulfilled' ? detailsResult.value.token as TokenDetails : null;

  let events: TokenEvent[] = [];
  if (eventsResult.status === 'fulfilled' && eventsResult.value.getTokenEvents?.items) {
    const filteredEvents = eventsResult.value.getTokenEvents.items.filter(ev => ev != null)
    events = filteredEvents.map((ev) => {
          const decimals = details?.decimals ?? 18;
          const swapValue = parseFloat(ev.token0SwapValueUsd || '0');
          const amount0 = parseFloat(ev.data?.amount0 || '0');
          const calculatedAmountUsd = swapValue * Math.abs(amount0 / (10 ** decimals));
          const priceString = ev.token0Address === tokenId ? ev.token0SwapValueUsd : ev.token1SwapValueUsd;
          const price = priceString ? parseFloat(priceString) : null;
          return {
            id: ev.id,
            timestamp: ev.timestamp,
            uniqueId: `${ev.id}-${ev.transactionHash}-${ev.blockNumber}-${ev.transactionIndex}-${ev.logIndex}`,
            transactionHash: ev.transactionHash,
            price: price,
            eventDisplayType: ev.eventDisplayType,
            amountUsd: calculatedAmountUsd,
          }
        });
  }

  if (detailsResult.status === 'rejected') console.error("Error fetching details:", detailsResult.reason);
  if (eventsResult.status === 'rejected') console.error("Error fetching events:", eventsResult.reason);

  return { details, events };
}

// --- Skeleton Fallback Component (Keep as is for Suspense) ---
function TokenPageSkeleton() {
  return (
    <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left/Center Skeleton */}
      <div className="lg:col-span-2 space-y-6">
        {/* Chart Skeleton */}
        <Card>
          <CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader>
          <CardContent><Skeleton className="w-full h-[300px]" /></CardContent>
        </Card>
        {/* Transactions Skeleton */}
        <Card>
          <CardHeader><Skeleton className="h-6 w-1/2" /></CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </CardContent>
        </Card>
      </div>
      {/* Right Info Skeleton */}
      <div className="lg:col-span-1 space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4">
             <Skeleton className="h-10 w-10 rounded-full" />
             <div className="space-y-1">
               <Skeleton className="h-5 w-24" />
               <Skeleton className="h-4 w-16" />
             </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// --- Main Page Content Component (Update to use TokenDetailView) ---
async function TokenPageContent({ networkIdNum, tokenId }: { networkIdNum: number; tokenId: string }) {
  const { details, events } = await getTokenPageData(networkIdNum, tokenId);

  // Pass fetched data directly to the client component
  return (
    <TokenDetailView
      initialDetails={details}
      initialEvents={events}
      networkId={networkIdNum}
      tokenId={tokenId}
    />
  );
}

// --- Default Export (Remains the same, uses Suspense) ---
export default async function TokenPage({ params }: TokenPageProps) {
  // Await the params promise
  const resolvedParams = await params;
  const networkIdNum = parseInt(resolvedParams.networkId, 10);
  const tokenId = resolvedParams.tokenId;

  // Validate networkIdNum
  if (isNaN(networkIdNum)) {
    return <div>Invalid Network ID</div>;
  }

  // Re-add the main container with padding
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 space-y-6">
      <Suspense fallback={<TokenPageSkeleton />}>
        <TokenPageContent networkIdNum={networkIdNum} tokenId={tokenId} />
      </Suspense>
    </main>
  );
}