import {
  Card, CardAction,
  CardDescription, CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { GuideStepModel } from '../../../../../libs/db/generated/prisma/models/GuideStep';
import { JSX } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { StepRadioGroup } from '@/components/custom-ui/StepRadioGroup';
import { GuideStepModelFetched, guideStepsSchemaType } from 'shared-types';

export function StepCard({
  step,
  form,
  stepIndex,
}: {
  step: GuideStepModelFetched;
  form: UseFormReturn<guideStepsSchemaType>;
  stepIndex: number;
}) {
  return (
    <Card className="pb-0">
      <CardHeader>
        <CardTitle>{step.title}</CardTitle>
        <CardDescription>{step.description}</CardDescription>
      </CardHeader>
      <CardFooter className="px-0">
        <StepRadioGroup form={form} stepIndex={stepIndex} />
      </CardFooter>
    </Card>
  );
}
