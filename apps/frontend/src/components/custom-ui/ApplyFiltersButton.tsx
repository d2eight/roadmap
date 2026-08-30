import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { CreateGuideButton } from '@/components/custom-ui/CreateGuideButton';
import { Button } from '@/components/ui/button';
import { LucideCheck } from 'lucide-react';

export function ApplyFiltersButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button form="filter-form" type="submit" size="icon-lg">
          <LucideCheck />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Apply filters</TooltipContent>
    </Tooltip>
  );
}
