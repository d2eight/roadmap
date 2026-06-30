import * as z from 'zod';

export const AiQuestionABCD_AnswersSchema = z.enum(['A', 'B', 'C', 'D', 'CUSTOM'])

export type AiQuestionABCD_Answers = z.infer<typeof AiQuestionABCD_AnswersSchema>;