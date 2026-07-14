'use client';

import { createContext, ReactNode } from 'react';
import { io, Socket } from 'socket.io-client';

export const SocketContext = createContext<Socket | null>(null!);

export const SocketContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const socket = io('http://localhost:3333', {
    withCredentials: true,
  });

  return <SocketContext value={socket}>{children}</SocketContext>;
};
