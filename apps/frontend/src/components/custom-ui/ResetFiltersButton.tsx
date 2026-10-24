import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { FilterXIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParamsContext } from '@/context/ParamsContext';

export function ResetFiltersButton() {
    const { resetParams } = useParamsContext();

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    size="lg"
                    variant="destructive"
                    onClick={() => resetParams()}
                >
                    <FilterXIcon />
                </Button>
            </TooltipTrigger>
            <TooltipContent>Reset Filters</TooltipContent>
        </Tooltip>
    );
}
