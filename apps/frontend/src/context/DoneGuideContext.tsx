'use client';

import { createContext, ReactNode, useContext } from 'react';
import { GuideModelWithRelations } from 'shared-types';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchDoneGuide } from '../utils/guideApiActions';
import { useClientHandleApiError } from '../utils/apiErrorsHandler';

import { GuideContextProvider } from './GuideContext';
import DashboardNoGuideCard from '../components/custom-ui/DashboardNoGuideCard';

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
    const requestBody: RequestInit = {
        method: 'GET',
    };
    const { data } = useSuspenseQuery({
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

            return result.value.data;
        },
    });

    return (
        <>
            {data ? (
                <DoneGuideContext value={data}>
                    <GuideContextProvider initialData={data} guideId={data.id}>
                        {children}
                    </GuideContextProvider>
                </DoneGuideContext>
            ) : (
                <DashboardNoGuideCard />
            )}
        </>
    );
}
