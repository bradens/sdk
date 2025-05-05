'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { TokenChart } from '@/components/TokenChart';
import { TokenSearchDialog } from '@/components/TokenSearchDialog';
import TokenTransactionsLoader from '@/components/TokenTransactionsLoader';
import { Plus, X } from 'lucide-react';
import { TokenSearchInput } from '@/components/TokenSearchInput';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// Imports for react-grid-layout
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

// Import the new hook
import { useProPageState } from '@/hooks/useProPageState';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function ProPage() {
  // Use the custom hook for state management
  const {
    selectedPanels,
    layouts,
    addPanel,
    removePanel,
    handlePanelTokenChange,
    onLayoutChange,
  } = useProPageState();

  // State related to UI interaction (search dialog, popovers)
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);

  const handleAddClick = useCallback(() => {
    setIsSearchOpen(true);
    setOpenPopoverId(null); // Ensure no popover is open
  }, []);

  // Effect to handle keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (
        event.key === 'Enter' &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        target.tagName !== 'INPUT' &&
        target.tagName !== 'TEXTAREA' &&
        !target.isContentEditable
      ) {
        event.preventDefault(); // Prevent default 'n' behavior (like typing)
        handleAddClick(); // Open the search dialog
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleAddClick]); // Add handleAddClick to dependency array if ESLint requires

  return (
    <div className="py-4 h-screen flex flex-col">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-2 px-4">
        <Button onClick={handleAddClick} size="sm">
        <Plus />
           {selectedPanels.length > 0 ? "Add Another Panel" : "Add Panel"}
        </Button>
      </div>

      {/* Grid Layout Area - Always render the container and RGL */}
      <div className="flex-grow overflow-auto">
          <ResponsiveGridLayout
              className="layout"
              layouts={layouts}
              breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
              cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
              rowHeight={100}
              onLayoutChange={onLayoutChange}
              draggableHandle=".drag-handle"
              isDraggable
              isResizable
              preventCollision={true}
          >
              {selectedPanels.map((panel) => (
                <div key={panel.id} style={{ transitionProperty: 'all' }} className="transition-all duration-500 border-4 border-transparent hover:ring-2 hover:ring-primary/50 bg-card overflow-hidden shadow-md flex flex-col group">
                  <div className="drag-handle bg-muted p-2 cursor-move flex justify-between items-center">
                      <Popover
                          open={openPopoverId === panel.id}
                          onOpenChange={(isOpen) => {
                              setOpenPopoverId(isOpen ? panel.id : null);
                              if (isOpen) setIsSearchOpen(false); // Close dialog if opening popover
                          }}
                      >
                          <PopoverTrigger asChild>
                              <span
                                  className="font-semibold text-sm truncate pr-2 cursor-pointer hover:text-primary transition-colors"
                                  title={`Click to change token (${panel.name ?? panel.symbol ?? panel.tokenId})`}
                                  onMouseDown={(e) => {
                                      e.stopPropagation();
                                  }}
                              >
                                  {panel.symbol ?? panel.tokenId.substring(0, 6)}... - {panel.type === 'chart' ? 'Chart' : 'Txns'}
                              </span>
                          </PopoverTrigger>
                          <PopoverContent className="w-80 p-0">
                              <TokenSearchInput
                                  onSelectToken={(tokenData) => {
                                      handlePanelTokenChange(panel.id, tokenData);
                                  }}
                                  autoFocus={true}
                              />
                          </PopoverContent>
                      </Popover>
                      <button
                          onClick={(e) => {
                              e.stopPropagation();
                              removePanel(panel.id);
                          }}
                          onMouseDown={(e) => {
                              e.stopPropagation(); // Prevent drag start
                          }}
                          className="p-0.5 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label={`Remove ${panel.type}`}
                      >
                          <X size={16} />
                      </button>
                  </div>
                  <div className="flex-grow h-full relative pb-2 bg-muted">
                    {panel.type === 'chart' ? (
                      <TokenChart
                          networkId={panel.networkId}
                          tokenId={panel.tokenId}
                          isLoading={false}
                      />
                    ) : (
                      <TokenTransactionsLoader
                          networkId={panel.networkId}
                          tokenId={panel.tokenId}
                          decimals={panel.decimals ?? 18}
                          onPriceUpdate={() => {}}
                      />
                    )}
                  </div>
                </div>
              ))}
          </ResponsiveGridLayout>
      </div>

      {/* Search Dialog (Only for Adding) */}
      <TokenSearchDialog
        isOpen={isSearchOpen}
        onOpenChange={(isOpen) => {
           setIsSearchOpen(isOpen);
           if (isOpen) setOpenPopoverId(null); // Close popover if opening dialog
        }}
        onAddPanel={addPanel}
      />
    </div>
  );
}