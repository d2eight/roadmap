import { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import { PromptForm } from '@/components/forms/promptForm';

export function RecreateGuidePromptButton({
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
      <DialogContent className="max-h-[800px] max-w-[1500px]! no-scrollbar overflow-y-auto w-full p-[70px]">
        <DialogHeader className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-col gap-2">
            <DialogTitle className="text-xl!">Your prompt</DialogTitle>
            <DialogDescription className="text-lg!">
              You can change your prompt, this will cause to the recreation of
              guide
            </DialogDescription>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-[200px]">Change answers</Button>
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
                    Recreate
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DialogHeader>
        <FormProcessor>
          <PromptForm pushToGuideStatus={false} />
        </FormProcessor>
      </DialogContent>
    </Dialog>
  );
}
