'use client';

import { useGuideContext } from '@/context/GuideContext';
import {
    Item,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from '@/components/ui/item';
import { Trophy } from 'lucide-react';

export function GuideCardDoneInfo() {
    const { guide } = useGuideContext();
    const updatedAt = Number(new Date(guide.updatedAt));
    const createdAt = Number(new Date(guide.createdAt));

    let diffMs = Math.abs(updatedAt - createdAt);

    const msInMinute = 1000 * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;

    const days = Math.floor(diffMs / msInDay);
    diffMs %= msInDay;

    const hours = Math.floor(diffMs / msInHour);
    diffMs %= msInHour;

    const minutes = Math.floor(diffMs / msInMinute);

    return (
        <Item variant="outline">
            <ItemMedia variant="icon">
                <Trophy color="#df8a2a" />
            </ItemMedia>
            <ItemContent>
                <ItemTitle>Congratulations</ItemTitle>
                <div className="flex">
                    <ItemDescription className="flex">
                        {days > 0 && (
                            <span className="mr-1">
                                {days} {days > 1 ? 'days' : 'day'}
                            </span>
                        )}
                        {hours > 0 && (
                            <span className="mr-1">
                                {hours} {hours > 1 ? 'hours' : 'hour'}
                            </span>
                        )}
                        <span className="mr-1">
                            {minutes} {minutes > 1 ? 'minutes' : 'minute'}
                        </span>
                        <span>- took you to complete this guide</span>
                    </ItemDescription>
                </div>
            </ItemContent>
        </Item>
    );
}
