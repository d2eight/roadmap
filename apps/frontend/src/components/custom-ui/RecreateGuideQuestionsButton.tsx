import { Button } from '../ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { recreateGuideQuestions } from '../../utils/guideApiActions';
import { ReactNode } from 'react';
import { useGuideContext } from '../../context/GuideContext';
import { useClientHandleApiError } from '../../utils/apiErrorsHandler';
import { ApiErrors, promptSchemaType } from 'shared-types';
import { toast } from 'sonner';
import { QuestionMarkIcon } from '@radix-ui/react-icons';

export function RecreateGuideQuestionsButton({
    children,
    className,
}: {
    children?: ReactNode;
    className?: string;
}) {
    const { guide } = useGuideContext();
    const queryClient = useQueryClient();
    const { clientHandleApiError } = useClientHandleApiError();

    const { mutate } = useMutation<null, ApiErrors>({
        mutationFn: recreate,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['guides'] });
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
        const data: promptSchemaType = {
            prompt: guide.prompt,
            externalAiQuestionsStatus: guide.externalAiQuestionsStatus,
        };

        const requestBody: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(data),
        };

        const result = await recreateGuideQuestions(guide.id, requestBody);

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
                        <QuestionMarkIcon />
                    </Button>
                    {children && <span>{children}</span>}
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure that you want to recreate questions for
                        this guide?
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
