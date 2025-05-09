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

// Need ChartDataPoint definition for fetching and passing props
// (Should match the one in TokenDetailView/TokenChart)
export interface ChartDataPoint {
  time: number;
  open?: number | null;
  high?: number | null;
  low?: number | null;
  close?: number | null;
}

// --- Page Props (Keep as is) ---
interface TokenPageProps {
  params: Promise<{
    networkId: string;
    tokenId: string;
  }>;
}

// --- Helper: Data Fetching Function (Only fetch details) ---
async function getTokenDetails(networkIdNum: number, tokenId: string): Promise<TokenDetails | null> {
  const apiKey = process.env.CODEX_API_KEY;
  if (!apiKey) {
    console.warn("CODEX_API_KEY not set.");
  }
  const codexClient = new Codex(apiKey || '');

  try {
    // Fetch only details
    const detailsResult = await codexClient.queries.token({ input: { networkId: networkIdNum, address: tokenId } });
    const details: TokenDetails | null = detailsResult.token as TokenDetails || null;
    return details;
  } catch (error) {
    console.error("Error fetching token details:", error);
    return null;
  }
}

// --- Skeleton Components (Extract or define here for fallbacks) ---
function ChartSkeleton() {
  return (
    <Card>
      <CardHeader><Skeleton className="h-6 w-1/2" /></CardHeader>
      <CardContent><Skeleton className="w-full h-[300px] md:h-[400px]" /></CardContent>
    </Card>
  );
}

function TransactionsSkeleton() {
    // Using the skeleton logic from TokenTransactions component
    return (
        <Card>
          <CardHeader><Skeleton className="h-6 w-1/2" /></CardHeader>
          <CardContent className="space-y-2">
             {/* You might want a more detailed skeleton matching the table rows */}
             <Skeleton className="h-8 w-full" />
             <Skeleton className="h-8 w-full" />
             <Skeleton className="h-8 w-full" />
             <Skeleton className="h-8 w-full" />
             <Skeleton className="h-8 w-full" />
          </CardContent>
        </Card>
    );
}

// Reuse the overall page skeleton from loading.tsx if needed, or define a simpler one
function TokenPageSkeleton() {
  return (
    <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <ChartSkeleton />
        <TransactionsSkeleton />
      </div>
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
                 <Skeleton className="h-4 w-full mt-2" />
                 <Skeleton className="h-4 w-1/2 mt-1" />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}

// --- Main Page Content Component (Pass only details) ---
async function TokenPageContent({ networkIdNum, tokenId }: { networkIdNum: number; tokenId: string }) {
  // Fetch only details server-side
  const details = await getTokenDetails(networkIdNum, tokenId);

  // Pass fetched details and identifiers to the client component
  return (
    <TokenDetailView
      initialDetails={details} // Pass details fetched on server
      // Remove initialEvents
      networkId={networkIdNum}
      tokenId={tokenId}
    />
  );
}

// --- Default Export (Uses Suspense for the main content loading) ---
export default async function TokenPage({ params }: TokenPageProps) {
  const resolvedParams = await params;
  const networkIdNum = parseInt(resolvedParams.networkId, 10);
  const tokenId = decodeURIComponent(resolvedParams.tokenId);

  if (isNaN(networkIdNum)) {
    return <div>Invalid Network ID</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 space-y-6">
      {/* Suspense wraps the main content loading */}
      <Suspense fallback={<TokenPageSkeleton />}>
        <TokenPageContent networkIdNum={networkIdNum} tokenId={tokenId} />
      </Suspense>
    </main>
  );
}