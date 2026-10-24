import { CardAction } from '@/components/ui/card';
import { DeleteGuideButton } from '@/components/custom-ui/DeleteGuideButton';

export function GuideCardAction() {
    return (
        <CardAction>
            <DeleteGuideButton />
        </CardAction>
    );
}
