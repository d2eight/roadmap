'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { io } from 'socket.io-client';
import { SocketContextProvider } from './context/SocketContext';
import { GuidesContextProvider } from './context/GuidesContext';

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SocketContextProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SocketContextProvider>
  );
}
