'use client';

import { Controller, FieldPath, useForm } from 'react-hook-form';
import {
  ApiError,
  ApiErrors,
  ApiResponse,
  ApiResponseSuccess,
  PromptFormErrors,
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
import { Field, FieldError, FieldLabel, FieldSet } from '../ui/field';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { redirect, useRouter } from 'next/navigation';
import { useContext } from 'react';
import { FormProcessingContext } from '../wrappers/FormProcessor';
import { toast } from 'sonner';
import { RedAlert } from '@/components/custom-ui/RedAlert';
import { Textarea } from '@/components/ui/textarea';
import { DialogContext } from '@/context/DialogContext';
import { guidesPageDefaultUrlString } from 'shared-constants';
import { Switch } from '@/components/ui/switch';
import { ParamsContext } from '@/context/ParamsContext';
import { serverRevalidatePath } from '@/utils/revalidatePath';
import {
  createGuideBasic,
  createGuideQuestions,
  recreateGuidePrompt,
  recreateGuideQuestions,
} from '@/utils/guideApiActions';
import {
  UnauthorizedError,
  UnexpectedError,
  UnprocessableEntity,
} from 'errors';
import {
  handleApiError,
  useClientHandleApiError,
} from '@/utils/apiErrorsHandler';
import { GuideContext } from '@/context/GuideContext';

export function PromptForm({
  pushToGuideStatus,
}: {
  pushToGuideStatus: boolean;
}) {
  const router = useRouter();
  const { processingStatus, setProcessingStatus } = useContext(
    FormProcessingContext,
  );
  const queryClient = useQueryClient();
  const dialog = useContext(DialogContext);
  const params = useContext(ParamsContext);
  const guideContext = useContext(GuideContext);
  const isRecreateForm = guideContext && true;
  const { clientHandleApiError } = useClientHandleApiError();

  const defaultValues: promptSchemaType = {
    prompt: isRecreateForm ? guideContext.guide.prompt : '',
    externalAiQuestionsStatus: isRecreateForm
      ? guideContext.guide.externalAiQuestionsStatus
      : false,
  };

  const form = useForm<promptSchemaType>({
    resolver: zodResolver(promptSchema),
    defaultValues,
    mode: 'onChange',
  });

  const createGuideMutation = useMutation<
    ApiResponseSuccess<string>,
    ApiErrors<PromptFormErrors>,
    {
      requestBody: RequestInit;
      externalAiQuestionsStatus: boolean;
    }
  >({
    mutationFn: createGuide,
    onSuccess: async (response) => {
      const newGuideId = response.data;

      setProcessingStatus(false);
      toast.success('Successfully initiated to create guide');

      if (pushToGuideStatus) {
        return router.push(`/guides/${newGuideId}`);
      }

      if (dialog) {
        dialog.setDialogStatus(false);
      }

      if (params.parsedParams.page === 1) {
        return await queryClient.invalidateQueries({
          queryKey: params.queryKey,
        });
      } else {
        return router.push(guidesPageDefaultUrlString);
      }
    },
    onError: (error) => {
      setProcessingStatus(false);
      clientHandleApiError<promptSchemaType>(error, form);
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
    mutationFn: recreateGuide,
    onSuccess: async () => {
      setProcessingStatus(false);
      toast.success('Successfully initiated to recreate guide');

      await queryClient.invalidateQueries({
        queryKey: params.queryKey,
      });
    },
    onError: (error) => {
      setProcessingStatus(false);
      clientHandleApiError<promptSchemaType>(error, form);
    },
  });

  async function createGuide({
    requestBody,
    externalAiQuestionsStatus,
  }: {
    requestBody: RequestInit;
    externalAiQuestionsStatus: boolean;
  }) {
    const result = externalAiQuestionsStatus
      ? await createGuideQuestions(requestBody)
      : await createGuideBasic(requestBody);

    if (result.isErr()) {
      throw result.error;
    }

    return result.value;
  }

  async function recreateGuide({
    requestBody,
    externalAiQuestionsStatus,
  }: {
    requestBody: RequestInit;
    externalAiQuestionsStatus: boolean;
  }) {
    const result = externalAiQuestionsStatus
      ? await recreateGuideQuestions(guideContext.guide.id, requestBody)
      : await recreateGuidePrompt(guideContext.guide.id, requestBody);

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
      createGuideMutation.mutate({ requestBody, externalAiQuestionsStatus });
    }
  }

  return (
    <Card className="">
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
          <FieldSet disabled={processingStatus}>
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
                  <FieldError errors={[fieldState.error]} />
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
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex flex-col gap-[20px] w-full">
          <p>
            * - If you check this, at first, AI will generate a couple of
            questions, for deeper understanding of your goal. After you answer
            them - guide will be created.
          </p>
          {!isRecreateForm && (
            <Button
              type="submit"
              form="prompt-form"
              disabled={processingStatus}
            >
              Create guide
            </Button>
          )}
        </div>
      </CardFooter>
      <CardFooter>
        {form.formState.errors.root && (
          <RedAlert
            title={'Something went wrong'}
            message={form.formState.errors.root.message as string}
          />
        )}
      </CardFooter>
    </Card>
  );
}
