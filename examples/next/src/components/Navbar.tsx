import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-card text-card-foreground border-b border-border">
      {/* Left side: Logo/Home link */}
      <Link href="/" className="text-lg font-bold hover:text-primary transition-colors">
        Tokedex
      </Link>

      {/* Right side: Navigation items */}
      <div className="flex items-center space-x-4">
        <Link href="/pro" className="rounded-md px-2 py-1 text-sm font-medium hover:text-primary transition-colors">
          Pro
        </Link>
        <Link href="/launchpads" className="rounded-md px-2 py-1 text-sm font-medium hover:text-primary transition-colors">
          Launchpads
        </Link>
        <Link href="/overview" className="rounded-md px-2 py-1 text-sm font-medium hover:text-primary transition-colors">
          Overview
        </Link>
      </div>
    </nav>
  );
};