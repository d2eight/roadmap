import * as z from 'zod';
// prettier-ignore
export const GuideStepModelSchema = z.object({
    id: z.string(),
    guide: z.unknown(),
    guideId: z.string(),
    title: z.string(),
    description: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GuideStepPureType = z.infer<typeof GuideStepModelSchema>;
