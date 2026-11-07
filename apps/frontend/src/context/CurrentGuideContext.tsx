'use client';

import { createContext, ReactNode, useContext } from 'react';
import { GuideModelWithRelations } from 'shared-types';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchCurrentGuide } from '../utils/guideApiActions';
import { useClientHandleApiError } from '../utils/apiErrorsHandler';
import { EmptyFailed } from '../components/custom-ui/EmptyFailed';
import { CurrentGuideLoader } from '../components/custom-ui/CurrentGuideLoader';
import DashboardNoGuideCard from '../components/custom-ui/DashboardNoGuideCard';
import { GuideContextProvider } from './GuideContext';

const CurrentGuideContext = createContext<GuideModelWithRelations | null>(null);

export const useCurrentGuideContext = () => {
    const context = useContext(CurrentGuideContext);

    if (!context) {
        throw new Error('GuideContext not set');
    }

    return context;
};

export function CurrentGuideContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const { clientHandleApiError } = useClientHandleApiError();
    const queryClient = useQueryClient();
    const requestBody: RequestInit = {
        method: 'GET',
    };
    const { data, isLoading, isError } = useQuery({
        queryKey: ['currentGuide'],
        queryFn: async () => {
            const result = await fetchCurrentGuide({ requestBody });

            if (result.isErr()) {
                clientHandleApiError({
                    error: result.error,
                    redirect: false,
                });
                throw result.error;
            }

            if (result.value.data) {
                queryClient.setQueryData(
                    ['guide', result.value.data.id],
                    result.value.data,
                );
            }

            return result.value.data;
        },
    });

    if (isLoading) {
        return <CurrentGuideLoader />;
    }

    if (isError) {
        return <EmptyFailed description="Cant load guide, try again later" />;
    }

    return (
        <>
            {data ? (
                <CurrentGuideContext value={data}>
                    <GuideContextProvider
                        guideId={data.id}
                    >
                        {children}
                    </GuideContextProvider>
                </CurrentGuideContext>
            ) : (
                <DashboardNoGuideCard />
            )}
        </>
    );
}
