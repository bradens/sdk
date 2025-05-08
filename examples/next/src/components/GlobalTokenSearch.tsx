'use client';

import React, { useState, useEffect, useCallback } from 'react';
// Removed: import { Codex } from '@codex-data/sdk';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
// import { Search } from 'lucide-react'; // Removed by user
import { FilterTokensQueryVariables, TokenRankingAttribute, RankingDirection, FilterTokensQuery } from '@codex-data/sdk/dist/sdk/generated/graphql';
import { useCodexSdk } from '@/hooks/useCodexSdk'; // Import the hook

// Type for items from sdk.queries.filterTokens results array
// This mirrors the structure suggested by TokenSearchInput.tsx and SDK typical responses.
type CodexFilterTokenResultItem = NonNullable<NonNullable<FilterTokensQuery['filterTokens']>['results']>[number];

// Helper functions
function formatCompactNumber(num: number | undefined | null): string {
  if (num === undefined || num === null) return '-';
  return Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 2 }).format(num);
}

function formatCurrency(num: number | undefined | null): string {
  if (num === undefined || num === null) return '-';
  return `$${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`;
}

function formatPercentage(num: number | undefined | null): string {
  if (num === undefined || num === null) return '-';
  return `${(num * 100).toFixed(2)}%`;
}

// Debounce function
const debounce = <P extends unknown[], R>(func: (...args: P) => R, waitFor: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  const debounced = (...args: P) => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };
  return debounced as (...args: P) => R;
};

type GlobalTokenSearchProps = Record<string, never>;

