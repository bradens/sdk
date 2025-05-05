import React from 'react';
import { LaunchpadFilterTokenResultFragment } from '@/gql/graphql';
import { ColumnFilterPopover } from '@/components/ColumnFilterPopover';
import { LaunchpadTokenCard } from '@/components/LaunchpadTokenCard';
import { LoadingColumn } from '@/components/LoadingColumn';
import type { ColumnFilters } from '@/types/launchpad';

interface LaunchpadColumnProps {
    title: string;
    popoverKey: 'new' | 'completing' | 'completed';
    tokens: LaunchpadFilterTokenResultFragment[];
    filters: ColumnFilters;
    setFilters: React.Dispatch<React.SetStateAction<ColumnFilters>>;
    isLoading: boolean;
    isSdkLoading: boolean; // Pass SDK loading state for initial load feel
    openPopover: 'new' | 'completing' | 'completed' | null;
    setOpenPopover: React.Dispatch<React.SetStateAction<'new' | 'completing' | 'completed' | null>>;
}

export const LaunchpadColumn: React.FC<LaunchpadColumnProps> = ({
    title,
    popoverKey,
    tokens,
    filters,
    setFilters,
    isLoading,
    isSdkLoading,
    openPopover,
    setOpenPopover
}) => {
    const showLoading = isLoading || isSdkLoading;
    const popoverTitle = `Filter ${title}`;

    return (
        <div className="bg-card p-1 rounded-lg shadow flex flex-col overflow-hidden">
            <h2 className="text-xl font-semibold mb-2 pb-1 flex-shrink-0 flex items-center justify-between">
                {title}
                <ColumnFilterPopover
                    title={popoverTitle}
                    popoverKey={popoverKey}
                    filters={filters}
                    setFilters={setFilters}
                    openPopover={openPopover}
                    setOpenPopover={setOpenPopover}
                />
            </h2>
            <div className="flex-grow overflow-y-auto space-y-3 pr-1 custom-scrollbar">
                {showLoading ? (
                    <LoadingColumn />
                ) : tokens.length === 0 ? (
                    <p className="text-muted-foreground text-center py-4">No {title.toLowerCase()} tokens found.</p>
                ) : (
                    tokens.map((token) => <LaunchpadTokenCard key={token.token?.id ?? Math.random()} token={token} />)
                )}
            </div>
        </div>
    );
};