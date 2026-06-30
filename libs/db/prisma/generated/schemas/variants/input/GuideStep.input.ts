import * as z from 'zod';
// prettier-ignore
export const GuideStepInputSchema = z.object({
    id: z.string(),
    guide: z.unknown(),
    guideId: z.string(),
    title: z.string(),
    description: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GuideStepInputType = z.infer<typeof GuideStepInputSchema>;
