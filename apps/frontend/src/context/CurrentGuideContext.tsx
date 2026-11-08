'use client';

import { createContext, ReactNode, useContext } from 'react';
import { GuideModelWithRelations } from 'shared-types';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchCurrentGuide } from '../utils/guideApiActions';
import { useClientHandleApiError } from '../utils/apiErrorsHandler';
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
    const requestBody: RequestInit = {
        method: 'GET',
    };
    const { data } = useSuspenseQuery({
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

            return result.value.data;
        },
    });

    return (
        <>
            {data ? (
                <CurrentGuideContext value={data}>
                    <GuideContextProvider initialData={data} guideId={data.id}>
                        {children}
                    </GuideContextProvider>
                </CurrentGuideContext>
            ) : (
                <DashboardNoGuideCard />
            )}
        </>
    );
}
