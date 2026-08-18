import { Controller, UseFormReturn } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { StepStatusButton } from '@/components/custom-ui/CardStepStatusButton';
import { Field, FieldContent, FieldLabel, FieldTitle } from '@/components/ui/field';
import { GuideStepStatus } from 'database/enums';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { GuideStepModelFetched, guideStepsSchemaType } from 'shared-types';

export function StepRadioGroup({
  form,
  stepIndex,
}: {
  form: UseFormReturn<guideStepsSchemaType>;
  stepIndex: number;
}) {
  const stepStatusEnum = Object.values(GuideStepStatus);
  return (
    <Controller
      name={`steps.${stepIndex}`}
      control={form.control}
      render={({ field, fieldState }) => {
        return (
          <ToggleGroup
            value={field.value.status}
            className="w-full justify-between gap-[0]"
            type="single"
            onValueChange={(value) => {
              const newValue = value ? value : GuideStepStatus.PENDING;
              field.onChange({
                ...field.value,
                status: newValue,
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
          </ToggleGroup>
        );
      }}
    />
  );
}
