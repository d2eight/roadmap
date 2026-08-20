'use client'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { LucidePlus } from 'lucide-react';
import { FormProcessor } from '@/components/wrappers/FormProcessor';
import { PromptForm } from '@/components/forms/promptForm';

export function CreateGuideButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="cursor-pointer" size="icon-lg">
                <LucidePlus />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Create new guide</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[1400px]! w-full p-[0]">
        <FormProcessor>
          <PromptForm />
        </FormProcessor>
      </DialogContent>
    </Dialog>
  );
}
