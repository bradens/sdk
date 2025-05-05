import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export const LoadingColumn: React.FC = () => (
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} className="h-[120px] w-full rounded-md" />
      ))}
    </div>
);