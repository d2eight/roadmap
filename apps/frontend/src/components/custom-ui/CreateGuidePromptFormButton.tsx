'use client';

import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';
import { useFormProcessingContext } from '@/context/FormProcessor';

export function CreateGuidePromptFormButton({
    children = 'Create guide',
    className,
}: {
    children?: ReactNode;
    className?: string;
}) {
    const { processingStatus } = useFormProcessingContext();

    return (
        <Button
            className={className}
            type="submit"
            form="prompt-form"
            disabled={processingStatus}
        >
            {children}
        </Button>
    );
}
