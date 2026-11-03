import { CardHeader } from '../ui/card';
import { GuideCardTitle } from './GuideCardTitle';
import { GuideCardDescription } from './GuideCardDescription';
import { GuideCardAction } from './GuideCardAction';

export function GuideCardHeader() {
    return (
        <CardHeader>
            <GuideCardTitle />
            <GuideCardDescription />
            <GuideCardAction />
        </CardHeader>
    );
}
