'use client';

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { LucideCalendarDays } from 'lucide-react';

export function GuideDate({ guideDate }: { guideDate: Date }) {
    return (
        <Tooltip>
            <TooltipTrigger>
                <div className="flex w-full justify-between">
                    <div className="flex items-center gap-1">
                        <LucideCalendarDays size="18" />
                        {new Date(guideDate).toLocaleDateString()}
                    </div>
                </div>
            </TooltipTrigger>
            <TooltipContent>
                <p>Created at</p>
            </TooltipContent>
        </Tooltip>
    );
}
