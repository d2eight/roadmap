'use client';

import { Controller, useForm } from 'react-hook-form';
import {
    ApiErrors,
    ApiResponseSuccess,
    GuideModelWithRelations,
    PromptFormErrors,
    promptSchema,
    promptSchemaType,
} from 'shared-types';
import { zodResolver } from '@hookform/resolvers/zod';

import { Field, FieldError, FieldLabel, FieldSet } from '../ui/field';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useFormProcessingContext } from '../../context/FormProcessor';
import { toast } from 'sonner';
import { RedAlert } from '../custom-ui/RedAlert';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import { createGuide, createGuideQuestions, recreateGuide, recreateGuideQuestions } from '../../utils/guideApiActions';
import { useClientHandleApiError } from '../../utils/apiErrorsHandler';
import { UnexpectedError } from 'errors';
import { getDefaultSearchParams } from '../../utils/getDefaultSearchParams';

export function PromptForm({
    pushToGuideStatus,
    guide,
}: {
    pushToGuideStatus?: boolean;
    guide?: GuideModelWithRelations;
}) {
    const router = useRouter();
    const { processingStatus, setProcessingStatus } =
        useFormProcessingContext();
    const queryClient = useQueryClient();
    const isRecreateForm = !!guide;
    const { clientHandleApiError } = useClientHandleApiError();

    const defaultPromptValue = isRecreateForm ? guide.prompt : '';
    const defaultExternalAiQuestionsStatusValue = (): boolean => {
        if (isRecreateForm) {
            return !!guide.questions;
        }
        return false;
    };

    const defaultValues: promptSchemaType = {
        prompt: defaultPromptValue,
        externalAiQuestionsStatus: defaultExternalAiQuestionsStatusValue(),
    };

    const form = useForm<promptSchemaType>({
        resolver: zodResolver(promptSchema),
        defaultValues,
        mode: 'onChange',
    });

    const createMutation = useMutation<
        ApiResponseSuccess<string>,
        ApiErrors<PromptFormErrors>,
        {
            requestBody: RequestInit;
            externalAiQuestionsStatus: boolean;
        }
    >({
        mutationFn: create,
        onSuccess: async (response) => {
            const newGuideId = response.data;

            setProcessingStatus(false);
            toast.success('Successfully initiated to create guide');

            if (pushToGuideStatus) {
                return router.push(`/guides/${newGuideId}`);
            } else {
                return router.push(`/guides?${getDefaultSearchParams({})}`);
            }
        },
        onError: (error) => {
            setProcessingStatus(false);
            clientHandleApiError({
                error,
                form,
            });
        },
    });

    const recreateMutation = useMutation<
        null,
        ApiErrors<PromptFormErrors>,
        {
            requestBody: RequestInit;
            externalAiQuestionsStatus: boolean;
        }
    >({
        mutationFn: recreate,
        onSuccess: async () => {
            setProcessingStatus(false);
            toast.success('Successfully initiated to recreate guide');

            await queryClient.invalidateQueries({
                queryKey: ['guides'],
                refetchType: 'all',
            });
        },
        onError: (error) => {
            setProcessingStatus(false);
            clientHandleApiError({
                error,
                form,
            });
        },
    });

    async function create({
        requestBody,
        externalAiQuestionsStatus,
    }: {
        requestBody: RequestInit;
        externalAiQuestionsStatus: boolean;
    }) {
        const result = externalAiQuestionsStatus
            ? await createGuideQuestions(requestBody)
            : await createGuide(requestBody);

        if (result.isErr()) {
            throw result.error;
        }

        return result.value;
    }

    async function recreate({
        requestBody,
        externalAiQuestionsStatus,
    }: {
        requestBody: RequestInit;
        externalAiQuestionsStatus: boolean;
    }) {
        if (!isRecreateForm) {
            throw new UnexpectedError({
                message: 'Something went wrong',
            });
        }

        const result = externalAiQuestionsStatus
            ? await recreateGuideQuestions(guide.id, requestBody)
            : await recreateGuide(guide.id, requestBody);

        if (result.isErr()) {
            throw result.error;
        }

        return result.value;
    }

    async function onSubmit(data: promptSchemaType) {
        setProcessingStatus(true);
        const externalAiQuestionsStatus = data.externalAiQuestionsStatus;

        const requestBody: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(data),
        };

        if (isRecreateForm) {
            requestBody.method = 'PUT';
            recreateMutation.mutate({ requestBody, externalAiQuestionsStatus });
        } else {
            requestBody.method = 'POST';
            createMutation.mutate({ requestBody, externalAiQuestionsStatus });
        }
    }

    return (
        <div className="h-full flex flex-col">
            <form
                className="flex flex-col gap-[40px]"
                id="prompt-form"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FieldSet disabled={processingStatus}>
                    <Controller
                        control={form.control}
                        name="prompt"
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.error}>
                                <FieldLabel htmlFor={field.name}>
                                    Prompt
                                </FieldLabel>
                                <Textarea
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Learn C++ from the very beginning"
                                />
                                <FieldError errors={[fieldState.error]} />
                            </Field>
                        )}
                    />
                    <Controller
                        control={form.control}
                        name="externalAiQuestionsStatus"
                        render={({ field, fieldState }) => (
                            <Field
                                orientation="horizontal"
                                data-invalid={fieldState.error}
                            >
                                <FieldLabel
                                    className="cursor-pointer"
                                    htmlFor={field.name}
                                >
                                    External ai questions, for improving your
                                    prompt*
                                </FieldLabel>
                                <Switch
                                    id={field.name}
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                                <FieldError errors={[fieldState.error]} />
                            </Field>
                        )}
                    />
                </FieldSet>
            </form>
            <div className="mt-auto">
                {form.formState.errors.root && (
                    <RedAlert
                        title={'Something went wrong'}
                        message={form.formState.errors.root.message as string}
                    />
                )}
            </div>
        </div>
    );
}
