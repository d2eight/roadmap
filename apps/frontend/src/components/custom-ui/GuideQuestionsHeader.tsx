import { useContext } from 'react';
import { GuideContext } from '@/context/GuideContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CompletedSteps } from '@/components/custom-ui/CompletedSteps';
import { GuideDate } from '@/components/custom-ui/GuideDate';
import { QuestionsCount } from '@/components/custom-ui/QuestionsCount';
import { FormProcessingContext } from '@/components/wrappers/FormProcessor';

export function GuideQuestionsHeader() {
  const { guide, questionsCount } = useContext(GuideContext);
  const { processingStatus } = useContext(FormProcessingContext);

  return (
    <>
      <CardContent className="flex flex-row justify-between items-center ">
        <h1>{guide.prompt}</h1>
        <Button
          form="guide-questions"
          type="submit"
          disabled={processingStatus}
          className="w-[200px]"
        >
          Apply
        </Button>
      </CardContent>
      <CardFooter className="flex flex-row items-center gap-[10px]">
        <QuestionsCount questionsCount={questionsCount!} />
        <GuideDate guideDate={guide.createdAt} />
      </CardFooter>
    </>
  );
}
