import { GuideProgressStatus } from 'database/enums';
import { ToggleGroupItem } from '@/components/ui/toggle-group';
import { GuideProgressBadge } from '@/components/custom-ui/GuideProgressBadge';
import { LucideCheck } from 'lucide-react';

export function FilterProgressButton({
    status,
    isActive,
}: {
    status: GuideProgressStatus;
    isActive: boolean;
}) {
    return (
        <ToggleGroupItem
            className="hover:bg-transparent bg-transparent! p-0"
            value={status}
        >
            <GuideProgressBadge
                className="w-[100px] h-[35px]"
                progressStatus={status}
            >
                {isActive && <LucideCheck />}
            </GuideProgressBadge>
        </ToggleGroupItem>
    );
}
