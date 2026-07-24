import * as z from 'zod';
// prettier-ignore
export const GuideStepResultSchema = z.object({
    id: z.string(),
    guide: z.unknown(),
    guideId: z.string(),
    title: z.string(),
    description: z.string(),
    status: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GuideStepResultType = z.infer<typeof GuideStepResultSchema>;
