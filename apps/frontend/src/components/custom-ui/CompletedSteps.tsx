'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { LucideNotebookPen } from 'lucide-react';

export function CompletedSteps({guideLength, completedSteps}: {guideLength: number, completedSteps: number}) {

  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-1">
            <LucideNotebookPen size="18" />
            {`${completedSteps}/${guideLength}`}
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Completed guide steps</p>
      </TooltipContent>
    </Tooltip>
  );
}
