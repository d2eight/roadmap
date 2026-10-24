import * as z from 'zod';
export const GuideCreateResultSchema = z.object({
    id: z.string(),
    prompt: z.string(),
    externalAiQuestionsStatus: z.boolean(),
    user: z.unknown(),
    userId: z.string(),
    title: z.string(),
    description: z.string(),
    steps: z.array(z.unknown()),
    questions: z.unknown().optional(),
    answeredQuestions: z.unknown().optional(),
    status: z.unknown(),
    progressStatus: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date(),
});
