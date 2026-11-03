'use client';

import { Card } from '../ui/card';
import { GuideCardHeader } from './GuideCardHeader';
import { GuideCardContent } from './GuideCardContent';
import { GuideCardFooter } from './GuideCardFooter';

export function GuideCard() {
    return (
        <Card className="flex flex-col justify-between">
            <GuideCardHeader />
            <GuideCardContent />
            <GuideCardFooter />
        </Card>
    );
}
