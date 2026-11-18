import * as z from 'zod';
import { GuideStatusSchema } from '../../enums/GuideStatus.schema';
import { GuideProgressStatusSchema } from '../../enums/GuideProgressStatus.schema';
// prettier-ignore
export const GuideInputSchema = z.object({
    id: z.string(),
    prompt: z.string(),
    externalAiQuestionsStatus: z.boolean(),
    user: z.unknown(),
    userId: z.string(),
    title: z.string(),
    description: z.string(),
    steps: z.array(z.unknown()),
    questions: z.unknown().optional().nullable(),
    answeredQuestions: z.unknown().optional().nullable(),
    status: GuideStatusSchema,
    progressStatus: GuideProgressStatusSchema,
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
}).strict();

export type GuideInputType = z.infer<typeof GuideInputSchema>;
