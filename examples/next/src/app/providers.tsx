'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { AnonymousSessionProvider } from '../components/AnonymousSessionProvider';
import { PrivyProvider } from '@privy-io/react-auth';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // You can add other client-side providers here if needed (e.g., ThemeProvider, QueryClientProvider)
  return (
    <PrivyProvider
      appId="clt9e3dh909bggtfc60e3gwjm" // Make sure to replace this with your actual App ID
      config={{
        appearance: {
          theme: 'dark',
          accentColor: '#FFFFFF',
        },
        loginMethods: ['email', 'wallet', 'google', 'github'],
        embeddedWallets: {
          createOnLogin: 'users-without-wallets', // or 'all-users'
        },
      }}
    >
      <SessionProvider>
        <AnonymousSessionProvider />
        {children}
      </SessionProvider>
    </PrivyProvider>
  );
}