export const GlobalTokenSearch: React.FC<GlobalTokenSearchProps> = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<CodexFilterTokenResultItem[]>([]);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  // Use the hook for SDK instance and auth state
  const { sdk, isLoading: isSdkLoading, isAuthenticated } = useCodexSdk();

  const fetchResults = useCallback(async (searchQuery: string) => {
    if (!sdk || !isAuthenticated || searchQuery.trim().length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }
    setIsLoadingSearch(true);
    setShowResults(true);

    try {
      const filterVariables: FilterTokensQueryVariables = {
        phrase: searchQuery,
        limit: 10,
        filters: {
          priceUSD: {
            lt: 1_000_000
          }
        },
        rankings: [{ attribute: TokenRankingAttribute.TrendingScore24, direction: RankingDirection.Desc }],
      };

      const response = await sdk.queries.filterTokens(filterVariables);

      if (response && response.filterTokens && Array.isArray(response.filterTokens.results)) {
        // Filter out items that don't have the essential data.
        // CodexFilterTokenResultItem ensures item itself is not null.
        const validResults = response.filterTokens.results.filter(
          (item: CodexFilterTokenResultItem | null): item is CodexFilterTokenResultItem => {
            // Explicitly check item for null first, then its properties.
            if (!item || !item.token) {
              return false;
            }
            const { token } = item;
            return token.address != null && token.networkId != null;
          }
        );
        setResults(validResults);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error("Error fetching token search results:", error);
      setResults([]);
    } finally {
      setIsLoadingSearch(false);
    }
  }, [sdk, isAuthenticated]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFetchResults = useCallback(debounce(fetchResults, 300), [fetchResults]);

  useEffect(() => {
    if (query.trim().length >= 2) {
      debouncedFetchResults(query);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [query, debouncedFetchResults]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleResultClick = (networkId: number, tokenAddress: string) => {
    setQuery('');
    setResults([]);
    setShowResults(false);
    router.push(`/networks/${networkId}/tokens/${tokenAddress}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && results.length > 0) {
      const firstResult = results[0]; // results[0] is CodexFilterTokenResultItem, which is non-null
      // We need to check .token on firstResult as it's optional in the type.
      if (firstResult && firstResult.token && firstResult.token.address != null && firstResult.token.networkId != null) {
        handleResultClick(firstResult.token.networkId, firstResult.token.address);
      }
    } else if (event.key === 'Escape') {
        setShowResults(false);
        setQuery('');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('.global-search-container') === null) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Determine overall loading/disabled state for the input
  const inputDisabled = isSdkLoading || !isAuthenticated;
  const placeholderText = isSdkLoading
    ? "> SDK Loading..."
    : !isAuthenticated
    ? "> Please login to search"
    : "> Search tokens (e.g., PEPE, WIF...)";

  return (
    <div className="relative global-search-container">
      <div className="relative flex items-center">
        {/* Search icon removed by user */}
        <Input
          type="search"
          placeholder={placeholderText}
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => !inputDisabled && query.length >=2 && setShowResults(true)}
          disabled={inputDisabled}
          className="py-2 focus:w-96 w-26 border-none !bg-transparent focus:border-1 focus:border-dashed focus:border-primary focus:!ring-0"
        />
      </div>
      {showResults && !inputDisabled && (
        <div className="absolute z-50 mt-1 w-full md:w-[450px] lg:w-[600px] max-h-[70vh] overflow-y-auto bg-card border border-border rounded-md shadow-lg">
          {isLoadingSearch && <div className="p-4 text-center text-sm text-muted-foreground">Loading...</div>}
          {!isLoadingSearch && results.length === 0 && query.length >= 2 && (
            <div className="p-4 text-center text-sm text-muted-foreground">No results found for &quot;{query}&quot;.</div>
          )}
          {!isLoadingSearch && results.length > 0 && (
            <table className="w-full table-auto text-sm">
              <tbody>
                {results.map((item, index) => { // item is CodexFilterTokenResultItem
                  if (!item) return null; // Explicit null check for item itself
                  // .token is optional, so check it
                  if (!item.token || item.token.address == null || item.token.networkId == null) return null;

                  const token = item.token; // Now token is non-null
                  const networkId = token.networkId; // is a number
                  const tokenAddress = token.address; // is a string

                  const priceNum = item.priceUSD != null ? parseFloat(String(item.priceUSD)) : null;
                  const change24hNum = item.change24 != null ? parseFloat(String(item.change24)) : null;
                  const volumeNum = item.volume24 != null ? parseFloat(String(item.volume24)) : null;

                  const changeColor = change24hNum == null ? 'text-muted-foreground' : change24hNum > 0 ? 'text-green-500' : change24hNum < 0 ? 'text-red-500' : 'text-muted-foreground';

                  return (
                    <tr
                      key={`${networkId}-${tokenAddress}-${index}`}
                      className="border-b border-dashed border-border/30 hover:bg-muted/30 cursor-pointer"
                      onClick={() => handleResultClick(networkId, tokenAddress)}
                      onKeyDown={(e) => e.key === 'Enter' && handleResultClick(networkId, tokenAddress)}
                      tabIndex={0}
                    >
                      <td className="p-2">
                        {token.info?.imageThumbUrl ? (
                          <img
                            src={token.info.imageThumbUrl}
                            alt={`${token.name || 'Token'} icon`}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">
                            {token.symbol ? token.symbol[0] : 'T'}
                          </div>
                        )}
                      </td>
                      <td className="p-2 truncate">
                        <div className="font-medium text-card-foreground">{token.name || "Unknown Name"}</div>
                        {/* token.network.name might not exist; fallback to networkId */}
                        <div className="text-xs text-muted-foreground">{`Network: ${networkId}`}</div>
                      </td>
                      <td className="p-2 truncate text-muted-foreground">{token.symbol || "-"}</td>
                      <td className="p-2 text-right font-mono">{formatCurrency(priceNum)}</td>
                      <td className={`p-2 text-right font-mono ${changeColor} hidden lg:table-cell`}>{formatPercentage(change24hNum)}</td>
                      <td className="p-2 text-right font-mono hidden md:table-cell">{formatCompactNumber(volumeNum)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          {results.length > 0 && (
             <div className="p-2 text-xs text-muted-foreground border-t border-dashed border-border/30 text-center">
                Showing top {results.length} results. Press Enter on selection or click to navigate.
            </div>
          )}
        </div>
      )}
    </div>
  );
};