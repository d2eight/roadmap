'use client';

import { createContext, ReactNode, useContext } from 'react';
import { GuideModelWithRelations } from 'shared-types';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParamsContext } from '@/context/ParamsContext';
import { fetchGuides } from '@/utils/guideApiActions';
import { useClientHandleApiError } from '@/utils/apiErrorsHandler';
import { GuidesLoader } from '@/components/custom-ui/GuidesLoader';

export const GuidesContext = createContext<{
    guides: GuideModelWithRelations[];
    guidesCount: number;
    isLoading: boolean;
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
    const { data, isLoading } = useQuery({
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

    const guides = data?.[0] || [];
    const guidesCount = data?.[1] || 0;

    if (isLoading) {
        return <GuidesLoader />;
    }

    return (
        <GuidesContext
            value={{
                guides,
                guidesCount,
                isLoading,
            }}
        >
            {children}
        </GuidesContext>
    );
}
