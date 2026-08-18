import { useContext } from 'react';
import { GuideContext } from '@/context/GuideContext';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CompletedSteps } from '@/components/custom-ui/CompletedSteps';
import { GuideDate } from '@/components/custom-ui/GuideDate';

export function GuideHeader() {
  const { guide, completedSteps } = useContext(GuideContext);

  return (
    <>
      <CardTitle className="flex flex-row justify-between items-center ">
        <h1>{guide.title}</h1>
        <Button
          form="guide-form"
          type="submit"
          variant="success"
          className="w-[200px]"
        >
          Save
        </Button>
      </CardTitle>
      <CardContent>
        {guide.description}
      </CardContent>
      <CardFooter className="flex flex-row items-center gap-[10px]">
        <CompletedSteps
          guideLength={guide.steps.length}
          completedSteps={completedSteps!}
        />
        <GuideDate guideDate={guide.createdAt} />
      </CardFooter>
    </>
  );
}
