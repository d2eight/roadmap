import * as z from 'zod';
// prettier-ignore
export const AiQuestionModelSchema = z.object({
    id: z.string(),
    question: z.string(),
    aiQuestions: z.unknown(),
    aiQuestionsId: z.string(),
    answer: z.string().nullable()
}).strict();

export type AiQuestionPureType = z.infer<typeof AiQuestionModelSchema>;
