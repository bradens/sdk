import { useState, useEffect, useCallback } from 'react';
import type { Layout } from 'react-grid-layout';

// LocalStorage keys
const LOCALSTORAGE_PANELS_KEY = 'proPagePanels';
const LOCALSTORAGE_LAYOUTS_KEY = 'proPageLayouts';
export const PRO_PANEL_STATE_CHANGED_EVENT = 'proPanelStateChanged';

// Define the panel interface correctly
export interface SelectedPanel {
  id: string;
  type: 'chart' | 'transactions';
  tokenId: string;
  networkId: number;
  name?: string | null;
  symbol?: string | null;
  decimals?: number | null;
}

// Define the payload type expected by addPanel
export interface AddPanelData {
  tokenId: string;
  networkId: number;
  name?: string | null;
  symbol?: string | null;
  decimals?: number | null;
  type: 'chart' | 'transactions';
}

// Type for editing a panel (payload from TokenSearchInput)
export type EditPanelData = {
    tokenId: string;
    networkId: number;
    name?: string | null;
    symbol?: string | null;
    decimals?: number | null;
};

// New standalone function to add a panel
export const triggerAddProPanel = (panelData: AddPanelData): boolean => {
  try {
    const savedPanelsRaw = localStorage.getItem(LOCALSTORAGE_PANELS_KEY);
    const savedLayoutsRaw = localStorage.getItem(LOCALSTORAGE_LAYOUTS_KEY);

    let currentPanels: SelectedPanel[] = [];
    if (savedPanelsRaw) {
      const parsed = JSON.parse(savedPanelsRaw);
      if (Array.isArray(parsed)) {
        currentPanels = parsed;
      }
    }

    // Check if a panel with the same token and type already exists
    const panelExists = currentPanels.some(
        (p) => p.tokenId === panelData.tokenId && p.networkId === panelData.networkId && p.type === panelData.type
    );
    if (panelExists) {
        console.warn("Panel with the same token and type already exists. Skipping add.");
        // Optionally, communicate this back to the user, e.g., by returning false or throwing an error.
        // For now, we can just return false to indicate it wasn't added.
        return false;
    }


    let currentLayouts: { [key: string]: Layout[] } = {};
    if (savedLayoutsRaw) {
      const parsed = JSON.parse(savedLayoutsRaw);
      if (typeof parsed === 'object' && parsed !== null) {
        currentLayouts = parsed;
      }
    }

    const newItemId = `${panelData.networkId}-${panelData.tokenId}-${panelData.type}-${Date.now()}`;
    const newPanel: SelectedPanel = {
      ...panelData,
      id: newItemId,
    };

    const updatedPanels = [...currentPanels, newPanel];

    const newLayoutItem: Layout = {
      i: newItemId,
      x: (currentPanels.length * 4) % 12, // Position new item based on current count
      y: Infinity, // This will stack the new item vertically
      w: panelData.type === 'chart' ? 6 : 8,
      h: panelData.type === 'chart' ? 4 : 5,
    };

    const updatedLayouts = { ...currentLayouts };
    const breakpointKeys = Object.keys(updatedLayouts);
    const targetBreakpoint = breakpointKeys.length > 0 ? breakpointKeys[0] : 'lg';

    updatedLayouts[targetBreakpoint] = [...(updatedLayouts[targetBreakpoint] || []), newLayoutItem];
    if (breakpointKeys.length === 0) {
      updatedLayouts['lg'] = [newLayoutItem];
    }

    localStorage.setItem(LOCALSTORAGE_PANELS_KEY, JSON.stringify(updatedPanels));
    localStorage.setItem(LOCALSTORAGE_LAYOUTS_KEY, JSON.stringify(updatedLayouts));

    window.dispatchEvent(new CustomEvent(PRO_PANEL_STATE_CHANGED_EVENT));
    return true; // Panel added successfully
  } catch (error) {
    console.error("Failed to trigger add pro panel:", error);
    return false; // Indicate failure
  }
};

// New function to check if a token is already in Pro View
export const isTokenInProView = (networkIdToCheck: number, tokenIdToCheck: string): boolean => {
  try {
    const savedPanelsRaw = localStorage.getItem(LOCALSTORAGE_PANELS_KEY);
    if (!savedPanelsRaw) return false;

    const currentPanels: SelectedPanel[] = JSON.parse(savedPanelsRaw);
    if (!Array.isArray(currentPanels)) return false;

    return currentPanels.some(
      (panel) => panel.networkId === networkIdToCheck && panel.tokenId === tokenIdToCheck
    );
  } catch (error) {
    console.error("Failed to check if token is in Pro View:", error);
    return false;
  }
};

