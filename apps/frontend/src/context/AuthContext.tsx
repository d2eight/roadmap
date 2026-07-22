'use client';

import {
  Context,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
} from 'react';
import { authClient } from '../lib/auth-client';
import { AuthContextType } from 'shared-types';

export const AuthContext = createContext<AuthContextType>(null!);

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
