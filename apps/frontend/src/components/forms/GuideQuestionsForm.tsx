'use client';

import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { notFound, useRouter } from 'next/navigation';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '../ui/field';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { Checkbox } from '../ui/checkbox';
import {
  aiQuestionsSchemaType,
  answeredQuestionsSchemaType,
  ApiError,
  ApiResponse,
  guideQuestionsSchema,
  guideQuestionsSchemaType,
} from 'shared-types';
import { useMutation } from '@tanstack/react-query';
import { handleApiFormError } from '../../utils/apiErrorsHandler';
import { GuideContext } from '../../context/GuideContext';
import { FormProcessingContext } from '@/components/wrappers/FormProcessor';
import { toast } from 'sonner';
import { RedAlert } from '@/components/custom-ui/RedAlert';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';

export default function GuideQuestionsForm() {
  const { guide } = useContext(GuideContext);
  const { setProcessingStatus } = useContext(FormProcessingContext);

  const router = useRouter();

  if (!guide.questions) {
    return notFound();
  }

  const guideQuestions: aiQuestionsSchemaType = JSON.parse(
    guide.questions.toString(),
  );

  const questionABCD = guideQuestions.aiQuestionABCD.question;
  const questionABCDOptions = guideQuestions.aiQuestionABCD.options;

  const questionRange = guideQuestions.aiQuestionRange.question;
  const questionRangeMin = guideQuestions.aiQuestionRange.start;
  const questionRangeMax = guideQuestions.aiQuestionRange.end;

  const questionCheckbox = guideQuestions.aiQuestionCheckbox.question;
  const questionCheckboxOptions = guideQuestions.aiQuestionCheckbox.options;

  const questionText = guideQuestions.aiQuestionText.question;

  const form = useForm<guideQuestionsSchemaType>({
    resolver: zodResolver(guideQuestionsSchema),
    defaultValues: {
      questionABCD: '',
      questionRange: 0,
      questionCheckbox: [],
      questionText: '',
    },
    mode: 'onChange',
  });

  const { mutate } = useMutation({
    mutationFn: createGuideWithAnsweredQuestions,
    onSuccess: () => {
      setProcessingStatus(false);
      toast.success('Successfully consumed your answers to create guide');
    },
    onError: async (error: ApiError) => {
      setProcessingStatus(false);
      handleApiFormError(error, router, form);
    },
  });

  async function createGuideWithAnsweredQuestions(requestBody: RequestInit) {
    const response = await fetch(
      `http://localhost:3333/api/create-guide-answered-questions/${guide.id}`,
      requestBody,
    );

    const body: ApiResponse = await response.json();

    if (!body.success) {
      throw new ApiError(
        response.status,
        body.error.message,
        body.error.issues,
      );
    }

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return body;
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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(answeredQuestions),
    };

    mutate(requestBody);
  }

  return (
    <>
      <form id="guide-questions" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mt-[50px] flex flex-col gap-[30px]">
          <Separator />
          <FieldSet className="gap-6!">
            <FieldLegend>{questionABCD}</FieldLegend>
            <FieldDescription>Choose one answer from below:</FieldDescription>
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
                  {questionABCDOptions.map((abcdOption, index) => {
                    return (
                      <Field
                        key={`abcd-${index}`}
                        data-invalid={fieldState.invalid}
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
                            value={abcdOption}
                            aria-invalid={fieldState.invalid}
                          />
                        </FieldLabel>
                      </Field>
                    );
                  })}
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </RadioGroup>
              )}
            />
          </FieldSet>
          <Separator />
          <FieldSet>
            <FieldLegend>{questionRange}</FieldLegend>
            <FieldDescription>
              Choose value on slider from 1 to 100 range:
            </FieldDescription>
            <Controller
              control={form.control}
              name="questionRange"
              render={({ field, fieldState }) => {
                return (
                  <>
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex flex-col gap-[20px]">
                        <div className="block text-center">
                          <span className="text-muted-foreground">
                            Your answer from 1-100:{' '}
                          </span>
                          <span className="font-bold">{field.value}</span>
                        </div>
                        <div>
                          <Slider
                            defaultValue={[0]}
                            onValueChange={(v) => {
                              field.onChange(v[0]);
                            }}
                            min={questionRangeMin}
                            max={questionRangeMax}
                            step={1}
                            className="mx-auto w-full max-w-xs"
                          />
                        </div>
                      </div>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  </>
                );
              }}
            />
          </FieldSet>
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
                  {questionCheckboxOptions.map((checkboxOption, index) => {
                    return (
                      <Field
                        key={`checkbox-${index}`}
                        data-invalid={fieldState.invalid}
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
                            name={field.name}
                            checked={field.value.includes(checkboxOption)}
                            onCheckedChange={(checked) => {
                              const newValue = checked
                                ? [...field.value, checkboxOption]
                                : field.value.filter(
                                    (value) => value !== checkboxOption,
                                  );
                              field.onChange(newValue);
                            }}
                            aria-invalid={fieldState.invalid}
                          />
                        </FieldLabel>
                      </Field>
                    );
                  })}
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldGroup>
              )}
            />
          </FieldSet>
          <Separator />
          <FieldSet>
            <FieldLegend>{questionText}</FieldLegend>
            <FieldDescription>
              Write your answer in the section below:
            </FieldDescription>
          </FieldSet>
          <Controller
            control={form.control}
            name="questionText"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Textarea
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="I wanna..."
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          {form.formState.errors.root?.serverError && (
            <div>
              <Separator />
              <RedAlert
                title={'Something went wrong'}
                message={
                  form.formState.errors.root?.serverError.message as string
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
