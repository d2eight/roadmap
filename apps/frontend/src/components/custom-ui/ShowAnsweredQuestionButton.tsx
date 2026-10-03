import {
  Dialog,
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
import { LucideBadgeQuestionMark, LucidePlus } from 'lucide-react';
import { FormProcessor } from '@/components/wrappers/FormProcessor';
import GuideQuestionsForm from '@/components/forms/GuideQuestionsForm';
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
import { QuestionMarkIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';

export function ShowAnsweredQuestionButton({
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
            <QuestionMarkIcon />
          </Button>
          {children && <span>{children}</span>}
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[800px] max-w-[1500px]! no-scrollbar overflow-y-auto w-full p-[70px]">
        <DialogHeader className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-col gap-2">
            <DialogTitle className="text-xl!">Your answers</DialogTitle>
            <DialogDescription className="text-lg!">
              You can change your answers, this will cause to the recreation of
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
                  <Button form="guide-questions" type="submit">
                    Recreate
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DialogHeader>
        <FormProcessor>
          <GuideQuestionsForm />
        </FormProcessor>
      </DialogContent>
    </Dialog>
  );
}
