'use client';

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';
import { GuideModelWithRelations } from 'shared-types';
import { getSocket } from '@/socket';
import { useQueryClient } from '@tanstack/react-query';
import { useParamsContext } from '@/context/ParamsContext';

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

    const { queryKey } = useParamsContext();

    const queryClient = useQueryClient();

    useEffect(() => {
        const socket = getSocket();

        if (socket.disconnected) {
            socket.connect();
            setConnectionStatus(true);
        }

        const handleGuideUpdate = (data: GuideModelWithRelations) => {
            queryClient.setQueryData(['guide', data.id], data);

            const currentGuidesCache =
                queryClient.getQueryData<[GuideModelWithRelations[], number]>(
                    queryKey,
                );

            if (currentGuidesCache) {
                const currentGuidesData = currentGuidesCache[0];
                const currentGuidesCount = currentGuidesCache[1];

                const newGuidesData = currentGuidesData.map((guide) => {
                    if (guide.id === data.id) {
                        return data;
                    }
                    return guide;
                });

                const newGuidesCache = [newGuidesData, currentGuidesCount];

                queryClient.setQueryData(queryKey, newGuidesCache);
            }
        };

        socket.on('guide_update', handleGuideUpdate);

        return () => {
            socket.off('guide_update', handleGuideUpdate);
            socket.disconnect();
        };
    }, []);

    return (
        <SocketContext value={{ connectionStatus }}>{children}</SocketContext>
    );
};
