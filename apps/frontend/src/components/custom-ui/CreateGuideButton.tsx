'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { LucidePlus } from 'lucide-react';
import { FormProcessor } from '@/components/wrappers/FormProcessor';
import { PromptForm } from '@/components/forms/PromptForm';
import { Dispatch, JSX, SetStateAction, useContext } from 'react';
import { DialogContext } from '@/context/DialogContext';
import { CreateGuidePromptFormButton } from '@/components/custom-ui/CreateGuidePromptFormButton';
import { toggleExplanationString } from '@/constants/constants';

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
      <DialogContent className="modal-container!">
        <DialogHeader>
          <FormProcessor className="h-full">
            <div className="h-full flex flex-col">
              <DialogTitle>Guide creation</DialogTitle>
              <DialogDescription>Fill the inputs below:</DialogDescription>
              <div className="mt-5">
                <PromptForm pushToGuideStatus={pushToGuideStatus} />
              </div>
              <div className="mt-auto flex flex-col gap-5">
                <p>{toggleExplanationString}</p>
                <CreateGuidePromptFormButton className="w-full" />
              </div>
            </div>
          </FormProcessor>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
