import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton

// Skeleton for Network Page Table
function NetworkTableSkeleton() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => ( // Show 10 skeleton rows
        <tr key={`skeleton-row-${index}`} className="border-b border-dashed border-border/30">
          <td className="p-2 flex items-center justify-center"><Skeleton className="h-6 w-6 rounded-full" /></td>
          <td className="p-2"><Skeleton className="h-5 w-3/4" /></td>
          <td className="p-2"><Skeleton className="h-5 w-1/3" /></td>
        </tr>
      ))}
    </>
  );
}

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24">
      {/* Title Skeleton */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-5 w-24" />
      </div>

      {/* Table Skeleton */}
      <div className="w-full max-w-4xl">
        <table className="w-full table-fixed border-collapse border border-border">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="p-2 text-left font-semibold w-[60px]">Icon</th>
              <th className="p-2 text-left font-semibold flex-1">Name</th>
              <th className="p-2 text-left font-semibold w-1/5">Symbol</th>
            </tr>
          </thead>
          <tbody>
            <NetworkTableSkeleton />
          </tbody>
        </table>
      </div>
    </main>
  );
}