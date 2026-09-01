'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { io, Socket } from 'socket.io-client';
import { GuideModelWithRelations } from 'shared-types';
import { GuidesContext } from './GuidesContext';

export const SocketContext = createContext<{
  socketGuideData: GuideModelWithRelations;
}>(null!);

export const SocketContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [socketGuideData, setSocketGuideData] =
    useState<GuideModelWithRelations>(null!);

  useEffect(() => {
    const socket = io('http://localhost:3333', {
      withCredentials: true,
    });

    const handleGuideUpdate = (data: GuideModelWithRelations) => {
      setSocketGuideData(data);
    };

    socket.on('guide_update', handleGuideUpdate);

    return () => {
      socket.off('guide_update', handleGuideUpdate);
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext
      value={{
        socketGuideData,
      }}
    >
      {children}
    </SocketContext>
  );
};
