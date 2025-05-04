'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { TokenChart } from '@/components/TokenChart';
import { TokenSearchDialog } from '@/components/TokenSearchDialog';
import TokenTransactionsLoader from '@/components/TokenTransactionsLoader';
import { X } from 'lucide-react';

// Imports for react-grid-layout
import { Responsive, WidthProvider, Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

// Define the panel interface correctly
interface SelectedPanel {
  id: string;
  type: 'chart' | 'transactions';
  tokenId: string;
  networkId: number;
  name?: string | null;
  symbol?: string | null;
  decimals?: number | null;
}

// Define the payload type expected by addPanel
// (Matches AddPanelPayload from dialog, but defined locally for clarity)
interface AddPanelData {
  tokenId: string;
  networkId: number;
  name?: string | null;
  symbol?: string | null;
  decimals?: number | null;
  type: 'chart' | 'transactions';
}

export default function ProPage() {
  const [selectedPanels, setSelectedPanels] = useState<SelectedPanel[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [layouts, setLayouts] = useState<{ [key: string]: Layout[] }>({});

  const handleAddClick = useCallback(() => {
    setIsSearchOpen(true);
  }, []);

  // Updated addPanel function - takes the full data object
  const addPanel = (panelData: AddPanelData) => {
      // No need to check pendingToken

      const newItemId = `${panelData.networkId}-${panelData.tokenId}-${panelData.type}-${Date.now()}`;
      const newPanel: SelectedPanel = {
          ...panelData, // Spread data received from dialog
          id: newItemId,
          // type is already included in panelData
      };

      setSelectedPanels((prev) => [...prev, newPanel]);

      // Add layout item
      const newLayoutItem: Layout = {
          i: newItemId,
          x: (selectedPanels.length * 4) % 12,
          y: Infinity,
          w: panelData.type === 'chart' ? 6 : 8,
          h: panelData.type === 'chart' ? 4 : 5,
      };

      setLayouts((prevLayouts) => {
          const updatedLayouts = { ...prevLayouts };
          const breakpoint = Object.keys(updatedLayouts)[0] || 'lg';
          updatedLayouts[breakpoint] = [...(updatedLayouts[breakpoint] || []), newLayoutItem];
          if (!prevLayouts[breakpoint]) {
              updatedLayouts['lg'] = [newLayoutItem];
          }
          return updatedLayouts;
      });

      // No pendingToken or search dialog state to clear here,
      // dialog closes itself after calling onAddPanel
  };

  // Handler for layout changes
  const onLayoutChange = (layout: Layout[], allLayouts: { [key: string]: Layout[] }) => {
      const currentLgLayout = layouts['lg'] || [];
      // Avoid unnecessary updates if only keys changed due to filtering
      if (layout.length === currentLgLayout.length && JSON.stringify(layout) === JSON.stringify(currentLgLayout)) {
         return;
      }
      // Filter out layout items that don't correspond to a selectedPanel
      // This prevents issues if removePanel updates state faster than layout syncs
      const currentPanelIds = new Set(selectedPanels.map(p => p.id));
      const filteredLayouts = { ...allLayouts };
      for (const breakpoint in filteredLayouts) {
           filteredLayouts[breakpoint] = filteredLayouts[breakpoint].filter(item => currentPanelIds.has(item.i));
      }
      setLayouts(filteredLayouts);
  };

  // Updated removePanel function
  const removePanel = (idToRemove: string) => {
      // Stop propagation if called directly from button event
      // event?.stopPropagation();

      setSelectedPanels(prev => prev.filter(panel => panel.id !== idToRemove));

      // Explicitly remove layout item from state for immediate visual update
       setLayouts(prevLayouts => {
            const newLayouts = { ...prevLayouts };
            for (const breakpoint in newLayouts) {
                newLayouts[breakpoint] = newLayouts[breakpoint]?.filter(item => item.i !== idToRemove);
            }
            // Remove breakpoint if it becomes empty
            for (const breakpoint in newLayouts) {
                if (newLayouts[breakpoint]?.length === 0) {
                   // delete newLayouts[breakpoint]; // Or keep empty array? Keeping it might be safer for RGL
                }
            }
            return newLayouts;
       });
  };

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
      <h1 className="text-2xl font-bold mb-4 px-4">Pro Mode</h1>

      {selectedPanels.length === 0 && !isSearchOpen && (
        <div className="flex-grow flex justify-center items-center">
           <Button onClick={handleAddClick}>Add Panel</Button>
        </div>
      )}

      {/* Grid Layout Area - make it grow */}
      <div className="flex-grow px-4 overflow-auto"> {/* Added padding and overflow */}
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
              // Prevent collision to allow denser layouts if needed
              // compactType={null}
              // preventCollision={true}
          >
            {selectedPanels.map((panel) => (
              <div key={panel.id} className="bg-card rounded-lg overflow-hidden shadow-md flex flex-col group">
                <div className="drag-handle bg-muted p-1 cursor-move flex justify-between items-center">
                    <span className="font-semibold text-sm truncate pr-2" title={`${panel.name ?? panel.symbol ?? panel.tokenId}`}>
                       {panel.symbol ?? panel.tokenId.substring(0, 6)}... - {panel.type === 'chart' ? 'Chart' : 'Txns'}
                    </span>
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent drag interference
                            removePanel(panel.id);
                        }}
                        onMouseDown={(e) => {
                            // this lets us close the modal without initiating a drag
                            e.stopPropagation()
                        }}
                        className="p-0.5 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" // Adjusted styling
                        aria-label={`Remove ${panel.type}`}
                    >
                        <X size={16} /> {/* Use icon */}
                    </button>
                </div>
                <div className="flex-grow h-full relative"> {/* Added relative positioning if needed */}
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
                        onPriceUpdate={() => {}} // Provide dummy prop
                    />
                  )}
                </div>
              </div>
            ))}
          </ResponsiveGridLayout>
        </div>

      {/* "Add Another Panel" button - Conditionally render */}
      {selectedPanels.length > 0 && (
         <div className="flex justify-center py-4">
           <Button onClick={handleAddClick}>Add Another Panel</Button>
         </div>
       )}

      {/* Search Dialog - Pass addPanel directly */}
      <TokenSearchDialog
        isOpen={isSearchOpen} // Dialog is open whenever search is initiated
        onOpenChange={setIsSearchOpen} // Let dialog control its own closing via state update
        onAddPanel={addPanel} // Pass the addPanel function
      />
    </div>
  );
}