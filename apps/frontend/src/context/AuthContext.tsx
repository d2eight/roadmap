'use client';

import { createContext, ReactNode, useContext } from 'react';
import { authClient } from '../lib/auth-client';
import { AuthContextType } from 'shared-types';

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('AuthContext not set');
    }

    return context;
}

export default function AuthContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const { data, isPending, refetch, error } = authClient.useSession();
    return (
        <AuthContext
            value={{
                data,
                isPending,
                refetch,
                error,
            }}
        >
            {children}
        </AuthContext>
    );
}
