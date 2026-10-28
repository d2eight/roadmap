'use client';

import { useGuideContext } from '@/context/GuideContext';
import {
    Item,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from '@/components/ui/item';
import { LucideCornerDownRight } from 'lucide-react';

export function GuideCardStep() {
    const { currentStep } = useGuideContext();

    if (!currentStep) {
        return null;
    }

    return (
        <Item variant="muted">
            <ItemMedia variant="icon">
                <LucideCornerDownRight />
            </ItemMedia>
            <ItemContent>
                <ItemTitle>{currentStep.title}</ItemTitle>
                <ItemDescription className="line-clamp-4">
                    {currentStep.description}
                </ItemDescription>
            </ItemContent>
        </Item>
    );
}
