'use client'

import { useContext, useEffect } from 'react';
import { GuideContext } from '@/context/GuideContext';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ApiResponse,
  GuideStepModelFetched,
  guideStepsSchema,
  guideStepsSchemaType,
} from 'shared-types';
import { StepCard } from '@/components/custom-ui/StepCard';
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { ApiError } from '@/customClasses/apiError';
import { FormProcessingContext } from '@/components/wrappers/FormProcessor';
import { toast } from 'sonner';
import { handleApiFormError } from '@/utils/apiErrorsHandler';
import { useRouter } from 'next/navigation';
import { RedAlert } from '@/components/custom-ui/RedAlert';

export function GuideForm() {
  const { guide, setGuide } = useContext(GuideContext);
  const { setProcessingStatus } = useContext(FormProcessingContext);
  const router = useRouter();

  const form = useForm<guideStepsSchemaType>({
    resolver: zodResolver(guideStepsSchema),
    defaultValues: {
      steps: guide.steps
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: 'steps'
  })

  const { mutate, isSuccess } = useMutation({
    mutationFn: updateGuide,
    onSuccess: (steps: GuideStepModelFetched[]) => {
      setGuide({
        ...guide,
        steps,
      });
      setProcessingStatus(false);
      toast.success("Successfully updated your progress");
    },
    onError: (error: ApiError) => {
      setProcessingStatus(false);
      handleApiFormError(error, router, form);
    }
  });

  function onSubmit(data: guideStepsSchemaType) {
    setProcessingStatus(true);

    const requestBody: RequestInit = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    };

    mutate(requestBody);
  }

  async function updateGuide(
    requestBody: RequestInit,
  ): Promise<GuideStepModelFetched[]> {
    const response = await fetch(
      `http://localhost:3333/api/update-guide-progress/${guide.id}`,
      requestBody,
    );

    const body: ApiResponse<GuideStepModelFetched[]> = await response.json();

    if (!body.success) {
      throw new ApiError(response.status, body.error.message);
    }

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return body.data;
  }

  return (
    <div className="relative">
      <form
        id="guide-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-[50px]"
      >
        {fields.map((step: GuideStepModelFetched, index) => {
          return (
            <StepCard key={index} stepIndex={index} step={step} form={form} />
          );
        })}
      </form>
      <div className="mt-[50px] sticky left-[0] bottom-[50px] z-[9999]">
        {form.formState.errors.root?.serverError && (
          <RedAlert
            title={'Something went wrong'}
            message={form.formState.errors.root?.serverError.message as string}
          />
        )}
      </div>
    </div>
  );
}