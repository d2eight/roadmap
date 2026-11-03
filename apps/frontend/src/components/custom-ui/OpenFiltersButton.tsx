import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Filter } from 'lucide-react';
import { GuidesFilterComponent } from './GuidesFilterComponent';
import { Button } from '../ui/button';

export function OpenFiltersButton() {
    return (
        <Dialog>
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
