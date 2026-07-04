import * as z from 'zod';
import { GuideStatusSchema } from '../../enums/GuideStatus.schema';
// prettier-ignore
export const GuideInputSchema = z.object({
    id: z.string(),
    prompt: z.string(),
    user: z.unknown(),
    userId: z.string(),
    title: z.string(),
    description: z.string(),
    steps: z.array(z.unknown()),
    questions: z.unknown().optional().nullable(),
    answeredQuestions: z.unknown().optional().nullable(),
    externalAiQuestionsStatus: z.boolean(),
    status: GuideStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GuideInputType = z.infer<typeof GuideInputSchema>;
