'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from '@/lib/utils';

type TokenEvent = {
  id: string;
  timestamp: number;
  transactionHash: string;
  eventDisplayType?: string | null;
  amountUsd?: number | null;
  uniqueId?: string; // For React key
};

interface TokenTransactionsProps {
  events: TokenEvent[];
  newestEventTimestamp: number | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

function TransactionTableSkeleton() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <TableRow key={`skeleton-${index}`}>
          <TableCell><Skeleton className="h-4 w-16" /></TableCell>
          <TableCell><Skeleton className="h-4 w-24" /></TableCell>
          <TableCell><Skeleton className="h-4 w-16" /></TableCell>
          <TableCell><Skeleton className="h-4 w-20" /></TableCell>
        </TableRow>
      ))}
    </>
  );
}

export function TokenTransactions({
    events,
    newestEventTimestamp,
    isLoading,
    isAuthenticated
}: TokenTransactionsProps) {
  const showSkeleton = isLoading;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions (Live)</CardTitle>
      </CardHeader>
      <CardContent>
        {!isAuthenticated && !isLoading && <p className="text-muted-foreground">Session needed for live updates.</p>}
        <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Value (USD)</TableHead>
                <TableHead>Tx Hash</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {showSkeleton ? (
                 <TransactionTableSkeleton />
              ) : events.length > 0 ? (
                events.map((event) => (
                  <TableRow
                    key={event.uniqueId}
                    className={cn(
                      'transition-colors duration-1000 ease-out',
                      newestEventTimestamp === event.timestamp ? 'animate-row-pulse' : ''
                    )}
                  >
                    <TableCell className="capitalize">{event.eventDisplayType || 'Unknown'}</TableCell>
                    <TableCell>{new Date(event.timestamp * 1000).toLocaleString()}</TableCell>
                    <TableCell>{event.amountUsd?.toFixed(2) ?? '-'}</TableCell>
                    <TableCell className="font-mono truncate max-w-[100px] md:max-w-[150px]">
                      <a
                        href={`https://etherscan.io/tx/${event.transactionHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        title={event.transactionHash}
                      >
                        {event.transactionHash}
                      </a>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground">
                    No recent transactions found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}