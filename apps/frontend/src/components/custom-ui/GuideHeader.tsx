import { useContext } from 'react';
import { GuideContext } from '@/context/GuideContext';
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CompletedSteps } from '@/components/custom-ui/CompletedSteps';
import { GuideDate } from '@/components/custom-ui/GuideDate';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';



export function GuideHeader() {
  const { guide, completedSteps } = useContext(GuideContext);

  return (
    <>
      <CardHeader className="px-0">
        <CardTitle className="flex flex-row justify-between items-center ">
          <h1>{guide.title}</h1>
        </CardTitle>
        <CardAction>
          <Button
            form="guide-form"
            type="submit"
            variant="success"
            className="w-[200px]"
          >
            Update Progress
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="px-0 flex flex-row items-center gap-[10px]">
        <CompletedSteps
          guideLength={guide.steps.length}
          completedSteps={completedSteps!}
        />
        <GuideDate guideDate={guide.createdAt} />
      </CardContent>
      <CardFooter className="px-0">
        <Accordion className="border-none rounded-none" type="multiple" defaultValue={[]}>
          <AccordionItem className="data-open:bg-transparent" value="item-1">
            <AccordionTrigger className="p-0 justify-center items-center **:data-[slot=accordion-trigger-icon]:ml-[0]! gap-[10px]">
              <p>See description</p>
            </AccordionTrigger>
            <AccordionContent className="pt-[20px] pb-[0]">{guide.description}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardFooter>
    </>
  );
}
