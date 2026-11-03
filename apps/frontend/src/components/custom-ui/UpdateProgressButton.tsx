import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Button, buttonVariants } from '../ui/button';
import { LucideCheck } from 'lucide-react';
import { ReactNode } from 'react';
import { useFormProcessingContext } from '../../context/FormProcessor';
import { VariantProps } from 'class-variance-authority';

export function UpdateProgressButton({
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
                    form="guide-form"
                    type="submit"
                    size="icon-sm"
                    variant={variant}
                    disabled={processingStatus}
                    className={className}
                >
                    {children && <span className="mr-2">{children}</span>}
                    <LucideCheck />
                </Button>
            </TooltipTrigger>
            <TooltipContent>Update Progress</TooltipContent>
        </Tooltip>
    );
}
