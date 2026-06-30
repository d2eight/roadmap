import * as z from 'zod';
// prettier-ignore
export const AiQuestionInputSchema = z.object({
    id: z.string(),
    question: z.string(),
    aiQuestions: z.unknown(),
    aiQuestionsId: z.string(),
    answer: z.string().optional().nullable()
}).strict();

export type AiQuestionInputType = z.infer<typeof AiQuestionInputSchema>;
