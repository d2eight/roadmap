import { ResetFiltersButton } from '@/components/custom-ui/ResetFiltersButton';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Filter } from 'lucide-react';
import { GuidesFilterComponent } from '@/components/custom-ui/GuidesFilterComponent';
import { Button } from '@/components/ui/button';
import { useContext } from 'react';
import { DialogContext } from '@/context/DialogContext';

export function OpenFiltersButton() {
  const { setDialogStatus, dialogStatus } = useContext(DialogContext);

  return (
    <Dialog open={dialogStatus} onOpenChange={setDialogStatus}>
      <DialogTrigger asChild>
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="lg" variant="outline">
                <Filter />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Open Filters</TooltipContent>
          </Tooltip>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-none! w-screen h-screen p-0">
        <GuidesFilterComponent />
      </DialogContent>
    </Dialog>
  );
}
