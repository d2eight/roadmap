import { useGuideContext } from '@/context/GuideContext';
import { CardDescription } from '@/components/ui/card';

export function GuideCardDescription() {
    const { guide } = useGuideContext();

    switch (guide.status) {
        case 'INIT':
        case 'GUIDE_GENERATION':
        case 'QUESTIONS_GENERATION':
            return (
                <CardDescription className="truncate">
                    Here will be guide description
                </CardDescription>
            );
        case 'QUESTIONS_GENERATED':
            return (
                <CardDescription className="truncate">
                    Answer generated questions
                </CardDescription>
            );
        case 'GUIDE_GENERATED':
            return (
                <CardDescription className="truncate">
                    {guide.description}
                </CardDescription>
            );
        default:
            return (
                <CardDescription className="truncate">
                    Guide was not created
                </CardDescription>
            );
    }
}
