'use client';

import { Controller, useForm } from 'react-hook-form';
import {
  ApiError,
  ApiResponse,
  promptSchema,
  promptSchemaType,
} from 'shared-types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Field, FieldError, FieldLabel } from '../ui/field';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { handleApiFormError } from '../../utils/apiErrorsHandler';
import { useContext } from 'react';
import { FormProcessingContext } from '../wrappers/FormProcessor';
import { toast } from 'sonner';
import { RedAlert } from '@/components/custom-ui/RedAlert';
import { Textarea } from '@/components/ui/textarea';

export function PromptForm() {
  const router = useRouter();
  const { setProcessingStatus } = useContext(FormProcessingContext);

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
      throw new ApiError(
        response.status,
        body.error.message,
        body.error.issues,
      );
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
      body: JSON.stringify(data),
    };

    mutate({ requestBody, externalAiQuestionsStatus });
  }

  return (
    <Card className="min-h-[calc(100vh-200px)]">
      <CardHeader>
        <CardTitle>Guide creation</CardTitle>
        <CardDescription>Fill the inputs below:</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-col gap-[40px]"
          id="prompt-form"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Controller
            control={form.control}
            name="prompt"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.error}>
                <FieldLabel htmlFor={field.name}>Prompt</FieldLabel>
                <Textarea
                  {...field}
                  id={field.name}
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
              <Field orientation="horizontal" data-invalid={fieldState.error}>
                <FieldLabel className="cursor-pointer" htmlFor={field.name}>
                  External ai questions, for improving your prompt*
                </FieldLabel>
                <Checkbox
                  id={field.name}
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
      <CardContent>
        {form.formState.errors.root?.serverError && (
          <RedAlert
            title={'Something went wrong'}
            message={form.formState.errors.root?.serverError.message as string}
          />
        )}
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex flex-col gap-[20px] w-full">
          <p>
            * - If you check this, at first, AI will generate a couple of
            questions, for deeper understanding of your goal. After you answer
            them - guide will be created.
          </p>
          <Button type="submit" form="prompt-form">
            Create guide
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