export function useProPageState() {
  const [selectedPanels, setSelectedPanels] = useState<SelectedPanel[]>([]);
  const [layouts, setLayouts] = useState<{ [key: string]: Layout[] }>({});

  // Load state from localStorage on initial render
  useEffect(() => {
    const loadStateFromLocalStorage = () => {
      let initialPanels: SelectedPanel[] = [];
      try {
        const savedPanels = localStorage.getItem(LOCALSTORAGE_PANELS_KEY);
        const savedLayouts = localStorage.getItem(LOCALSTORAGE_LAYOUTS_KEY);

        if (savedPanels) {
          const parsedPanels = JSON.parse(savedPanels) as SelectedPanel[];
          if (Array.isArray(parsedPanels)) {
              initialPanels = parsedPanels; // Store loaded panels temporarily
              setSelectedPanels(initialPanels);
          } else {
              console.error("Invalid panels data found in localStorage:", parsedPanels);
              localStorage.removeItem(LOCALSTORAGE_PANELS_KEY); // Clear invalid data
          }
        }

        if (savedLayouts) {
          const parsedLayouts = JSON.parse(savedLayouts) as { [key: string]: Layout[] };
          if (typeof parsedLayouts === 'object' && parsedLayouts !== null) {
              // Use the panels loaded IN THIS EFFECT for validation
               const panelIds = new Set(initialPanels.map(p => p.id));
               const validatedLayouts: { [key: string]: Layout[] } = {};
               for (const breakpoint in parsedLayouts) {
                   // Ensure the breakpoint data is an array before filtering
                   if (Array.isArray(parsedLayouts[breakpoint])) {
                       validatedLayouts[breakpoint] = parsedLayouts[breakpoint].filter(item => panelIds.has(item.i));
                   } else {
                       console.warn(`Invalid layout data for breakpoint ${breakpoint}:`, parsedLayouts[breakpoint]);
                   }
               }
              setLayouts(validatedLayouts);
          } else {
              console.error("Invalid layouts data found in localStorage:", parsedLayouts);
              localStorage.removeItem(LOCALSTORAGE_LAYOUTS_KEY); // Clear invalid data
          }
        }
      } catch (error) {
        console.error("Failed to load state from localStorage:", error);
        localStorage.removeItem(LOCALSTORAGE_PANELS_KEY);
        localStorage.removeItem(LOCALSTORAGE_LAYOUTS_KEY);
      }
    };

    loadStateFromLocalStorage(); // Initial load

    const handleStorageChange = () => {
        // console.log("Pro panel state changed event received, reloading state.");
        loadStateFromLocalStorage();
    };

    window.addEventListener(PRO_PANEL_STATE_CHANGED_EVENT, handleStorageChange);
    // Also listen for direct localStorage changes from other tabs/windows if necessary
    // window.addEventListener('storage', handleStorageChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener(PRO_PANEL_STATE_CHANGED_EVENT, handleStorageChange);
      // window.removeEventListener('storage', handleStorageChange);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Save state to localStorage whenever panels or layouts change
  useEffect(() => {
    try {
      if (selectedPanels.length > 0) {
          localStorage.setItem(LOCALSTORAGE_PANELS_KEY, JSON.stringify(selectedPanels));
      } else {
          localStorage.removeItem(LOCALSTORAGE_PANELS_KEY);
      }

       const breakpointsWithLayouts = Object.keys(layouts).filter(key => layouts[key]?.length > 0);
       if (breakpointsWithLayouts.length > 0) {
           localStorage.setItem(LOCALSTORAGE_LAYOUTS_KEY, JSON.stringify(layouts));
       } else {
           localStorage.removeItem(LOCALSTORAGE_LAYOUTS_KEY);
       }
    } catch (error) {
      console.error("Failed to save state to localStorage:", error);
    }
  }, [selectedPanels, layouts]);

  const addPanel = useCallback((panelData: AddPanelData) => {
    const newItemId = `${panelData.networkId}-${panelData.tokenId}-${panelData.type}-${Date.now()}`;
    const newPanel: SelectedPanel = {
      ...panelData,
      id: newItemId,
    };

    setSelectedPanels((prev) => [...prev, newPanel]);

    const newLayoutItem: Layout = {
      i: newItemId,
      x: (selectedPanels.length * 4) % 12,
      y: Infinity,
      w: panelData.type === 'chart' ? 6 : 8,
      h: panelData.type === 'chart' ? 4 : 5,
    };

    setLayouts((prevLayouts) => {
      const updatedLayouts = { ...prevLayouts };
      // Use a common default breakpoint like 'lg' if none exist yet
      const breakpointKeys = Object.keys(updatedLayouts);
      const targetBreakpoint = breakpointKeys.length > 0 ? breakpointKeys[0] : 'lg';

      // Ensure the target breakpoint array exists before spreading
      updatedLayouts[targetBreakpoint] = [...(updatedLayouts[targetBreakpoint] || []), newLayoutItem];

      // If no breakpoints existed, initialize with 'lg'
      if (breakpointKeys.length === 0) {
         updatedLayouts['lg'] = [newLayoutItem];
      }

      return updatedLayouts;
    });
  }, [selectedPanels.length]); // Depend on selectedPanels.length to update `x` correctly

  const removePanel = useCallback((idToRemove: string) => {
    setSelectedPanels(prev => prev.filter(panel => panel.id !== idToRemove));

    setLayouts(prevLayouts => {
      const newLayouts = { ...prevLayouts };
      let layoutsModified = false;
      for (const breakpoint in newLayouts) {
          const originalLength = newLayouts[breakpoint]?.length ?? 0;
          newLayouts[breakpoint] = newLayouts[breakpoint]?.filter(item => item.i !== idToRemove);
          if (newLayouts[breakpoint].length !== originalLength) {
              layoutsModified = true;
          }
          // Optional: Remove breakpoint if it becomes empty (consider RGL behavior)
          // if (newLayouts[breakpoint]?.length === 0) {
          //    delete newLayouts[breakpoint];
          // }
      }
      return layoutsModified ? newLayouts : prevLayouts; // Avoid state update if nothing changed
    });
  }, []);

   // Handler for when a token is selected via Popover in ProPage
  const handlePanelTokenChange = useCallback((panelId: string, newTokenData: EditPanelData) => {
    setSelectedPanels(prevPanels =>
      prevPanels.map(panel =>
        panel.id === panelId
          ? { ...panel, ...newTokenData }
          : panel
      )
    );
  }, []);

  // Handler for layout changes from react-grid-layout
  const onLayoutChange = useCallback((_layout: Layout[], allLayouts: { [key: string]: Layout[] }) => {
      // Prevent saving if layout is empty or hasn't substantially changed
      // This check can be made more robust if needed
      const breakpoints = Object.keys(allLayouts);
      if (breakpoints.length === 0 || !allLayouts[breakpoints[0]]) {
          // console.log("Skipping layout save: No breakpoints or layout data.");
          return;
      }

      // Filter out layout items that don't correspond to a selectedPanel
      // This prevents issues if removePanel updates state faster than layout syncs
      const currentPanelIds = new Set(selectedPanels.map(p => p.id));
      const filteredLayouts = { ...allLayouts };
      let changed = false;
      for (const breakpoint in filteredLayouts) {
          const originalLayout = layouts[breakpoint] || [];
          const newLayout = filteredLayouts[breakpoint].filter(item => currentPanelIds.has(item.i));

          // Basic check if layout actually changed to prevent unnecessary state updates/localStorage writes
          if (JSON.stringify(originalLayout) !== JSON.stringify(newLayout)) {
              filteredLayouts[breakpoint] = newLayout;
              changed = true;
          } else {
               // If no change for this breakpoint, retain the existing layout state for it
              filteredLayouts[breakpoint] = originalLayout;
          }
      }

      // Only update state if a meaningful change occurred
      if (changed) {
          // console.log("Layout changed, updating state:", filteredLayouts);
          setLayouts(filteredLayouts);
      } else {
          // console.log("Layout change detected, but no effective changes after filtering.");
      }
  }, [selectedPanels, layouts]); // Include layouts in dependencies to compare against previous state

  const togglePanelType = useCallback((panelId: string) => {
    setSelectedPanels(prevPanels =>
      prevPanels.map(panel =>
        panel.id === panelId
          ? { ...panel, type: panel.type === 'chart' ? 'transactions' : 'chart' }
          : panel
      )
    );

    setLayouts(prevLayouts => {
      const newLayouts = { ...prevLayouts };
      let layoutsModified = false;
      for (const breakpoint in newLayouts) {
        newLayouts[breakpoint] = newLayouts[breakpoint]?.map(layoutItem => {
          if (layoutItem.i === panelId) {
            layoutsModified = true;
            // const currentPanel = selectedPanels.find(p => p.id === panelId);
            // Adjust dimensions based on the new type - REMOVED
            // The type in `currentPanel` is the *old* type before toggle, so we check the opposite
            return {
              ...layoutItem,
              // w: currentPanel?.type === 'transactions' ? 6 : 8, // REMOVED
              // h: currentPanel?.type === 'transactions' ? 4 : 5, // REMOVED
            };
          }
          return layoutItem;
        });
      }
      return layoutsModified ? newLayouts : prevLayouts;
    });
  }, []); // selectedPanels is a dependency because we use it to find the panel for dimension toggling

  return {
    selectedPanels,
    layouts,
    addPanel,
    removePanel,
    handlePanelTokenChange,
    onLayoutChange,
    togglePanelType, // Expose the new function
  };
}