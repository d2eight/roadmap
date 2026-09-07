'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { io } from 'socket.io-client';
import { SocketContextProvider } from './context/SocketContext';
import { GuidesContextProvider } from './context/GuidesContext';
import { TooltipProvider } from './components/ui/tooltip';
import AuthContextProvider from '@/context/AuthContext';

const queryClient = new QueryClient();

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
