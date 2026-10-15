import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { CreateGuideButton } from '@/components/custom-ui/CreateGuideButton';
import { Button } from '@/components/ui/button';
import { LucideCheck } from 'lucide-react';
import { useWindowWidth } from '@/utils/useWindowWidth';
import { CardAction } from '@/components/ui/card';
import { useContext } from 'react';
import { DialogContext } from '@/context/DialogContext';

export function ApplyFiltersButton() {
  const dialog = useContext(DialogContext);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="w-full xl:w-10"
          form="filter-form"
          type="submit"
          size="icon-lg"
          onClick={() => (dialog ? dialog.setDialogStatus(false) : null)}
        >
          <span className="xl:hidden mr-2">Accept</span>
          <LucideCheck />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Apply filters</TooltipContent>
    </Tooltip>
  );
}
