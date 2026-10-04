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
import { SimpleRecreateGuideButton } from '@/components/custom-ui/SimpleRecreateGuideButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { RecreateGuideWithAnsweredQuestionsButton } from '@/components/custom-ui/RecreateGuideWithAnsweredQuestionsButton';
import { RecreateGuideButton } from '@/components/custom-ui/RecreateGuideButton';

export function GuideHeader() {
  const { guide, completedSteps } = useContext(GuideContext);
  const { processingStatus } = useContext(FormProcessingContext);

  return (
    <>
      <CardHeader className="px-0">
        <CardTitle className="flex flex-row justify-between items-center ">
          <h1>{guide.title}</h1>
        </CardTitle>
        <CardAction className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                form="guide-form"
                type="submit"
                size="icon-sm"
                variant="outline"
                disabled={processingStatus}
              >
                <LucideCheck />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Update Progress</TooltipContent>
          </Tooltip>
          <DeleteGuideButton />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Tooltip>
                <TooltipTrigger>
                  <Button size="icon-sm" variant="outline">
                    <LucideEllipsisVertical />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Recreate Options</TooltipContent>
              </Tooltip>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()} asChild>
                <SimpleRecreateGuideButton className="cursor-pointer w-full flex flex-row items-center gap-2 hover:bg-muted">
                  Simple recreate
                </SimpleRecreateGuideButton>
              </DropdownMenuItem>
              {guide.questions && (
                <DropdownMenuItem onSelect={(e) => e.preventDefault()} asChild>
                  <RecreateGuideWithAnsweredQuestionsButton className="cursor-pointer w-full flex flex-row items-center gap-2 hover:bg-muted">
                    Change answers
                  </RecreateGuideWithAnsweredQuestionsButton>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem onSelect={(e) => e.preventDefault()} asChild>
                <RecreateGuideButton className="cursor-pointer w-full flex flex-row items-center gap-2 hover:bg-muted">
                  Change prompt
                </RecreateGuideButton>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
