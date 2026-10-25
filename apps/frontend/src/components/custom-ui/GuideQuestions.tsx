'use client';

import { FormProcessor } from '@/context/FormProcessor';
import GuideQuestionsForm from '@/components/forms/GuideQuestionsForm';
import { useGuideContext } from '@/context/GuideContext';
import { GuideContentFailed } from '@/components/custom-ui/GuideContentFailed';

export function GuideQuestions() {
    const { parsedQuestions, status } = useGuideContext();

    if (status !== 'QUESTIONS_GENERATED') {
        return <GuideContentFailed />;
    }

    if (!parsedQuestions.success) {
        return <GuideContentFailed />;
    }

    return (
        <FormProcessor>
            <GuideQuestionsForm guideQuestions={parsedQuestions.data} />
        </FormProcessor>
    );
}
