'use client';

import {
    LucideCircleCheck,
    LucideCircleDashed,
    LucideCircleFadingArrowUp,
    LucideXCircle,
} from 'lucide-react';
import { GuideStepStatus } from 'database/enums';
import { ToggleGroupItem } from '@/components/ui/toggle-group';

export function StepStatusButton({
    status,
    className,
}: {
    status: GuideStepStatus;
    className?: string;
}) {
    switch (status) {
        case 'PENDING': {
            return (
                <ToggleGroupItem
                    variant="secondary"
                    value="PENDING"
                    className={className}
                >
                    <div className="w-full h-full flex items-center justify-center gap-1">
                        <span className="hidden xl:block">Pending</span>
                        <LucideCircleDashed />
                    </div>
                </ToggleGroupItem>
            );
        }
        case 'INWORK': {
            return (
                <ToggleGroupItem
                    className={className}
                    value="INWORK"
                    variant="inwork"
                >
                    <div className="w-full h-full flex items-center justify-center gap-1">
                        <span className="hidden xl:block">In work</span>
                        <LucideCircleFadingArrowUp color="#A85D00" />
                    </div>
                </ToggleGroupItem>
            );
        }
        case 'REJECTED': {
            return (
                <ToggleGroupItem
                    className={className}
                    variant="destructive"
                    value="REJECTED"
                >
                    <div className="w-full h-full flex items-center justify-center gap-1">
                        <span className="hidden xl:block">Reject</span>
                        <LucideXCircle />
                    </div>
                </ToggleGroupItem>
            );
        }
        case 'DONE': {
            return (
                <ToggleGroupItem
                    className={className}
                    variant="success"
                    value="DONE"
                >
                    <div className="w-full h-full flex items-center justify-center gap-1">
                        <span className="hidden xl:block">Done</span>
                        <LucideCircleCheck />
                    </div>
                </ToggleGroupItem>
            );
        }
    }
}
