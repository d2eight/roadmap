'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { TooltipProvider } from './components/ui/tooltip';
import { getQueryClient } from './query/getQueryClient';
import AuthContextProvider from './context/AuthContext';

export default function Providers({ children }: { children: ReactNode }) {
    const queryClient = getQueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
                <TooltipProvider>{children}</TooltipProvider>
            </AuthContextProvider>
        </QueryClientProvider>
    );
}
