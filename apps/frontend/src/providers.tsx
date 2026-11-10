'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { TooltipProvider } from './components/ui/tooltip';
import { getQueryClient } from './query/getQueryClient';
import AuthContextProvider from './context/AuthContext';
import { SocketContextProvider } from './context/SocketContext';

export default function Providers({ children }: { children: ReactNode }) {
    const queryClient = getQueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
                <SocketContextProvider>
                    <TooltipProvider>{children}</TooltipProvider>
                </SocketContextProvider>
            </AuthContextProvider>
        </QueryClientProvider>
    );
}
