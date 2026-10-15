import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { FilterXIcon, LucideCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useContext } from 'react';
import { ParamsContext } from '@/context/ParamsContext';

export function ResetFiltersButton() {
  const { resetParams } = useContext(ParamsContext);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="lg" variant="destructive" onClick={() => resetParams()}>
          <FilterXIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Reset Filters</TooltipContent>
    </Tooltip>
  );
}
