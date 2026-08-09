'use client';

import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { notFound, useRouter } from 'next/navigation';
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { Checkbox } from '../ui/checkbox';
import {
  aiQuestionsSchemaType,
  questionsSchema,
  questionsSchemaType,
} from 'shared-types';
import { useMutation } from '@tanstack/react-query';
import { ApiError } from '../../customClasses/apiError';
import { handleApiFormError } from '../../utils/apiErrorsHandler';
import { GuideContext } from '../../context/GuideContext';
import { FormProcessingContext } from '@/components/wrappers/FormProcessor';
import { toast } from 'sonner';
import { RedAlert } from '@/components/custom-ui/RedAlert';

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

  const form = useForm<questionsSchemaType>({
    resolver: zodResolver(questionsSchema),
    defaultValues: {
      questionABCD: {
        question: guideQuestions.aiQuestionABCDSchema.question,
        options: guideQuestions.aiQuestionABCDSchema.options,
        answer: '',
      },
      questionRange: {
        question: guideQuestions.aiQuestionRange.question,
        start: 1,
        end: 100,
        answer: 1,
      },
      questionText: {
        question: guideQuestions.aiQuestionText.question,
        answer: '',
      },
      questionCheckbox: {
        question: guideQuestions.aiQuestionCheckbox.question,
        options: guideQuestions.aiQuestionCheckbox.options,
        answer: [],
      },
    },
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

    const body = await response.json();

    if (!response.ok && !body.success) {
      throw new ApiError(
        response.status,
        body.error.message ?? response.statusText,
      );
    }

    return body;
  }

  async function onSubmit(data: questionsSchemaType) {
    setProcessingStatus(true);

    const requestBody: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    };

    mutate(requestBody);
  }

  return (
    <>
      <form id="guide-questions" onSubmit={form.handleSubmit(onSubmit)}>
        <Controller
          control={form.control}
          name="questionABCD"
          render={({ field, fieldState }) => (
            <RadioGroup
              name={field.name}
              value={field.value.answer}
              onValueChange={(value) => {
                const newValue = {
                  ...field.value,
                  answer: value,
                };
                field.onChange(newValue);
              }}
            >
              {field.value.options.map((abcdOption, index) => {
                return (
                  <Field
                    key={`abcd-${index}`}
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor={`abcdOption-${abcdOption}`}>
                      {abcdOption}
                    </FieldLabel>
                    <RadioGroupItem
                      id={`abcd-${abcdOption}`}
                      value={abcdOption}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                );
              })}
            </RadioGroup>
          )}
        />
        <Controller
          control={form.control}
          name="questionRange"
          render={({ field, fieldState }) => {
            return (
              <>
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.value.question}>
                    {field.value.question}
                  </FieldLabel>
                  <Slider
                    defaultValue={[field.value.start]}
                    onValueChange={(v) => {
                      const newValue = {
                        ...field.value,
                        answer: v[0],
                      };
                      field.onChange(newValue);
                    }}
                    min={0}
                    max={100}
                    step={1}
                    className="mx-auto w-full max-w-xs"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              </>
            );
          }}
        />
        <Controller
          control={form.control}
          name="questionCheckbox"
          render={({ field, fieldState }) => (
            <FieldGroup>
              {field.value.options.map((checkboxOption, index) => {
                return (
                  <Field
                    key={`checkbox-${index}`}
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor={`checkbox-${checkboxOption}`}>
                      {checkboxOption}
                    </FieldLabel>
                    <Checkbox
                      id={`checkbox-${checkboxOption}`}
                      name={field.name}
                      checked={field.value.answer.includes(checkboxOption)}
                      onCheckedChange={(checked) => {
                        const newAnswers = checked
                          ? [...field.value.answer, checkboxOption]
                          : field.value.answer.filter(
                              (value) => value !== checkboxOption,
                            );
                        field.onChange({
                          ...field.value,
                          answer: newAnswers,
                        });
                      }}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                );
              })}
            </FieldGroup>
          )}
        />
        <Controller
          control={form.control}
          name="questionText"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                {field.value.question}
              </FieldLabel>
              <Input
                id={field.name}
                type="text"
                aria-invalid={fieldState.invalid}
                placeholder="Learn C++ from the very beginning"
                onChange={(event) => {
                  const newValue = {
                    ...field.value,
                    answer: event.target.value,
                  };
                  field.onChange(newValue);
                }}
                value={field.value.answer}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        {form.formState.errors.root?.serverError && (
          <RedAlert
            title={'Something went wrong'}
            message={form.formState.errors.root?.serverError.message as string}
          />
        )}
        <Button type="submit" form="guide-questions">
          Apply
        </Button>
      </form>
    </>
  );
}
