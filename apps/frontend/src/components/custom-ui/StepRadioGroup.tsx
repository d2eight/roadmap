import { Controller, UseFormReturn } from 'react-hook-form';
import { StepStatusButton } from './CardStepStatusButton';
import { GuideStepStatus } from 'database/enums';
import { ToggleGroup } from '../ui/toggle-group';
import { guideStepsSchemaType } from 'shared-types';

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
                        className="w-full h-full flex-col xl:flex-row gap-0"
                        type="single"
                        onValueChange={(value) => {
                            const newValue = value
                                ? value
                                : GuideStepStatus.PENDING;
                            field.onChange({
                                ...field.value,
                                status: newValue,
                            });
                        }}
                    >
                        {stepStatusEnum.map((status, index) => {
                            return (
                                <StepStatusButton
                                    className="w-full rounded-none flex-1 p-1.25"
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
