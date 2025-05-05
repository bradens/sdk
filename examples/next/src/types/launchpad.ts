// src/types/launchpad.ts

export type FilterBounds = { min: string; max: string };

export interface ColumnFilters {
    graduationPercent: FilterBounds;
    priceChange1h: FilterBounds;
    holders: FilterBounds;
    marketCap: FilterBounds;
    transactions1h: FilterBounds;
}

// Add other Launchpad related types here if needed in the future