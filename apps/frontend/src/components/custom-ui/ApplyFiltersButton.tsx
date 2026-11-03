import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';
import { LucideCheck } from 'lucide-react';

export function ApplyFiltersButton() {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    className="w-full xl:w-10"
                    form="filter-form"
                    type="submit"
                    size="icon-lg"
                >
                    <span className="xl:hidden mr-2">Accept</span>
                    <LucideCheck />
                </Button>
            </TooltipTrigger>
            <TooltipContent>Apply filters</TooltipContent>
        </Tooltip>
    );
}
