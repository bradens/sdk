'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BarChart, List } from 'lucide-react';
// Import the new reusable component and its type
import { TokenSearchInput, SelectedTokenBasics } from './TokenSearchInput';

// Payload for adding a panel (includes type)
interface AddPanelPayload {
    tokenId: string;
    networkId: number;
    name?: string | null;
    symbol?: string | null;
    decimals?: number | null;
    type: 'chart' | 'transactions';
}

interface TokenSearchDialogProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onAddPanel: (panelData: AddPanelPayload) => void;
    // Remove edit props
    // onEditPanel?: (panelId: string, tokenData: EditPanelPayload) => void;
    // targetPanelId?: string | null;
}

export const TokenSearchDialog: React.FC<TokenSearchDialogProps> = ({
    isOpen,
    onOpenChange,
    onAddPanel,
    // Remove edit props from destructuring
}) => {
    // Only need state for the toggle
    const [panelTypeToAdd, setPanelTypeToAdd] = useState<'chart' | 'transactions'>('chart');

    // Handler for when TokenSearchInput selects a token
    const handleTokenSelected = (tokenData: SelectedTokenBasics) => {
        onAddPanel({ ...tokenData, type: panelTypeToAdd });
        onOpenChange(false); // Close dialog after adding
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
                            if (value) setPanelTypeToAdd(value);
                         }}
                         className="justify-center"
                     >
                         <ToggleGroupItem value="chart" aria-label="Add chart panel">
                             <BarChart className="h-4 w-4" />
                             Chart
                         </ToggleGroupItem>
                         <ToggleGroupItem value="transactions" aria-label="Add transactions panel">
                             <List className="h-4 w-4" />
                             Txns
                         </ToggleGroupItem>
                     </ToggleGroup>
                 </div>

                {/* Reusable Search Input Component */}
                <div>
                  <TokenSearchInput
                    onSelectToken={handleTokenSelected}
                    autoFocus={isOpen} // Autofocus when dialog is open
                  />
                </div>
            </DialogContent>
        </Dialog>
    );
};