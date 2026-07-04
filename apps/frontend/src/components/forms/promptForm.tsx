"use client"

import {Controller, useForm} from "react-hook-form";
import {ApiResponse, ApiSuccessResponse, promptSchema, promptSchemaType} from "shared-types";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card, CardContent, CardFooter} from "@/apps/frontend/src/components/ui/card";
import {Field, FieldError, FieldLabel} from "@/apps/frontend/src/components/ui/field";
import {Input} from "@/apps/frontend/src/components/ui/input";
import {Checkbox} from "@/apps/frontend/src/components/ui/checkbox";
import {Button} from "@/apps/frontend/src/components/ui/button";
import {GuideModel} from "@/libs/db/generated/prisma/models/Guide";
import {useMutation} from "@tanstack/react-query";

import {useRouter} from "next/navigation";
import {ApiError} from "@/apps/frontend/src/customClasses/apiError";
import {handleApiFormError} from "@/apps/frontend/src/utils/apiErrorsHandler";

export function PromptForm() {
  const router = useRouter();

  const form = useForm<promptSchemaType>({
    resolver: zodResolver(promptSchema),
    defaultValues: {
      prompt: "",
      externalAiQuestionsStatus: false
    },
    mode: "onChange"
  });

  const {mutate} = useMutation({
    mutationFn: createGuide,
    onSuccess: async (responseBody: ApiSuccessResponse<string>) => {
      const newGuideId = responseBody.data;
      router.push(`/guides/${newGuideId}`);
    },
    onError: async (error: ApiError) => {
      handleApiFormError(error, router, form)
    }
  })

  async function createGuide({requestBody, externalAiQuestionsStatus}: {requestBody: RequestInit, externalAiQuestionsStatus: boolean}) {
    const response = !externalAiQuestionsStatus
      ? await fetch('http://localhost:3333/api/create-guide', requestBody)
      : await fetch('http://localhost:3333/api/create-guide-questions', requestBody);

    const body: ApiResponse<string> = await response.json();

    if (!response.ok && !body.success) {
      throw new ApiError(response.status, (body.error.message ?? response.statusText));
    }

    return body as ApiSuccessResponse<string>;
  }

  async function onSubmit(data: promptSchemaType) {
    const externalAiQuestionsStatus = data.externalAiQuestionsStatus;

    const requestBody: RequestInit = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include",
      body: JSON.stringify(data)
    }

    mutate({requestBody, externalAiQuestionsStatus})
  }

  return <>
    <Card>
      <CardContent>
        <form id="prompt-form" onSubmit={form.handleSubmit(onSubmit)}>
          <Controller control={form.control} name="prompt" render={({field, fieldState}) => (
            <Field data-invalid={fieldState.error}>
              <FieldLabel htmlFor={field.name}>Prompt</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="text"
                aria-invalid={fieldState.invalid}
                placeholder="Learn C++ from the very beginning"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )} />
          <Controller control={form.control} name="externalAiQuestionsStatus" render={({field, fieldState}) => (
            <Field data-invalid={fieldState.error}>
              <FieldLabel htmlFor={field.name}>External ai questions, for improving your prompt</FieldLabel>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )} />
        </form>
      </CardContent>
      {form.formState.errors.root?.serverError && <p>{form.formState.errors.root.serverError.message}</p>}
      <CardFooter>
        <Button type="submit" form="prompt-form">Create guide</Button>
      </CardFooter>
    </Card>
  </>

}
