import * as z from 'zod';
import { GuideStepStatusSchema } from '../../enums/GuideStepStatus.schema';
// prettier-ignore
export const GuideStepInputSchema = z.object({
    id: z.number().int(),
    guide: z.unknown(),
    guideId: z.string(),
    title: z.string(),
    description: z.string(),
    status: GuideStepStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GuideStepInputType = z.infer<typeof GuideStepInputSchema>;
