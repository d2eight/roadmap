import * as z from 'zod';

export const AiQuestionCheckbox_AnswersSchema = z.enum(['A', 'B', 'C', 'D', 'E', 'F'])

export type AiQuestionCheckbox_Answers = z.infer<typeof AiQuestionCheckbox_AnswersSchema>;