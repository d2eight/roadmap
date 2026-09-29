'use client';

import { useContext, useEffect } from 'react';
import { GuideContext } from '@/context/GuideContext';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ApiError,
  ApiErrors,
  ApiResponse,
  ApiResponseSuccess,
  GuideModelWithRelations,
  guideQuestionsSchemaType,
  GuideStepModelFetched,
  GuideStepsFormErrors,
  guideStepsSchema,
  guideStepsSchemaType,
} from 'shared-types';
import { StepCard } from '@/components/custom-ui/StepCard';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormProcessingContext } from '@/components/wrappers/FormProcessor';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { RedAlert } from '@/components/custom-ui/RedAlert';
import { FieldSet } from '@/components/ui/field';
import { updateGuideProgress } from '@/utils/guideApiActions';
import { useClientHandleApiError } from '@/utils/apiErrorsHandler';

export function GuideForm() {
  const { guide } = useContext(GuideContext);
  const { processingStatus, setProcessingStatus } = useContext(
    FormProcessingContext,
  );
  const queryClient = useQueryClient();
  const { clientHandleApiError } = useClientHandleApiError();

  const initialSteps = guide.steps;

  const form = useForm<guideStepsSchemaType>({
    resolver: zodResolver(guideStepsSchema),
    defaultValues: {
      steps: initialSteps,
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: 'steps',
  });

  const { mutate } = useMutation<
    ApiResponseSuccess<GuideModelWithRelations>,
    ApiErrors<GuideStepsFormErrors>,
    RequestInit
  >({
    mutationFn: updateGuide,
    onSuccess: (result) => {
      setProcessingStatus(false);
      toast.success('Successfully updated your progress');
      queryClient.setQueryData(['guide', guide.id], result.data);
    },
    onError: (error) => {
      setProcessingStatus(false);
      clientHandleApiError<guideStepsSchemaType>(error, form);
    },
  });

  function onSubmit(data: guideStepsSchemaType) {
    const stepsToUpdate: GuideStepModelFetched[] = data.steps.filter((step) => {
      const initialStep = initialSteps.find((item) => item.id === step.id);
      if (initialStep && initialStep.status !== step.status) {
        return step;
      }
    });

    if (stepsToUpdate.length > 0) {
      setProcessingStatus(true);

      const requestBody: RequestInit = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          steps: stepsToUpdate,
        }),
      };

      return mutate(requestBody);
    }

    toast.info('You have already updated your progress!');
  }

  async function updateGuide(requestBody: RequestInit) {
    const result = await updateGuideProgress(guide.id, requestBody);

    if (result.isErr()) {
      throw result.error;
    }

    return result.value;
  }

  return (
    <div className="relative">
      <form
        id="guide-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-[50px]"
      >
        <FieldSet disabled={processingStatus}>
          {fields.map((step: GuideStepModelFetched, index) => {
            return (
              <StepCard key={index} stepIndex={index} step={step} form={form} />
            );
          })}
        </FieldSet>
      </form>
      <div className="mt-[50px] sticky left-[0] bottom-[50px] z-[9999]">
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
