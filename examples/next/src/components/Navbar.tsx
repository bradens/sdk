'use client';
import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-card text-card-foreground border-b border-border border-dashed">
      {/* Left side: Logo/Home link */}
      <Link href="/" className="text-lg font-bold hover:text-primary transition-colors">
        <img className="hover:transition-transform hover:scale-110" src="/tokedex.png" alt="Tokedex Logo" width={42} height={42} />
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
        {/* Privy Login/Logout Button */}
        {/* {ready && (
          authenticated ? (
            <button
              onClick={logout}
              className="rounded-md px-3 py-1.5 text-sm font-medium bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={login}
              className="rounded-md px-3 py-1.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Login
            </button>
          )
        )} */}
      </div>
    </nav>
  );
};