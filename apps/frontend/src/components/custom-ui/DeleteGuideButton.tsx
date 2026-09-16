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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { useContext } from 'react';
import { GuideContext } from '@/context/GuideContext';
import { ApiError, paramsSchema } from 'shared-types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ParamsContext } from '@/context/ParamsContext';
import { serverRevalidatePath } from '@/utils/revalidatePath';

export function DeleteGuideButton() {
  const { guide } = useContext(GuideContext);
  const queryClient = useQueryClient();
  const { queryKey } = useContext(ParamsContext);

  const isDisabled =
    guide.status !== 'GUIDE_GENERATED' &&
    guide.status !== 'QUESTIONS_GENERATED';

  const { mutate } = useMutation({
    mutationFn: removeGuide,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey });
      await serverRevalidatePath('/guides');
    },
  });

  async function removeGuide() {
    const response = await fetch(
      `http://localhost:3333/api/remove-guide/${guide.id}`,
      {
        method: 'DELETE',
        credentials: 'include',
      },
    );

    if (!response.ok) {
      throw new ApiError(response.status, response.statusText);
    }

    return response;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        asChild
        onClick={(e) => {
          if (isDisabled) {
            e.stopPropagation();
            e.preventDefault();
          }
        }}
      >
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="cursor-pointer"
                variant="destructive"
                size="icon-sm"
                disabled={isDisabled}
              >
                <Trash2 />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Delete</TooltipContent>
          </Tooltip>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure that you want to delete this guide?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => mutate()}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
