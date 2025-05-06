import React from 'react';
import Link from 'next/link';
import { Clock, Repeat, Users } from 'lucide-react';
import type { LaunchpadFilterTokenResultFragment } from '@/gql/graphql';
import { formatNumber, formatPercent, getTimeAgo } from '@/lib/formatters';

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

    const timeAgo = getTimeAgo(createdAt);

    const linkHref = (networkId && tokenId) ? `/networks/${networkId}/tokens/${encodeURIComponent(tokenId)}` : '#';
    const isLinkDisabled = !(networkId && tokenId);

    return (
        <Link
            href={linkHref}
            passHref
            className={`transition-all bg-muted/50 hover:border-primary/60 border p-2 flex flex-col gap-1.5 ${isLinkDisabled ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}`}
            aria-disabled={isLinkDisabled}
            onClick={(e) => { if (isLinkDisabled) e.preventDefault(); }}
        >
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-shrink min-w-0">
                    {imageUrl &&
                        // eslint-disable-next-line @next/next/no-img-element
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
    );
};