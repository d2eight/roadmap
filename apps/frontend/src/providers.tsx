'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { SocketContextProvider } from './context/SocketContext';
import { TooltipProvider } from './components/ui/tooltip';
import AuthContextProvider from '@/context/AuthContext';
import { getQueryClient } from '@/query/getQueryClient';

const queryClient = getQueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SocketContextProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AuthContextProvider>{children}</AuthContextProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </SocketContextProvider>
  );
}
