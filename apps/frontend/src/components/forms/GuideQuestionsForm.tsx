'use client';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from '../ui/field';
import { Slider } from '../ui/slider';
import { Checkbox } from '../ui/checkbox';
import {
    aiQuestionsSchemaType,
    answeredQuestionsSchemaType,
    ApiErrors,
    ApiResponseSuccess,
    GuideQuestionFormErrors,
    guideQuestionsSchema,
    guideQuestionsSchemaType,
} from 'shared-types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGuideContext } from '../../context/GuideContext';
import { useFormProcessingContext } from '@/context/FormProcessor';
import { toast } from 'sonner';
import { RedAlert } from '@/components/custom-ui/RedAlert';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import {
    createGuideWithAnsweredQuestions,
    recreateGuideWithAnsweredQuestions,
} from '@/utils/guideApiActions';
import { useClientHandleApiError } from '@/utils/apiErrorsHandler';

export default function GuideQuestionsForm({
    guideQuestions,
    answeredQuestions,
}: {
    guideQuestions: aiQuestionsSchemaType;
    answeredQuestions?: answeredQuestionsSchemaType;
}) {
    const { guide } = useGuideContext();
    const { processingStatus, setProcessingStatus } =
        useFormProcessingContext();
    const queryClient = useQueryClient();
    const { clientHandleApiError } = useClientHandleApiError();

    const questionABCD = guideQuestions.aiQuestionABCD.question;
    const questionABCDOptions = guideQuestions.aiQuestionABCD.options;

    const questionRange = guideQuestions.aiQuestionRange.question;
    const questionRangeMin = guideQuestions.aiQuestionRange.start;
    const questionRangeMax = guideQuestions.aiQuestionRange.end;

    const questionCheckbox = guideQuestions.aiQuestionCheckbox.question;
    const questionCheckboxOptions = guideQuestions.aiQuestionCheckbox.options;

    const questionText = guideQuestions.aiQuestionText.question;

    const isRecreateForm = !!answeredQuestions;

    const defaultValues: guideQuestionsSchemaType = isRecreateForm
        ? {
              questionABCD: answeredQuestions.questionABCD.answer,
              questionRange: answeredQuestions.questionRange.answer,
              questionCheckbox: answeredQuestions.questionCheckbox.answer,
              questionText: answeredQuestions.questionText.answer,
          }
        : {
              questionABCD: '',
              questionRange: 0,
              questionCheckbox: [],
              questionText: '',
          };

    const form = useForm<guideQuestionsSchemaType>({
        resolver: zodResolver(guideQuestionsSchema),
        defaultValues,
        mode: 'onChange',
    });

    const createMutation = useMutation<
        ApiResponseSuccess,
        ApiErrors<GuideQuestionFormErrors>,
        RequestInit
    >({
        mutationFn: createGuide,
        onSuccess: async () => {
            setProcessingStatus(false);
            toast.success('Successfully consumed your answers to create guide');
            await queryClient.invalidateQueries({
                queryKey: ['guide', guide.id],
            });
            await queryClient.invalidateQueries({
                queryKey: ['statistics'],
            });
            await queryClient.invalidateQueries({
                queryKey: ['currentGuide'],
            });
            await queryClient.invalidateQueries({
                queryKey: ['doneGuide'],
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

    const recreateMutation = useMutation<
        null,
        ApiErrors<GuideQuestionFormErrors>,
        RequestInit
    >({
        mutationFn: recreateGuide,
        onSuccess: async () => {
            setProcessingStatus(false);
            toast.success('Successfully consumed your answers to create guide');
            await queryClient.invalidateQueries({
                queryKey: ['guide', guide.id],
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

    async function createGuide(requestBody: RequestInit) {
        const result = await createGuideWithAnsweredQuestions(
            guide.id,
            requestBody,
        );

        if (result.isErr()) {
            throw result.error;
        }

        return result.value;
    }

    async function recreateGuide(requestBody: RequestInit) {
        const result = await recreateGuideWithAnsweredQuestions(
            guide.id,
            requestBody,
        );

        if (result.isErr()) {
            throw result.error;
        }

        return result.value;
    }

    async function onSubmit(data: guideQuestionsSchemaType) {
        setProcessingStatus(true);

        const answeredQuestions: answeredQuestionsSchemaType = {
            questionABCD: {
                ...guideQuestions.aiQuestionABCD,
                answer: data.questionABCD,
            },
            questionRange: {
                ...guideQuestions.aiQuestionRange,
                answer: data.questionRange,
            },
            questionCheckbox: {
                ...guideQuestions.aiQuestionCheckbox,
                answer: data.questionCheckbox,
            },
            questionText: {
                ...guideQuestions.aiQuestionText,
                answer: data.questionText,
            },
        };

        const requestBody: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(answeredQuestions),
        };

        if (isRecreateForm) {
            requestBody.method = 'PUT';
            recreateMutation.mutate(requestBody);
        } else {
            requestBody.method = 'PATCH';
            createMutation.mutate(requestBody);
        }
    }

    return (
        <>
            <form id="guide-questions" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-7.5">
                    <Separator />
                    <FieldSet disabled={processingStatus}>
                        <FieldSet className="gap-6!">
                            <FieldLegend>{questionABCD}</FieldLegend>
                            <FieldDescription>
                                Choose one answer from below:
                            </FieldDescription>
                            <Controller
                                control={form.control}
                                name="questionABCD"
                                render={({ field, fieldState }) => (
                                    <RadioGroup
                                        name={field.name}
                                        value={field.value}
                                        className="gap-7"
                                        onValueChange={(value) => {
                                            field.onChange(value);
                                        }}
                                    >
                                        {questionABCDOptions.map(
                                            (abcdOption, index) => {
                                                return (
                                                    <Field
                                                        key={`abcd-${index}`}
                                                        data-invalid={
                                                            fieldState.invalid
                                                        }
                                                        orientation="horizontal"
                                                        className="hover:bg-accent rounded-[10px]"
                                                    >
                                                        <FieldLabel
                                                            className="rounded-[10px] p-[10px] flex justify-between cursor-pointer"
                                                            htmlFor={`abcdOption-${abcdOption}`}
                                                        >
                                                            {abcdOption}
                                                            <RadioGroupItem
                                                                id={`abcdOption-${abcdOption}`}
                                                                value={
                                                                    abcdOption
                                                                }
                                                                aria-invalid={
                                                                    fieldState.invalid
                                                                }
                                                            />
                                                        </FieldLabel>
                                                    </Field>
                                                );
                                            },
                                        )}
                                        {fieldState.invalid && (
                                            <FieldError
                                                errors={[fieldState.error]}
                                            />
                                        )}
                                    </RadioGroup>
                                )}
                            />
                        </FieldSet>
                        <Separator />
                        <Controller
                            control={form.control}
                            name="questionRange"
                            render={({ field, fieldState }) => {
                                return (
                                    <>
                                        <Field
                                            data-invalid={fieldState.invalid}
                                        >
                                            <FieldLegend>
                                                {questionRange}
                                            </FieldLegend>
                                            <FieldDescription>
                                                Choose value on slider from 1 to
                                                100 range:
                                            </FieldDescription>
                                            <div className="flex flex-col gap-[20px]">
                                                <div className="block text-center">
                                                    <span className="text-muted-foreground">
                                                        Your answer from
                                                        1-100:{' '}
                                                    </span>
                                                    <span className="font-bold">
                                                        {field.value}
                                                    </span>
                                                </div>
                                                <div>
                                                    <Slider
                                                        disabled={
                                                            processingStatus
                                                        }
                                                        defaultValue={[
                                                            field.value,
                                                        ]}
                                                        onValueChange={(v) => {
                                                            field.onChange(
                                                                v[0],
                                                            );
                                                        }}
                                                        min={questionRangeMin}
                                                        max={questionRangeMax}
                                                        step={1}
                                                        className="mx-auto w-full max-w-xs"
                                                    />
                                                </div>
                                            </div>
                                            {fieldState.invalid && (
                                                <FieldError
                                                    errors={[fieldState.error]}
                                                />
                                            )}
                                        </Field>
                                    </>
                                );
                            }}
                        />
                        <Separator />
                        <FieldSet>
                            <FieldLegend>{questionCheckbox}</FieldLegend>
                            <FieldDescription>
                                Choose at least 1 (or more), options from below:
                            </FieldDescription>
                            <Controller
                                control={form.control}
                                name="questionCheckbox"
                                render={({ field, fieldState }) => (
                                    <FieldGroup>
                                        {questionCheckboxOptions.map(
                                            (checkboxOption, index) => {
                                                return (
                                                    <Field
                                                        key={`checkbox-${index}`}
                                                        data-invalid={
                                                            fieldState.invalid
                                                        }
                                                        orientation="horizontal"
                                                        className="hover:bg-accent rounded-[10px]"
                                                    >
                                                        <FieldLabel
                                                            className="rounded-[10px] p-[10px] flex justify-between cursor-pointer"
                                                            htmlFor={`checkbox-${checkboxOption}`}
                                                        >
                                                            {checkboxOption}
                                                            <Checkbox
                                                                id={`checkbox-${checkboxOption}`}
                                                                name={
                                                                    field.name
                                                                }
                                                                checked={field.value.includes(
                                                                    checkboxOption,
                                                                )}
                                                                onCheckedChange={(
                                                                    checked,
                                                                ) => {
                                                                    const newValue =
                                                                        checked
                                                                            ? [
                                                                                  ...field.value,
                                                                                  checkboxOption,
                                                                              ]
                                                                            : field.value.filter(
                                                                                  (
                                                                                      value,
                                                                                  ) =>
                                                                                      value !==
                                                                                      checkboxOption,
                                                                              );
                                                                    field.onChange(
                                                                        newValue,
                                                                    );
                                                                }}
                                                                aria-invalid={
                                                                    fieldState.invalid
                                                                }
                                                            />
                                                        </FieldLabel>
                                                    </Field>
                                                );
                                            },
                                        )}
                                        {fieldState.invalid && (
                                            <FieldError
                                                errors={[fieldState.error]}
                                            />
                                        )}
                                    </FieldGroup>
                                )}
                            />
                        </FieldSet>
                        <Separator />
                        <Controller
                            control={form.control}
                            name="questionText"
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLegend>{questionText}</FieldLegend>
                                    <FieldDescription>
                                        Write your answer in the section below:
                                    </FieldDescription>
                                    <Textarea
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="I wanna..."
                                    />
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldSet>
                    {form.formState.errors.root && (
                        <div>
                            <RedAlert
                                title={'Something went wrong'}
                                message={
                                    form.formState.errors.root.message as string
                                }
                            />
                        </div>
                    )}
                    <Separator />
                </div>
            </form>
        </>
    );
}
