import { Controller, UseFormReturn } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { StepStatusButton } from '@/components/custom-ui/CardStepStatusButton';
import { Field, FieldContent, FieldLabel, FieldTitle } from '@/components/ui/field';
import { GuidStepStatus } from '../../../../../libs/db/generated/prisma/enums';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { GuideStepModelFetched, guideStepsSchemaType } from 'shared-types';

export function StepRadioGroup({
  form,
  stepIndex,
}: {
  form: UseFormReturn<guideStepsSchemaType>;
  stepIndex: number;
}) {
  const stepStatusEnum = Object.values(GuidStepStatus);

  return (
    <Controller
      name={`steps.${stepIndex}`}
      control={form.control}
      render={({ field, fieldState }) => {
        return (
          <ToggleGroup
            value={field.value.status}
            // defaultValue={step.status}
            // name={field.name}
            className="w-full justify-between gap-[0]"
            type="single"
            onValueChange={(value) => {
              field.onChange({
                ...field.value,
                status: value,
              });
            }}
          >
            {stepStatusEnum.map((status, index) => {
              return (
                <StepStatusButton
                  className="rounded-[0] flex-1 p-[5px]"
                  key={index}
                  status={status}
                />
              );
            })}
            {/*<FieldLabel key="PENDING">*/}
            {/*  <Field>*/}
            {/*    <FieldContent>*/}
            {/*      <FieldTitle>Pending</FieldTitle>*/}
            {/*    </FieldContent>*/}
            {/*    <RadioGroupItem value="PENDING" />*/}
            {/*  </Field>*/}
            {/*</FieldLabel>*/}
            {/*<FieldLabel key="INWORK">*/}
            {/*  <Field>*/}
            {/*    <FieldContent>*/}
            {/*      <FieldTitle>In work</FieldTitle>*/}
            {/*    </FieldContent>*/}
            {/*    <RadioGroupItem value="INWORK" />*/}
            {/*  </Field>*/}
            {/*</FieldLabel>*/}
            {/*<FieldLabel key="DONE">*/}
            {/*  <Field>*/}
            {/*    <FieldContent>*/}
            {/*      <FieldTitle>Done</FieldTitle>*/}
            {/*    </FieldContent>*/}
            {/*    <RadioGroupItem value="DONE" />*/}
            {/*  </Field>*/}
            {/*</FieldLabel>*/}
            {/*<FieldLabel key="REJECTED">*/}
            {/*  <Field>*/}
            {/*    <FieldContent>*/}
            {/*      <FieldTitle>Rejected</FieldTitle>*/}
            {/*    </FieldContent>*/}
            {/*    <RadioGroupItem value="REJECTED" />*/}
            {/*  </Field>*/}
            {/*</FieldLabel>*/}
          </ToggleGroup>
        );
      }}
    />
  );
}
