'use client';

import { createContext, ReactNode, useContext } from 'react';
import { GuideContextType } from 'shared-types';
import { useSuspenseQuery } from '@tanstack/react-query';
import { GuideStatus } from 'database/enums';
import { fetchGuide } from '../utils/guideApiActions';
import { useClientHandleApiError } from '../utils/apiErrorsHandler';
import { GuideNotFound } from '../components/custom-ui/GuideNotFound';
import { getCompletedSteps, getCurrentStep, getQuestionsCount, getStepsCount } from '../utils/guideInfo';
import { parseAnswers, parseQuestions } from '../utils/zodParse';

export const GuideContext = createContext<GuideContextType | null>(null);

export const useGuideContext = () => {
    const context = useContext(GuideContext);

    if (!context) {
        throw new Error('GuideContext not set');
    }

    return context;
};

export function GuideContextProvider({
    guideId,
    children,
}: {
    guideId: string;
    children: ReactNode;
}) {
    const { clientHandleApiError } = useClientHandleApiError();
    const requestBody: RequestInit = {
        method: 'GET',
    };
    const { data } = useSuspenseQuery({
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
        retry: false
    });

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
                parsedQuestions: parseQuestions(data.questions),
            };
            break;
        case GuideStatus.GUIDE_GENERATED:
            context = {
                guide: data,
                status: data.status,
                completedSteps: getCompletedSteps(data),
                stepsCount: getStepsCount(data),
                parsedQuestions: parseQuestions(data.questions),
                parsedAnswers: parseAnswers(data.answeredQuestions),
                currentStep: getCurrentStep(data),
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
