import * as z from 'zod';
// prettier-ignore
export const AiQuestionRangeResultSchema = z.object({
    id: z.string(),
    question: z.string(),
    aiQuestions: z.unknown(),
    aiQuestionsId: z.string(),
    start: z.number().int(),
    end: z.number().int(),
    answer: z.number().int().nullable()
}).strict();

export type AiQuestionRangeResultType = z.infer<typeof AiQuestionRangeResultSchema>;
