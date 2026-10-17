'use client';

import { Button } from '@/components/ui/button';
import { ReactNode, useContext } from 'react';
import { FormProcessingContext } from '@/components/wrappers/FormProcessor';

export function CreateGuidePromptFormButton({
  children = 'Create guide',
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const { processingStatus } = useContext(FormProcessingContext);

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
