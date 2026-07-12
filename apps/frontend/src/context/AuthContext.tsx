'use client';

import {
  Context,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
} from 'react';
import { AuthContextType } from 'shared-types';
import { authClient } from '../lib/auth-client';
import { useQuery } from '@tanstack/react-query';

export const AuthContext = createContext<AuthContextType>(null!);

export default function AuthContextParent({
  children,
}: {
  children: ReactNode;
}) {
  const { data, isError, refetch } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const response = await authClient.getSession();
      return response.data;
    },
  });

  return (
    <AuthContext
      value={{
        data,
        refetch,
        isError,
      }}
    >
      {children}
    </AuthContext>
  );
}
