import { useGuideContext } from '@/context/GuideContext';
import { GuideSkeleton } from '@/components/custom-ui/GuideSkeleton';
import { GuideQuestions } from '@/components/custom-ui/GuideQuestions';
import { GuideForm } from '@/components/forms/GuideForm';
import { GuideNotFound } from '@/components/custom-ui/GuideNotFound';
import { GuideContentFailed } from '@/components/custom-ui/GuideContentFailed';

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
