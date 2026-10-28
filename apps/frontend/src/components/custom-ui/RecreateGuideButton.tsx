import { Button } from '@/components/ui/button';
import { LucideRefreshCcw } from 'lucide-react';
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
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { simpleRecreateGuide } from '@/utils/guideApiActions';
import { ReactNode } from 'react';
import { useGuideContext } from '@/context/GuideContext';
import { useClientHandleApiError } from '@/utils/apiErrorsHandler';
import { ApiErrors } from 'shared-types';
import { toast } from 'sonner';
import { useParamsContext } from '@/context/ParamsContext';

export function RecreateGuideButton({
    children,
    className,
}: {
    children?: ReactNode;
    className?: string;
}) {
    const { guide } = useGuideContext();
    const { queryKey } = useParamsContext();
    const queryClient = useQueryClient();
    const { clientHandleApiError } = useClientHandleApiError();

    const { mutate } = useMutation<null, ApiErrors>({
        mutationFn: recreate,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey });
            await queryClient.invalidateQueries({
                queryKey: ['statistics'],
            });
            await queryClient.invalidateQueries({
                queryKey: ['currentGuide'],
            });
            await queryClient.invalidateQueries({
                queryKey: ['doneGuide'],
            });
            toast.success('You have successfully initiated guide recreation!');
        },
        onError: (error) => {
            clientHandleApiError({
                error,
            });
        },
    });

    async function recreate() {
        const requestBody: RequestInit = {
            method: 'PUT',
            credentials: 'include',
        };

        const result = await simpleRecreateGuide(guide.id, requestBody);

        if (result.isErr()) {
            throw result.error;
        }

        return result.value;
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div className={className}>
                    <Button
                        className="cursor-pointer"
                        size="icon-sm"
                        variant="outline"
                    >
                        <LucideRefreshCcw />
                    </Button>
                    {children && <span>{children}</span>}
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure that you want to recreate this guide?
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
