import { useGuideContext } from '@/context/GuideContext';
import {
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { GuideDate } from '@/components/custom-ui/GuideDate';
import { QuestionsCount } from '@/components/custom-ui/QuestionsCount';

export function GuideQuestionsHeader() {
    const { guide, questionsCount, status } = useGuideContext();

    if (status === 'QUESTIONS_GENERATED') {
        return (
            <>
                <CardHeader className="xl:px-0">
                    <CardTitle>
                        <h1>{guide.prompt}</h1>
                    </CardTitle>
                    <CardDescription>
                        For your prompt, we have generated a couple of
                        questions, answer them and we will be able to create a
                        guide - depending on them
                    </CardDescription>
                </CardHeader>
                <CardFooter className="xl:px-0">
                    <div className="flex gap-2.5">
                        <QuestionsCount questionsCount={questionsCount} />
                        <GuideDate guideDate={guide.createdAt} />
                    </div>
                </CardFooter>
            </>
        );
    }
}
