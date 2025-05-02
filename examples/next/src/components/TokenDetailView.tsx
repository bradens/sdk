'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import TokenChartLoader from './TokenChartLoader';
import TokenTransactionsLoader from './TokenTransactionsLoader';
import { GetTokenEventsQuery } from '@codex-data/sdk/dist/sdk/generated/graphql';

// --- Types (Copied/adapted from page.tsx and child components) ---
// Event type for display
type TokenEvent = {
  id: string;
  timestamp: number;
  price: number | null;
  transactionHash: string;
  eventDisplayType?: string | null;
  amountUsd?: number | null;
  uniqueId?: string;
};
// Type for raw event data from subscription/query
type RawEventData = NonNullable<NonNullable<GetTokenEventsQuery['getTokenEvents']>['items']>[number];
// Token details type
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

// --- Component Props ---
interface TokenDetailViewProps {
  initialDetails: TokenDetails | null;
  networkId: number;
  tokenId: string; // address
}

// --- Skeleton Components (Define or import for Suspense fallbacks) ---
function ChartSkeleton() {
  return (
    <Card>
      <CardHeader><Skeleton className="h-6 w-1/2" /></CardHeader>
      <CardContent><Skeleton className="w-full h-[300px] md:h-[400px]" /></CardContent>
    </Card>
  );
}

function TransactionsSkeleton() {
  return (
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
  );
}

// Add back formatCurrency helper
function formatCurrency(num: number | undefined | null): string {
  if (num === undefined || num === null) return '-';
  num = parseFloat(num.toString());
  return `$${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 16 })}`;
}

// --- Main Client Component ---
export function TokenDetailView({
  initialDetails,
  networkId,
  tokenId
}: TokenDetailViewProps) {

  // --- State Management ---
  const [details] = useState<TokenDetails | null>(initialDetails); // Keep details state

  const tokenName = details?.name || tokenId;
  const tokenSymbol = details?.symbol ? `(${details.symbol})` : '';

  // Derive latestPrice from initialDetails if possible, or fetch separately
  // For now, remove dependence on live events state
  const latestPrice = useMemo(() => {
      // TODO: How to get latest price? Fetch separately? Use details? Placeholder:
      return null; // Or fetch/derive differently
  }, [details]);

  // --- Render Logic ---
  return (
    <>
      {/* Header */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold truncate pr-4">
          {tokenName} {tokenSymbol}
        </h1>
        <Link href={`/networks/${networkId}`} className="text-sm hover:underline whitespace-nowrap">
          &lt; Back to Network
        </Link>
      </div>

      {/* Main Content Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left/Center Area (Chart and Transactions) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Chart with Suspense */}
          <Suspense fallback={<ChartSkeleton />}>
             {/* Assuming TokenChartLoader handles its own loading state */}
             <TokenChartLoader networkId={networkId} tokenId={tokenId} title={`${tokenSymbol || 'Token'} Price Chart`} />
          </Suspense>

          {/* Transactions with Suspense */}
          <Suspense fallback={<TransactionsSkeleton />}>
              {/* Assuming TokenTransactionsLoader handles its own data fetching and state */}
              <TokenTransactionsLoader networkId={networkId} tokenId={tokenId} decimals={details?.decimals} />
          </Suspense>
        </div>

        {/* Right Area (Info Panel - primarily uses initialDetails) */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              {details?.info?.imageThumbUrl ? (
                 <Image src={details.info.imageThumbUrl} alt={`${tokenName} icon`} width={40} height={40} className="rounded-full" />
              ) : (
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg font-semibold">
                    {details?.symbol ? details.symbol[0] : 'T'}
                  </div>
              )}
              <div>
                <CardTitle>Information</CardTitle>
                {details?.symbol && <CardDescription>{details.symbol}</CardDescription>}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Display LATEST Price - TODO: Needs reliable source */}
              <div>
                  <strong className="text-sm text-muted-foreground block">Current Price</strong>
                  <span className="text-xl font-semibold">{formatCurrency(latestPrice)}</span>
              </div>

              {details ? (
                <>
                  <div>
                    <strong className="text-sm text-muted-foreground block">Address</strong>
                    <span className="font-mono text-xs break-all block" title={tokenId}>{tokenId}</span>
                  </div>
                  {details.description && (
                    <div>
                       <strong className="text-sm text-muted-foreground block">Description</strong>
                       <p className="text-sm">{details.description}</p>
                    </div>
                  )}
                </>
              ) : (
                 <Skeleton className="h-4 w-3/4 mt-2" />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}