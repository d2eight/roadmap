'use client';

import { FormProcessor } from '../../context/FormProcessor';
import { useGuideContext } from '../../context/GuideContext';
import { GuideContentFailed } from './GuideContentFailed';
import GuideQuestionsForm from '../forms/GuideQuestionsForm';

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
