'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { SocketContextProvider } from './context/SocketContext';
import { TooltipProvider } from './components/ui/tooltip';
import AuthContextProvider from '@/context/AuthContext';
import { getQueryClient } from '@/query/getQueryClient';
import { ParamsContextProvider } from '@/context/ParamsContext';

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ParamsContextProvider>
        <SocketContextProvider>
          <TooltipProvider>
            <AuthContextProvider>{children}</AuthContextProvider>
          </TooltipProvider>
        </SocketContextProvider>
      </ParamsContextProvider>
    </QueryClientProvider>
  );
}
