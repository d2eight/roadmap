import * as z from 'zod';
import { AiQuestionABCD_AnswersSchema } from '../../enums/AiQuestionABCD_Answers.schema';
// prettier-ignore
export const AiQuestionABCDResultSchema = z.object({
    id: z.string(),
    question: z.string(),
    aiQuestions: z.unknown(),
    aiQuestionsId: z.string(),
    A: z.string(),
    B: z.string(),
    C: z.string(),
    D: z.string(),
    answer: AiQuestionABCD_AnswersSchema.nullable(),
    customAnswer: z.string().nullable()
}).strict();

export type AiQuestionABCDResultType = z.infer<typeof AiQuestionABCDResultSchema>;
