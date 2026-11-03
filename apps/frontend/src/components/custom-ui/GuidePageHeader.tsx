import { useGuideContext } from '../../context/GuideContext';
import { GuideHeader } from './GuideHeader';
import { GuideQuestionsHeader } from './GuideQuestionsHeader';
import { GuideHeaderWrapper } from './GuideHeaderWrapper';
import { GuideLoadingHeader } from './GuideLoadingHeader';
import { GuideFailedHeader } from './GuideFailedHeader';

export function GuidePageHeader() {
    const { status } = useGuideContext();

    switch (status) {
        case 'INIT':
        case 'GUIDE_GENERATION':
        case 'QUESTIONS_GENERATION':
            return (
                <GuideHeaderWrapper>
                    <GuideLoadingHeader />
                </GuideHeaderWrapper>
            );
            break;
        case 'GUIDE_GENERATED':
            return (
                <GuideHeaderWrapper>
                    <GuideHeader />
                </GuideHeaderWrapper>
            );
            break;
        case 'QUESTIONS_GENERATED':
            return (
                <GuideHeaderWrapper>
                    <GuideQuestionsHeader />
                </GuideHeaderWrapper>
            );
            break;
        default:
            return (
                <GuideHeaderWrapper>
                    <GuideFailedHeader />
                </GuideHeaderWrapper>
            );
            break;
    }
}
