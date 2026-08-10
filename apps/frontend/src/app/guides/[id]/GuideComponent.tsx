'use client'

import { useContext } from 'react';
import { GuideContext } from '../../../context/GuideContext';
import { FormProcessor } from '@/components/wrappers/FormProcessor';
import { GuideForm } from '@/components/forms/GuideForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { CompletedSteps } from '@/components/custom-ui/CompletedSteps';
import { GuideDate } from '@/components/custom-ui/GuideDate';

export default function GuideComponent() {
  const { guide, completedSteps } = useContext(GuideContext);
  console.log(guide);
  return (
    <section>
      <Card className="pl-[50px] pr-[20px] mb-[20px] sticky top-[50px] z-50">
        <CardContent className="flex flex-row justify-between items-center ">
          <h1>{guide.title}</h1>
          <Button
            form="guide-form"
            type="submit"
            variant="success"
            className="w-[200px]"
          >
            Save
          </Button>
        </CardContent>
        <CardFooter className="flex flex-row items-center gap-[10px]">
          <CompletedSteps
            guideLength={guide.steps.length}
            completedSteps={completedSteps}
          />
          <GuideDate guideDate={guide.createdAt} />
        </CardFooter>
      </Card>
      <div>
        <FormProcessor>
          <GuideForm />
        </FormProcessor>
      </div>
    </section>
  );
}
