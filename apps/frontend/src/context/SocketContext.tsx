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
        const socket = getSocket();

        if (socket.disconnected) {
            socket.connect();
            setConnectionStatus(true);
        }

        const handleGuideUpdate = (data: GuideModelWithRelations) => {
            queryClient.setQueryData(['guide', data.id], data);

            queryClient.setQueriesData<[GuideModelWithRelations[], number]>(
                { queryKey: ['guides']},
                (currentGuidesCache) => {
                    if (!currentGuidesCache) return currentGuidesCache;
                    const [currentGuidesData, currentGuidesCount] =
                        currentGuidesCache;
                    const newGuidesData = currentGuidesData.map((guide) =>
                        guide.id === data.id ? data : guide,
                    );
                    return [newGuidesData, currentGuidesCount];
                },
            );
        };

        socket.on('guide_update', handleGuideUpdate);

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

