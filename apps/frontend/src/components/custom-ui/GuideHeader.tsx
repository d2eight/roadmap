import { useContext } from 'react';
import { GuideContext } from '@/context/GuideContext';
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CompletedSteps } from '@/components/custom-ui/CompletedSteps';
import { GuideDate } from '@/components/custom-ui/GuideDate';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FormProcessingContext } from '@/components/wrappers/FormProcessor';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { LucideCheck, LucideEllipsisVertical } from 'lucide-react';
import { DeleteGuideButton } from '@/components/custom-ui/DeleteGuideButton';
import { RecreateGuideButton } from '@/components/custom-ui/RecreateGuideButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { RecreateGuideWithAnsweredQuestionsButton } from '@/components/custom-ui/RecreateGuideWithAnsweredQuestionsButton';
import { ChangeGuidePromptButton } from '@/components/custom-ui/ChangeGuidePromptButton';
import { RecreateGuideMenu } from '@/components/custom-ui/RecreateGuideMenu';
import { UpdateProgressButton } from '@/components/custom-ui/UpdateProgressButton';

export function GuideHeader() {
  const { guide, completedSteps } = useContext(GuideContext);

  return (
    <>
      <CardHeader className="px-0">
        <CardTitle className="flex flex-row justify-between items-center ">
          <h1>{guide.title}</h1>
        </CardTitle>
        <CardAction className="flex items-center gap-2">
          <UpdateProgressButton variant="outline" className="hidden xl:flex" />
          <DeleteGuideButton />
          <RecreateGuideMenu />
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
        <Accordion
          className="border-none rounded-none"
          type="multiple"
          defaultValue={[]}
        >
          <AccordionItem className="data-open:bg-transparent" value="item-1">
            <AccordionTrigger className="p-0 justify-center items-center **:data-[slot=accordion-trigger-icon]:ml-[0]! gap-[10px]">
              <p>See description</p>
            </AccordionTrigger>
            <AccordionContent className="pt-[20px] pb-[0]">
              {guide.description}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardFooter>
    </>
  );
}
