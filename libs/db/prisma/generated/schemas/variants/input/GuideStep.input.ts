import * as z from 'zod';
import { GuidStepStatusSchema } from '../../enums/GuidStepStatus.schema';
// prettier-ignore
export const GuideStepInputSchema = z.object({
    id: z.string(),
    guide: z.unknown(),
    guideId: z.string(),
    title: z.string(),
    description: z.string(),
    status: GuidStepStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GuideStepInputType = z.infer<typeof GuideStepInputSchema>;
