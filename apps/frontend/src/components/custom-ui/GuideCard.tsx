'use client';

import { Card } from '../ui/card';
import { GuideCardHeader } from '@/components/custom-ui/GuideCardHeader';
import { GuideCardContent } from '@/components/custom-ui/GuideCardContent';
import { GuideCardFooter } from '@/components/custom-ui/GuideCardFooter';

export function GuideCard() {
    return (
        <Card className="flex flex-col justify-between">
            <GuideCardHeader />
            <GuideCardContent />
            <GuideCardFooter />
        </Card>
    );
}
