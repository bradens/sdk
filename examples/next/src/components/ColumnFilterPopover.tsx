import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Filter } from 'lucide-react';
// Import types from the new types file
import type { ColumnFilters } from '@/types/launchpad';

// Internal component for rendering Min/Max inputs for a filter key
interface FilterInputGroupProps {
    label: string;
    filterKey: keyof ColumnFilters;
    filters: ColumnFilters;
    setFilters: React.Dispatch<React.SetStateAction<ColumnFilters>>;
}

const FilterInputGroup: React.FC<FilterInputGroupProps> = ({ label, filterKey, filters, setFilters }) => {
    const handleChange = (bound: 'min' | 'max', value: string) => {
        setFilters(prev => ({
            ...prev,
            [filterKey]: {
                ...prev[filterKey],
                [bound]: value
            }
        }));
    };

    return (
        <div className="grid grid-cols-2 gap-2 items-end">
            <Label htmlFor={`${filterKey}-min`} className="text-xs col-span-2 mb-1">{label}</Label>
            <Input
                id={`${filterKey}-min`}
                type="number"
                placeholder="Min"
                value={filters[filterKey].min}
                onChange={(e) => handleChange('min', e.target.value)}
                className="h-8 text-xs"
            />
            <Input
                id={`${filterKey}-max`}
                type="number"
                placeholder="Max"
                value={filters[filterKey].max}
                onChange={(e) => handleChange('max', e.target.value)}
                className="h-8 text-xs"
            />
        </div>
    );
};

// Define the specific keys allowed for popovers
type PopoverKey = 'new' | 'completing' | 'completed';

// Props for the main ColumnFilterPopover component
interface ColumnFilterPopoverProps {
    title: string;
    popoverKey: PopoverKey; // Use the specific type
    filters: ColumnFilters;
    setFilters: React.Dispatch<React.SetStateAction<ColumnFilters>>;
    openPopover: PopoverKey | null; // Use the specific type + null
    setOpenPopover: React.Dispatch<React.SetStateAction<PopoverKey | null>>; // Use the specific type + null
}

export const ColumnFilterPopover: React.FC<ColumnFilterPopoverProps> = ({
    title,
    popoverKey,
    filters,
    setFilters,
    openPopover,
    setOpenPopover
}) => {
    const isOpen = openPopover === popoverKey;
    const handleOpenChange = (open: boolean) => {
        setOpenPopover(open ? popoverKey : null);
    };

    return (
        <Popover open={isOpen} onOpenChange={handleOpenChange}>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Filter className="h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-2 space-y-2">
                <h3 className="text-sm font-medium mb-1">{title}</h3>
                {/* Add specific FilterInputGroups here */}
                <FilterInputGroup label="Graduation %" filterKey="graduationPercent" filters={filters} setFilters={setFilters} />
                <FilterInputGroup label="Holders" filterKey="holders" filters={filters} setFilters={setFilters} />
                <FilterInputGroup label="Market Cap" filterKey="marketCap" filters={filters} setFilters={setFilters} />
                {/* Add other filters like priceChange1h, transactions1h if needed for specific columns */}
                {/* Example:
                {popoverKey === 'someKey' && (
                     <FilterInputGroup label="Price Change (1h)" filterKey="priceChange1h" filters={filters} setFilters={setFilters} />
                )}
                */}
            </PopoverContent>
        </Popover>
    );
};