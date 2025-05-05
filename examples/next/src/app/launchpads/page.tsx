'use client';

import React, { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { useLaunchpadData } from '@/hooks/useLaunchpadData';
import { LaunchpadColumn } from '@/components/LaunchpadColumn';

export default function LaunchpadsPage() {
  const [openPopover, setOpenPopover] = useState<'new' | 'completing' | 'completed' | null>(null);

  const {
    newTokens,
    completingTokens,
    completedTokens,
    newFilters,
    setNewFilters,
    completingFilters,
    setCompletingFilters,
    completedFilters,
    setCompletedFilters,
    isSdkLoading,
    newLoading,
    completingLoading,
    completedLoading,
    errors,
  } = useLaunchpadData();

  return (
    <div className="p-1 md:p-1 lg:p-1 h-screen flex flex-col">
       {errors.length > 0 && (
        <Alert variant="destructive" className="mb-4 flex-shrink-0">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {errors.map((err, i) => <p key={i}>{err?.message ?? 'An unknown error occurred.'}</p>)}
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 flex-grow overflow-hidden">
        <LaunchpadColumn
            title="New"
            popoverKey="new"
            tokens={newTokens}
            filters={newFilters}
            setFilters={setNewFilters}
            isLoading={newLoading}
            isSdkLoading={isSdkLoading}
            openPopover={openPopover}
            setOpenPopover={setOpenPopover}
        />

         <LaunchpadColumn
            title="Completing"
            popoverKey="completing"
            tokens={completingTokens}
            filters={completingFilters}
            setFilters={setCompletingFilters}
            isLoading={completingLoading}
            isSdkLoading={isSdkLoading}
            openPopover={openPopover}
            setOpenPopover={setOpenPopover}
        />

         <LaunchpadColumn
            title="Completed"
            popoverKey="completed"
            tokens={completedTokens}
            filters={completedFilters}
            setFilters={setCompletedFilters}
            isLoading={completedLoading}
            isSdkLoading={isSdkLoading}
            openPopover={openPopover}
            setOpenPopover={setOpenPopover}
        />
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: hsl(var(--muted-foreground) / 0.5);
          border-radius: 10px;
          border: 3px solid transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: hsl(var(--muted-foreground));
        }
      `}</style>

    </div>
  );
}

