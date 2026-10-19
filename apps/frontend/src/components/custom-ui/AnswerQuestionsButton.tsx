import { DeleteGuideButton } from '@/components/custom-ui/DeleteGuideButton';
import { RecreateGuideMenu } from '@/components/custom-ui/RecreateGuideMenu';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button, buttonVariants } from '@/components/ui/button';
import { LucideCheck } from 'lucide-react';
import { ReactNode, useContext } from 'react';
import { FormProcessingContext } from '@/components/wrappers/FormProcessor';
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
  const { processingStatus } = useContext(FormProcessingContext);
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
