import * as z from 'zod';
// prettier-ignore
export const AiQuestionRangeInputSchema = z.object({
    id: z.string(),
    question: z.string(),
    aiQuestions: z.unknown(),
    aiQuestionsId: z.string(),
    start: z.number().int(),
    end: z.number().int(),
    answer: z.number().int().optional().nullable()
}).strict();

export type AiQuestionRangeInputType = z.infer<typeof AiQuestionRangeInputSchema>;
