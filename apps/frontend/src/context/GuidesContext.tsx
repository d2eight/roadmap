'use client';

import { createContext, ReactNode, useContext } from 'react';
import { GuideModelWithRelations } from 'shared-types';
import { useSuspenseQuery, useQueryClient } from '@tanstack/react-query';
import { useParamsContext } from './ParamsContext';
import { fetchGuides } from '../utils/guideApiActions';
import { useClientHandleApiError } from '../utils/apiErrorsHandler';
import { GuidesNotFound } from '../components/custom-ui/GuidesNotFound';

export const GuidesContext = createContext<{
    guides: GuideModelWithRelations[];
    guidesCount: number;
} | null>(null);

export const useGuidesContext = () => {
    const context = useContext(GuidesContext);

    if (!context) {
        throw new Error('GuidesContext not set');
    }

    return context;
};

export function GuidesContextProvider({ children }: { children: ReactNode }) {
    const { searchParams, queryKey } = useParamsContext();
    const queryClient = useQueryClient();
    const { clientHandleApiError } = useClientHandleApiError();

    const requestBody: RequestInit = {
        method: 'GET',
    };
    const { data } = useSuspenseQuery<[GuideModelWithRelations[], number]>({
        queryKey,
        queryFn: async () => {
            const result = await fetchGuides({
                requestBody,
                searchParams,
            });

            if (result.isErr()) {
                clientHandleApiError({
                    error: result.error,
                });
                throw result.error;
            }

            result.value.data[0].forEach((guide) => {
                queryClient.setQueryData<GuideModelWithRelations>(
                    ['guide', guide.id],
                    (cachedGuide) => {
                        if (!cachedGuide) return guide;
                        return new Date(guide.updatedAt).getTime() >
                            new Date(cachedGuide.updatedAt).getTime()
                            ? guide
                            : cachedGuide;
                    },
                );
            });
            return result.value.data;
        },
    });

    const guides = data[0] || [];
    const guidesCount = data[1] || 0;

    if (!guides.length) {
        return <GuidesNotFound />;
    }

    console.log(guides);

    return (
        <GuidesContext
            value={{
                guides,
                guidesCount,
            }}
        >
            {children}
        </GuidesContext>
    );
}
