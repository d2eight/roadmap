import * as z from 'zod';

export const GuideStatusSchema = z.enum([
    'INIT',
    'QUESTIONS_GENERATION',
    'QUESTIONS_GENERATED',
    'GUIDE_GENERATION',
    'GUIDE_GENERATED',
    'FAILED',
]);

export type GuideStatus = z.infer<typeof GuideStatusSchema>;
