'use client';

import { createContext, ReactNode, useContext } from 'react';
import { GuideModelWithRelations } from 'shared-types';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchCurrentGuide } from '@/utils/guideApiActions';
import { useClientHandleApiError } from '@/utils/apiErrorsHandler';
import { GuideLoader } from '@/components/custom-ui/GuideLoader';
import DashboardNoGuideCard from '@/components/custom-ui/DashboardNoGuideCard';
import GuideContextProvider from '@/context/GuideContext';

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
    const { data, isLoading } = useQuery({
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
        return <GuideLoader />;
    }

    if (!data) {
        return <DashboardNoGuideCard />;
    }

    return (
        <CurrentGuideContext value={data}>
            <GuideContextProvider guideId={data.id} autoQueryStatus={false}>
                {children}
            </GuideContextProvider>
        </CurrentGuideContext>
    );
}
