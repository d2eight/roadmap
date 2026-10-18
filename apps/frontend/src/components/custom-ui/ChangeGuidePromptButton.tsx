import { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { QuestionMarkIcon } from '@radix-ui/react-icons';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { FormProcessor } from '@/components/wrappers/FormProcessor';
import GuideQuestionsForm from '@/components/forms/GuideQuestionsForm';
import { ListRestartIcon, NotebookPenIcon } from 'lucide-react';
import { PromptForm } from '@/components/forms/PromptForm';
import { toggleExplanationString } from '@/constants/constants';

export function ChangeGuidePromptButton({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={className}>
          <Button className="cursor-pointer" size="icon-sm" variant="outline">
            <NotebookPenIcon />
          </Button>
          {children && <span>{children}</span>}
        </div>
      </DialogTrigger>
      <DialogContent className="modal-container!">
        <DialogHeader>
          <DialogTitle>Your prompt</DialogTitle>
          <DialogDescription>
            You can change your prompt, this will cause to the recreation of
            guide
          </DialogDescription>
          <FormProcessor className="mt-5">
            <PromptForm pushToGuideStatus={false} />
          </FormProcessor>
        </DialogHeader>
        <DialogFooter className="mt-auto flex-col! gap-5">
          <p>{toggleExplanationString}</p>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-full">Change Prompt</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure that you want to change your answers and recreate
                  this guide?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action will cause guide recreation. All previous
                  progress, steps will be lost.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button form="prompt-form" type="submit">
                    Continue
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
