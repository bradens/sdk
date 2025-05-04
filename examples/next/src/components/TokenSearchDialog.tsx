'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BarChart, List } from 'lucide-react';
import { useCodexSdk } from '@/hooks/useCodexSdk';
import { FilterTokensQuery, TokenRankingAttribute, RankingDirection } from '@codex-data/sdk/dist/sdk/generated/graphql';
import { useDebounce } from '@/hooks/useDebounce';

// Define the shape of the data needed to add a panel
// No longer needs export as it's internal detail for the prop
interface AddPanelPayload {
    tokenId: string;
    networkId: number;
    name?: string | null;
    symbol?: string | null;
    decimals?: number | null;
    type: 'chart' | 'transactions'; // Include type here
}

interface TokenSearchDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAddPanel: (panelData: AddPanelPayload) => void; // Renamed prop
}

// Type for the search result item
type SearchResultToken = NonNullable<NonNullable<FilterTokensQuery['filterTokens']>['results']>[number];

export const TokenSearchDialog: React.FC<TokenSearchDialogProps> = ({
  isOpen,
  onOpenChange,
  onAddPanel, // Use renamed prop
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [results, setResults] = useState<SearchResultToken[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { sdk, isLoading: isSdkLoading, isAuthenticated } = useCodexSdk();
  // State for panel type selection
  const [panelTypeToAdd, setPanelTypeToAdd] = useState<'chart' | 'transactions'>('chart');
  // Ref for the search input
  const inputRef = useRef<HTMLInputElement>(null);

  // Effect to focus input when dialog opens
  useEffect(() => {
    if (isOpen) {
      // Timeout helps ensure the input is ready after dialog animation/rendering
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100); // Adjust delay if needed
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Clear search term when dialog opens/closes
  useEffect(() => {
      if (!isOpen) {
          setSearchTerm('');
          setResults([]);
          // Optionally reset type? Or keep selection?
          // setPanelTypeToAdd('chart');
      }
  }, [isOpen]);

  useEffect(() => {
    // Fetching logic (remains the same)
    // ...
    if (!debouncedSearchTerm.trim()) {
      setResults([]);
      return;
    }
    if (!sdk || isSdkLoading || !isAuthenticated) {
        console.log("SDK not ready or user not authenticated.");
        setResults([]);
        return;
    }
    const fetchTokens = async () => {
      // ... fetch implementation ...
      setIsLoading(true);
      try {
        console.log(`Searching for tokens with phrase: ${debouncedSearchTerm}`);
        const response = await sdk.queries.filterTokens({
          phrase: debouncedSearchTerm,
          rankings: [{ attribute: TokenRankingAttribute.Volume24, direction: RankingDirection.Desc }],
          limit: 10,
        });
        const searchResults = response.filterTokens?.results?.filter((item): item is SearchResultToken => !!item?.token) ?? [];
        setResults(searchResults);
      } catch (error) {
        console.error("Error fetching tokens:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTokens();
  }, [debouncedSearchTerm, sdk, isSdkLoading, isAuthenticated]);


  const handleSelectToken = (tokenResult: SearchResultToken) => {
    if (tokenResult?.token?.networkId && tokenResult?.token?.address) {
        // Call onAddPanel with all data including the selected type
        onAddPanel({
            tokenId: tokenResult.token.address,
            networkId: tokenResult.token.networkId,
            name: tokenResult.token.name,
            symbol: tokenResult.token.symbol,
            decimals: tokenResult.token.decimals,
            type: panelTypeToAdd, // Add selected type
        });
        // Close the dialog after adding
        onOpenChange(false);
    } else {
        console.warn("Selected token missing required ID or Network ID", tokenResult?.token);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-0 gap-0">
        <DialogHeader>
          <DialogTitle className="sr-only">Add Panel</DialogTitle>
        </DialogHeader>

        {/* Panel Type Toggle */}
        <div className="border-b">
          <ToggleGroup
            type="single"
            value={panelTypeToAdd}
            onValueChange={(value: 'chart' | 'transactions') => {
              if (value) setPanelTypeToAdd(value); // Update state if value is not empty
            }}
            className="justify-center"
          >
            <ToggleGroupItem value="chart" aria-label="Add chart panel">
              <BarChart className="h-4 w-4 mr-0" />
              Chart
            </ToggleGroupItem>
            <ToggleGroupItem value="transactions" aria-label="Add transactions panel">
              <List className="h-4 w-4 mr-0" />
              Txns
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Search Command */}
         <Command shouldFilter={false} className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
            <CommandInput
                ref={inputRef}
                placeholder="Search for a token..."
                value={searchTerm}
                onValueChange={setSearchTerm}
                disabled={isSdkLoading || !isAuthenticated}
            />
             <CommandList>
                {isLoading && <CommandEmpty>Loading...</CommandEmpty>}
                {!isLoading && !results.length && debouncedSearchTerm && <CommandEmpty>No results found.</CommandEmpty>}
                {!isLoading && results.length > 0 && (
                    <CommandGroup heading="Tokens">
                        {results.map((result) => (
                            result?.token ? (
                                <CommandItem
                                    key={`${result.token.networkId}-${result.token.address}`}
                                    value={`${result.token.name ?? ''} ${result.token.symbol ?? ''} ${result.token.address}`}
                                    onSelect={() => handleSelectToken(result)}
                                    className="cursor-pointer"
                                >
                                    <div className="flex items-center space-x-2">
                                        {result.token.info?.imageThumbUrl && (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src={result.token.info.imageThumbUrl} alt={result.token.symbol ?? 'Token'} className="w-6 h-6 rounded-full" />
                                        )}
                                        <span>
                                            {result.token.name ?? 'Unknown Name'} ({result.token.symbol ?? 'N/A'})
                                        </span>
                                    </div>
                                </CommandItem>
                            ) : null
                        ))}
                    </CommandGroup>
                )}
             </CommandList>
         </Command>
      </DialogContent>
    </Dialog>
  );
};