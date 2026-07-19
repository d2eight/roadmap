'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { io, Socket } from 'socket.io-client';
import { GuideModelWithRelations } from 'shared-types';
import { GuidesContext } from './GuidesContext';

export const SocketContext = createContext<{
  socket: Socket;
  socketGuideData: GuideModelWithRelations;
}>(null!);

export const SocketContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [socketGuideData, setSocketGuideData] =
    useState<GuideModelWithRelations>(null!);

  const socket = useMemo(
    () =>
      io('http://localhost:3333', {
        withCredentials: true,
      }),
    [],
  );

  socket.on('guide_update', (data: GuideModelWithRelations) => {
    setSocketGuideData(data);
  });

  return (
    <SocketContext
      value={{
        socket,
        socketGuideData,
      }}
    >
      {children}
    </SocketContext>
  );
};
