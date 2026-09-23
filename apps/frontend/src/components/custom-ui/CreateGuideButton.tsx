'use client';

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
import { Dispatch, JSX, SetStateAction, useContext } from 'react';
import { DialogContext } from '@/context/DialogContext';

export function CreateGuideButton({
  button,
  pushToGuideStatus,
}: {
  button?: JSX.Element;
  pushToGuideStatus: boolean;
}) {
  const { dialogStatus, setDialogStatus } = useContext(DialogContext);

  if (!button) {
    button = (
      <Button
        className="cursor-pointer"
        size="icon-lg"
        onClick={() => setDialogStatus(true)}
      >
        <LucidePlus />
      </Button>
    );
  }

  return (
    <Dialog open={dialogStatus} onOpenChange={setDialogStatus}>
      <DialogTrigger asChild>
        <div>
          <Tooltip>
            <TooltipTrigger asChild>{button}</TooltipTrigger>
            <TooltipContent>
              <p>Create new guide</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[1400px]! w-full p-[0]">
        <FormProcessor>
          <PromptForm pushToGuideStatus={pushToGuideStatus} />
        </FormProcessor>
      </DialogContent>
    </Dialog>
  );
}
