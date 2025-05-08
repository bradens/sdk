import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, Repeat, Users } from 'lucide-react';
import type { LaunchpadFilterTokenResultFragment } from '@/gql/graphql';
import { formatNumber, formatPercent, getTimeAgo } from '@/lib/formatters';
import { triggerAddProPanel, type AddPanelData, isTokenInProView, PRO_PANEL_STATE_CHANGED_EVENT } from '@/hooks/useProPageState';
import { Button } from '@/components/ui/button';

interface TokenCardProps {
  token: LaunchpadFilterTokenResultFragment;
}

export const LaunchpadTokenCard: React.FC<TokenCardProps> = ({ token }) => {
    const name = token.token?.name ?? 'Unknown Name';
    const symbol = token.token?.symbol ?? '???';
    const imageUrl = token.token?.imageSmallUrl
                    || token.token?.info?.imageThumbUrl
                    || token.token?.info?.imageSmallUrl
                    || token.token?.info?.imageLargeUrl;
    const marketCap = token.marketCap;
    const graduationPercent = token.token?.launchpad?.graduationPercent;
    const holders = token.holders;
    const createdAt = token.token?.createdAt;
    const networkId = token.token?.networkId;
    const tokenId = token.token?.address;
    const decimals = token.token?.decimals;

    const timeAgo = getTimeAgo(createdAt);

    const linkHref = (networkId && tokenId) ? `/networks/${networkId}/tokens/${encodeURIComponent(tokenId)}` : '#';
    const isLinkDisabled = !(networkId && tokenId);

    const [isAdding, setIsAdding] = useState(false);
    const [justAdded, setJustAdded] = useState(false);
    const [isAlreadyInPro, setIsAlreadyInPro] = useState(() => {
        if (typeof networkId !== 'undefined' && tokenId) {
            return isTokenInProView(networkId, tokenId);
        }
        return false;
    });

    useEffect(() => {
        const checkProStatus = () => {
            if (typeof networkId !== 'undefined' && tokenId) {
                setIsAlreadyInPro(isTokenInProView(networkId, tokenId));
            }
        };

        checkProStatus();

        window.addEventListener(PRO_PANEL_STATE_CHANGED_EVENT, checkProStatus);

        return () => {
            window.removeEventListener(PRO_PANEL_STATE_CHANGED_EVENT, checkProStatus);
        };
    }, [networkId, tokenId]);

    const handleAddToProView = async (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();

        if (!tokenId || typeof networkId === 'undefined') {
            alert('Token data is incomplete and cannot be added to Pro View.');
            return;
        }
        setIsAdding(true);
        const panelData: AddPanelData = {
            tokenId: tokenId,
            networkId: networkId,
            name: name,
            symbol: symbol,
            decimals: decimals ?? 18,
            type: 'chart',
        };

        const added = triggerAddProPanel(panelData);
        if (added) {
            setJustAdded(true);
            setTimeout(() => setJustAdded(false), 3000);
        } else {
            alert(`${name} might already be in your Pro View or an error occurred.`);
        }
        setIsAdding(false);
    };

    return (
        <div className={`relative transition-all bg-muted/50 border-dashed hover:border-primary/60 border p-2 flex flex-col gap-1.5 group`}>
            <Link
                href={linkHref}
                passHref
                className={`flex flex-col gap-1.5 ${isLinkDisabled ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}`}
                aria-disabled={isLinkDisabled}
                onClick={(e) => { if (isLinkDisabled) e.preventDefault(); }}
            >
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-shrink min-w-0">
                        {imageUrl &&
                            <img
                                key={imageUrl}
                                src={imageUrl}
                                alt={`${name} logo`}
                                width={36}
                                height={36}
                                className="rounded-md flex-shrink-0 object-cover bg-muted"
                            />
                        }
                        <div className="flex-grow min-w-0">
                            <p className="font-semibold text-sm truncate" title={name}>{name}</p>
                            <p className="text-xs text-muted-foreground truncate">{symbol}</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                     <div className="flex items-center gap-1">
                         <Clock className="h-3 w-3" />
                         <span>{timeAgo}</span>
                    </div>
                </div>

                 <div className="flex items-center justify-between text-xs text-muted-foreground gap-2 flex-wrap">
                    <div className="flex items-center gap-1" title="Graduation Progress">
                         <Repeat className="h-3.5 w-3.5 text-green-500" />
                         <span className="font-medium text-foreground">{formatPercent(graduationPercent)}</span>
                    </div>
                     <div className="flex items-center gap-1" title="Holders">
                         <Users className="h-3.5 w-3.5" />
                         <span className="font-medium text-foreground">{formatNumber(holders)}</span>
                    </div>
                     <div className="flex items-center gap-1" title="Transactions (1h)">
                         <span>Tx</span>
                         <span className="font-medium text-foreground">{token.transactions1 ?? '-'}</span>
                    </div>
                     <div className="flex items-center gap-1" title="Volume (1h)">
                         <span>V</span>
                         <span className="font-medium text-foreground">{formatNumber(token.volume1, {style: 'currency', currency: 'USD'})}</span>
                    </div>
                     <div className="flex items-center gap-1" title="Market Cap">
                         <span>MC</span>
                         <span className="font-medium text-foreground">{formatNumber(marketCap, { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })}</span>
                    </div>
                 </div>
            </Link>

            {networkId && tokenId && (
                <div className="absolute -top-0.5 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center space-x-1 z-10">
                    {isAlreadyInPro ? (
                        <Link href="/pro" passHref>
                            <Button

                                variant="outline"
                                size="sm"
                                className="cursor-pointer h-[18px] p-1 !text-[10px] border-dashed hover:!border-primary !border-primary/50"
                                title="Go to Pro View"
                                onClick={(e) => e.stopPropagation()}
                            >
                              {"pro ->"}
                            </Button>
                        </Link>
                    ) : justAdded ? (
                        <>
                            <div className="flex items-center text-green-500 text-xs h-7 px-2 py-1 rounded-md bg-secondary/50">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1.5">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                                Added
                            </div>

                            <Link href="/pro" passHref>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="cursor-pointer h-[18px] p-1 !text-[10px] border-dashed hover:!border-primary !border-primary/50"
                                    title="Go to Pro View"
                                    onClick={(e) => e.stopPropagation()}
                                >
                              {"pro ->"}
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleAddToProView}
                            disabled={isAdding}
                            className="mt-1 cursor-pointer h-[18px] p-1 !text-[10px] border-dashed hover:!border-primary !border-primary/50"
                            title="Add to Pro View"
                        >
                            {isAdding ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Adding...
                                </>
                            ) : (
                                "Add to Pro"
                            )}
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};