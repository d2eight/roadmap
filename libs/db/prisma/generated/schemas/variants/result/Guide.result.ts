import * as z from 'zod';
import { GuideStatusSchema } from '../../enums/GuideStatus.schema';
import { GuideProgressStatusSchema } from '../../enums/GuideProgressStatus.schema';
// prettier-ignore
export const GuideResultSchema = z.object({
    id: z.string(),
    prompt: z.string(),
    user: z.unknown(),
    userId: z.string(),
    title: z.string(),
    description: z.string(),
    steps: z.array(z.unknown()),
    questions: z.unknown().nullable(),
    answeredQuestions: z.unknown().nullable(),
    status: GuideStatusSchema,
    progressStatus: GuideProgressStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GuideResultType = z.infer<typeof GuideResultSchema>;
