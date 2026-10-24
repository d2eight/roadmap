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
import { useGuideContext } from '@/context/GuideContext';
import { ApiErrors } from 'shared-types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParamsContext } from '@/context/ParamsContext';
import { toast } from 'sonner';
import { deleteGuide } from '@/utils/guideApiActions';
import { useClientHandleApiError } from '@/utils/apiErrorsHandler';
import { useRouter } from 'next/navigation';

export function DeleteGuideButton({
    redirect = false,
}: {
    redirect?: boolean;
}) {
    const { guide } = useGuideContext();
    const queryClient = useQueryClient();
    const { queryKey, defaultParams } = useParamsContext();
    const { clientHandleApiError } = useClientHandleApiError();
    const router = useRouter();

    const isDisabled =
        guide.status !== 'GUIDE_GENERATED' &&
        guide.status !== 'QUESTIONS_GENERATED' &&
        guide.status !== 'FAILED';

    const { mutate } = useMutation<null, ApiErrors>({
        mutationFn: removeGuide,
        onSuccess: async () => {
            queryClient.removeQueries({
                queryKey: ['guide', guide.id],
            });
            await queryClient.invalidateQueries({ queryKey });
            toast.success('You have successfully deleted guide!');
            if (redirect) {
                return router.replace(`/guides?${defaultParams}`);
            }
        },
        onError: (error) => {
            clientHandleApiError({
                error,
            });
        },
    });

    async function removeGuide() {
        const requestBody: RequestInit = {
            method: 'DELETE',
            credentials: 'include',
        };

        const result = await deleteGuide(guide.id, requestBody);

        if (result.isErr()) {
            throw result.error;
        }

        return result.value;
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
                        <TooltipContent>Delete Guide</TooltipContent>
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
