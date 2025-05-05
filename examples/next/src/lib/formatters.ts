export const formatNumber = (num: number | string | null | undefined, options: Intl.NumberFormatOptions = {}) => {
  if (num === null || num === undefined) return 'N/A';
  const numericValue = typeof num === 'string' ? parseFloat(num) : num;
  if (isNaN(numericValue)) return 'N/A';
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 2,
    ...options
  }).format(numericValue);
};

export const formatPercent = (num: number | null | undefined) => {
  if (num === null || num === undefined) return 'N/A';
  return `${num.toFixed(2)}%`;
}

export const getTimeAgo = (timestamp: number | null | undefined): string => {
    if (!timestamp) return '-';
    const seconds = Math.floor((new Date().getTime() - timestamp * 1000) / 1000);
    if (seconds < 0) return 'in the future'; // Handle potential clock skew or future dates
    if (seconds < 60) return `${seconds}s`;

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) return `${interval}y`;
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return `${interval}mo`;
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return `${interval}d`;
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return `${interval}h`;
    interval = Math.floor(seconds / 60);
    if (interval >= 1) return `${interval}m`;

    // Fallback for completeness, though the < 60 check covers seconds
    return `${Math.floor(seconds)}s`;
}