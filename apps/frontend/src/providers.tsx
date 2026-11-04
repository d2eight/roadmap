'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { SocketContextProvider } from './context/SocketContext';
import { TooltipProvider } from './components/ui/tooltip';
import { getQueryClient } from './query/getQueryClient';
import { ParamsContextProvider } from './context/ParamsContext';
import AuthContextProvider from './context/AuthContext';

export default function Providers({ children }: { children: ReactNode }) {
    const queryClient = getQueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
                <ParamsContextProvider>
                    <SocketContextProvider>
                        <TooltipProvider>{children}</TooltipProvider>
                    </SocketContextProvider>
                </ParamsContextProvider>
            </AuthContextProvider>
        </QueryClientProvider>
    );
}
