import { WidthItem } from 'shared-types';

export const pageSize = 9;

export const widthMap: WidthItem[] = [
    {
        label: '2xl',
        size: 1536,
    },
    {
        label: 'xl',
        size: 1280,
    },
    {
        label: 'lg',
        size: 1024,
    },
    {
        label: 'md',
        size: 768,
    },
    {
        label: 'sm',
        size: 640,
    },
];

export const toggleExplanationString =
    '              * - If you check this, at first, AI will generate a couple of\n' +
    '              questions, for deeper understanding of your goal. After you answer\n' +
    '              them - guide will be created.';
