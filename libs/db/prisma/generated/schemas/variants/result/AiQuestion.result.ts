import * as z from 'zod';
// prettier-ignore
export const AiQuestionResultSchema = z.object({
    id: z.string(),
    question: z.string(),
    aiQuestions: z.unknown(),
    aiQuestionsId: z.string(),
    answer: z.string().nullable()
}).strict();

export type AiQuestionResultType = z.infer<typeof AiQuestionResultSchema>;
