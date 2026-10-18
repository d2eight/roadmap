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
import {
  LucideBadgeQuestionMark,
  LucideBookOpenCheck,
  LucideFileQuestionMark,
  LucidePlus,
  Pencil,
} from 'lucide-react';
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

export function RecreateGuideWithAnsweredQuestionsButton({
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
            <Pencil />
          </Button>
          {children && <span>{children}</span>}
        </div>
      </DialogTrigger>
      <DialogContent className="modal-container!">
        <DialogHeader>
          <DialogTitle>Your answers</DialogTitle>
          <DialogDescription>
            You can change your answers, this will cause to the recreation of
            guide
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar overflow-y-auto px-4">
          <FormProcessor>
            <GuideQuestionsForm />
          </FormProcessor>
        </div>
        <DialogFooter className="bg-transparent!">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-full">Change answers</Button>
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
