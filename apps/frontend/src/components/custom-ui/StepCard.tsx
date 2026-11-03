import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { UseFormReturn } from 'react-hook-form';
import { StepRadioGroup } from './StepRadioGroup';
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
        <Card className="p-0 xl:pb-0 flex flex-row xl:flex-col justify-between">
            <CardHeader className="flex flex-col p-6 xl:pb-0 w-full">
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
            </CardHeader>
            <CardFooter className="h-auto min-h-50 xl:min-h-auto xl:max-w-full md:max-w-30 max-w-20 w-full px-0">
                <StepRadioGroup form={form} stepIndex={stepIndex} />
            </CardFooter>
        </Card>
    );
}
