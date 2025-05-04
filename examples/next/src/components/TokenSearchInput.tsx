'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useCodexSdk } from '@/hooks/useCodexSdk';
import { FilterTokensQuery, TokenRankingAttribute, RankingDirection } from '@codex-data/sdk/dist/sdk/generated/graphql';
import { useDebounce } from '@/hooks/useDebounce';

// Type for the token data returned by the search query
type SearchResultToken = NonNullable<NonNullable<FilterTokensQuery['filterTokens']>['results']>[number];

// Type for the data passed back on selection (essentials for add/edit)
export interface SelectedTokenBasics {
    tokenId: string;
    networkId: number;
    name?: string | null;
    symbol?: string | null;
    decimals?: number | null;
}

interface TokenSearchInputProps {
  onSelectToken: (tokenData: SelectedTokenBasics) => void;
  // Optional: Callback when input value changes (if parent needs it)
  // onInputChange?: (value: string) => void;
  // Optional: Prop to disable input if needed
   isDisabled?: boolean;
   autoFocus?: boolean; // Allow parent to control focus
}

export const TokenSearchInput: React.FC<TokenSearchInputProps> = ({
  onSelectToken,
  isDisabled = false,
  autoFocus = false,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [results, setResults] = useState<SearchResultToken[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { sdk, isLoading: isSdkLoading, isAuthenticated } = useCodexSdk();
  const inputRef = useRef<HTMLInputElement>(null);

  // Effect to focus input if requested
  useEffect(() => {
      if (autoFocus) {
          const timer = setTimeout(() => {
              inputRef.current?.focus();
          }, 100);
          return () => clearTimeout(timer);
      }
  }, [autoFocus]);

  // Effect to clear results when search term is empty
   useEffect(() => {
      if (!debouncedSearchTerm.trim()) {
          setResults([]);
      }
   }, [debouncedSearchTerm]);

  // Effect for fetching tokens
  useEffect(() => {
    if (!debouncedSearchTerm.trim()) {
      return;
    }
    if (!sdk || isSdkLoading || !isAuthenticated) {
      console.log("SDK not ready or user not authenticated for search.");
      setResults([]);
      return;
    }

    const fetchTokens = async () => {
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

  const handleSelect = (tokenResult: SearchResultToken) => {
    if (tokenResult?.token?.networkId && tokenResult?.token?.address) {
      onSelectToken({
        tokenId: tokenResult.token.address,
        networkId: tokenResult.token.networkId,
        name: tokenResult.token.name,
        symbol: tokenResult.token.symbol,
        decimals: tokenResult.token.decimals,
      });
      // Clear state after selection
      setSearchTerm('');
      setResults([]);
    } else {
      console.warn("Selected token missing required ID or Network ID", tokenResult?.token);
    }
  };

  return (
    <Command shouldFilter={false} className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
      <CommandInput
        ref={inputRef}
        placeholder="Search for a token..."
        value={searchTerm}
        onValueChange={setSearchTerm}
        disabled={isDisabled || isSdkLoading || !isAuthenticated}
      />
      <CommandList>
        {isLoading && <CommandEmpty>Loading...</CommandEmpty>}
        {!isLoading && !results.length && debouncedSearchTerm.trim() && <CommandEmpty>No results found.</CommandEmpty>}
        {!isLoading && results.length > 0 && (
          <CommandGroup heading="Tokens">
            {results.map((result) => (
              result?.token ? (
                <CommandItem
                  key={`${result.token.networkId}-${result.token.address}`}
                  value={`${result.token.name ?? ''} ${result.token.symbol ?? ''} ${result.token.address}`}
                  onSelect={() => handleSelect(result)}
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
  );
};