import { useGuideContext } from '../../context/GuideContext';
import { CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { GuideDate } from './GuideDate';
import { QuestionsCount } from './QuestionsCount';
import { GuideFailedHeader } from './GuideFailedHeader';

export function GuideQuestionsHeader() {
    const { guide, questionsCount, status, parsedQuestions } =
        useGuideContext();

    if (status !== 'QUESTIONS_GENERATED') {
        return <GuideFailedHeader />;
    }

    if (!parsedQuestions.success) {
        return <GuideFailedHeader title={guide.prompt} />;
    }

    return (
        <>
            <CardHeader className="xl:px-0">
                <CardTitle>
                    <h1>{guide.prompt}</h1>
                </CardTitle>
                <CardDescription>
                    For your prompt, we have generated a couple of questions,
                    answer them and we will be able to create a guide -
                    depending on them
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
