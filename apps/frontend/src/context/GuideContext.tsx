'use client';

import { createContext, ReactNode, useContext } from 'react';
import { GuideContextType } from 'shared-types';
import { useQuery } from '@tanstack/react-query';
import { GuideStatus } from 'database/enums';
import { fetchGuide } from '@/utils/guideApiActions';
import { useClientHandleApiError } from '@/utils/apiErrorsHandler';
import { GuideNotFound } from '@/components/custom-ui/GuideNotFound';
import { GuideLoader } from '@/components/custom-ui/GuideLoader';
import {
    getCompletedSteps,
    getQuestionsCount,
    getStepsCount,
} from '@/utils/guideInfo';

export const GuideContext = createContext<GuideContextType | null>(null);

export const useGuideContext = () => {
    const context = useContext(GuideContext);

    if (!context) {
        throw new Error('GuideContext not set');
    }

    return context;
};

export default function GuideContextProvider({
    guideId,
    children,
    autoQueryStatus,
}: {
    guideId: string;
    children: ReactNode;
    autoQueryStatus: boolean;
}) {
    const { clientHandleApiError } = useClientHandleApiError();
    const requestBody: RequestInit = {
        method: 'GET',
    };
    const { data, isLoading } = useQuery({
        queryKey: ['guide', guideId],
        queryFn: async () => {
            const result = await fetchGuide({
                guideId,
                requestBody,
            });

            if (result.isErr()) {
                clientHandleApiError({
                    error: result.error,
                    redirect: false,
                });
                throw result.error;
            }

            return result.value.data;
        },
        enabled: autoQueryStatus,
        retry: false,
    });

    if (isLoading) {
        return <GuideLoader />;
    }

    if (!data) {
        return <GuideNotFound />;
    }

    let context: GuideContextType;

    switch (data.status) {
        case GuideStatus.QUESTIONS_GENERATED:
            context = {
                guide: data,
                status: data.status,
                questionsCount: getQuestionsCount(data),
            };
            break;
        case GuideStatus.GUIDE_GENERATED:
            context = {
                guide: data,
                status: data.status,
                completedSteps: getCompletedSteps(data),
                stepsCount: getStepsCount(data),
            };
            break;
        default:
            context = {
                guide: data,
                status: data.status,
            };
    }

    return <GuideContext value={context}>{children}</GuideContext>;
}
