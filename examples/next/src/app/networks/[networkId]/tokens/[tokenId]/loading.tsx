import React from "react";
import { Card, CardContent, CardHeader} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// --- Skeleton Fallback Component for the Token Page ---
export default function Loading() {
  return (
    // Add the outer container to match the padding in page.tsx
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 space-y-6">
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
    </main>
  );
}