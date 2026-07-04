import * as z from 'zod';
import { GuideStatusSchema } from '../../enums/GuideStatus.schema';
// prettier-ignore
export const GuideModelSchema = z.object({
    id: z.string(),
    prompt: z.string(),
    user: z.unknown(),
    userId: z.string(),
    title: z.string(),
    description: z.string(),
    steps: z.array(z.unknown()),
    questions: z.unknown().nullable(),
    answeredQuestions: z.unknown().nullable(),
    externalAiQuestionsStatus: z.boolean(),
    status: GuideStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GuidePureType = z.infer<typeof GuideModelSchema>;
