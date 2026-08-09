'use client';

import { Controller, useForm } from 'react-hook-form';
import {
  ApiResponse,
  promptSchema,
  promptSchemaType,
} from 'shared-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Field, FieldError, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { GuideModel } from 'database/models';
import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';
import { ApiError } from '../../customClasses/apiError';
import { handleApiFormError } from '../../utils/apiErrorsHandler';
import { useContext } from 'react';
import { FormProcessingContext } from '../wrappers/FormProcessor';
import { toast } from 'sonner';
import { RedAlert } from '@/components/custom-ui/RedAlert';

export function PromptForm() {
  const router = useRouter();
  const { setProcessingStatus,  } = useContext(
    FormProcessingContext,
  );

  const form = useForm<promptSchemaType>({
    resolver: zodResolver(promptSchema),
    defaultValues: {
      prompt: '',
      externalAiQuestionsStatus: false,
    },
    mode: 'onChange',
  });

  const { mutate } = useMutation({
    mutationFn: createGuide,
    onSuccess: async (newGuideId) => {
      setProcessingStatus(false);
      router.push(`/guides/${newGuideId}`);
      toast.success('Successfully initiated to create guide');
    },
    onError: async (error: ApiError) => {
      setProcessingStatus(false);
      handleApiFormError(error, router, form);
    },
  });

  async function createGuide({
    requestBody,
    externalAiQuestionsStatus,
  }: {
    requestBody: RequestInit;
    externalAiQuestionsStatus: boolean;
  }): Promise<string> {
    const response = !externalAiQuestionsStatus
      ? await fetch('http://localhost:3333/api/create-guide', requestBody)
      : await fetch(
          'http://localhost:3333/api/create-guide-questions',
          requestBody,
        );

    const body: ApiResponse<string> = await response.json();

    if (!body.success) {
      throw new ApiError(response.status, body.error.message, body.error.issues);
    }

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return body.data;
  }

  async function onSubmit(data: promptSchemaType) {
    setProcessingStatus(true);
    const externalAiQuestionsStatus = data.externalAiQuestionsStatus;

    const requestBody: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        prompt: data.prompt,
      }),
    };

    mutate({ requestBody, externalAiQuestionsStatus });
  }

  return (
    <>
      <Card>
        <CardContent>
          <form id="prompt-form" onSubmit={form.handleSubmit(onSubmit)}>
            <Controller
              control={form.control}
              name="prompt"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.error}>
                  <FieldLabel htmlFor={field.name}>Prompt</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="Learn C++ from the very beginning"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="externalAiQuestionsStatus"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.error}>
                  <FieldLabel htmlFor={field.name}>
                    External ai questions, for improving your prompt
                  </FieldLabel>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </form>
        </CardContent>
        {form.formState.errors.root?.serverError && (
          <RedAlert
            title={'Something went wrong'}
            message={form.formState.errors.root?.serverError.message as string}
          />
        )}
        <CardFooter>
          <Button type="submit" form="prompt-form">
            Create guide
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
