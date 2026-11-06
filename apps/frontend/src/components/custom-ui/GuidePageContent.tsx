'use client'

import { useGuideContext } from '../../context/GuideContext';
import { GuideSkeleton } from './GuideSkeleton';
import { GuideQuestions } from './GuideQuestions';
import { GuideForm } from '../forms/GuideForm';
import { GuideNotFound } from './GuideNotFound';
import { GuideContentFailed } from './GuideContentFailed';

export function GuidePageContent() {
    const { guide, status } = useGuideContext();

    switch (status) {
        case 'INIT':
        case 'QUESTIONS_GENERATION':
        case 'GUIDE_GENERATION':
            return <GuideSkeleton prompt={guide.prompt} />;
        case 'QUESTIONS_GENERATED':
            return <GuideQuestions />;
        case 'GUIDE_GENERATED':
            return <GuideForm />;
        case 'FAILED':
            return <GuideContentFailed />;
        default:
            return <GuideNotFound />;
    }
}
