import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Button, buttonVariants } from '../ui/button';
import { ReactNode } from 'react';
import { useFormProcessingContext } from '../../context/FormProcessor';
import { VariantProps } from 'class-variance-authority';

export function AnswerQuestionsButton({
    children,
    className,
    variant = 'default',
}: {
    children?: ReactNode;
    className?: string;
    variant?: VariantProps<typeof buttonVariants>['variant'];
}) {
    const { processingStatus } = useFormProcessingContext();
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    form="guide-questions"
                    type="submit"
                    disabled={processingStatus}
                    size="icon-sm"
                    variant={variant}
                    className={className}
                >
                    {children}
                </Button>
            </TooltipTrigger>
            <TooltipContent>Send answers</TooltipContent>
        </Tooltip>
    );
}
