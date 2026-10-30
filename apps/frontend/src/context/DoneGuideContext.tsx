'use client';

import { createContext, ReactNode, useContext } from 'react';
import { GuideModelWithRelations } from 'shared-types';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchDoneGuide } from '@/utils/guideApiActions';
import { useClientHandleApiError } from '@/utils/apiErrorsHandler';
import DashboardNoGuideCard from '@/components/custom-ui/DashboardNoGuideCard';
import GuideContextProvider from '@/context/GuideContext';
import { CurrentGuideLoader } from '@/components/custom-ui/CurrentGuideLoader';

const DoneGuideContext = createContext<GuideModelWithRelations | null>(null);

export const useDoneGuideContext = () => {
    const context = useContext(DoneGuideContext);

    if (!context) {
        throw new Error('GuideContext not set');
    }

    return context;
};

export function DoneGuideContextProvider({
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
        queryKey: ['doneGuide'],
        queryFn: async () => {
            const result = await fetchDoneGuide({ requestBody });

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

    if (!data) {
        return <DashboardNoGuideCard />;
    }

    return (
        <DoneGuideContext value={data}>
            <GuideContextProvider guideId={data.id} autoQueryStatus={false}>
                {children}
            </GuideContextProvider>
        </DoneGuideContext>
    );
}
