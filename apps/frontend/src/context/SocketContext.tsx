'use client';

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';
import { GuideModelWithRelations } from 'shared-types';
import { getSocket } from '../socket';
import { useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from './AuthContext';

export const SocketContext = createContext<{
    connectionStatus: boolean;
} | null>(null);

export const useSocketContext = () => {
    const context = useContext(SocketContext);

    if (!context) {
        throw new Error('SocketContext not set');
    }

    return context;
};

export const SocketContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [connectionStatus, setConnectionStatus] = useState<boolean>(false);

    const { data } = useAuthContext();

    const queryClient = useQueryClient();

    useEffect(() => {
        if(!data) {
            return;
        }

        const socket = getSocket();

        if (socket.disconnected) {
            socket.connect();
        }

        const handleGuideUpdate = (guide: GuideModelWithRelations) => {
            queryClient.setQueryData(['guide', guide.id], guide);

            queryClient.setQueriesData<[GuideModelWithRelations[], number]>(
                { queryKey: ['guides']},
                (currentGuidesCache) => {
                    if (!currentGuidesCache) return currentGuidesCache;
                    const [currentGuidesData, currentGuidesCount] =
                        currentGuidesCache;
                    const newGuidesData = currentGuidesData.map(
                        (currentGuide) =>
                            currentGuide.id === guide.id ? guide : currentGuide,
                    );
                    return [newGuidesData, currentGuidesCount];
                },
            );
        };

        socket.on('guide_update', handleGuideUpdate);
        socket.on('connect', () => setConnectionStatus(true));

        return () => {
            socket.disconnect();
            socket.off('guide_update', handleGuideUpdate);
            setConnectionStatus(false);
        };
    }, [data]);

    return (
        <SocketContext value={{ connectionStatus }}>{children}</SocketContext>
    );
};

