import * as z from 'zod';
import { AiQuestionCheckbox_AnswersSchema } from '../../enums/AiQuestionCheckbox_Answers.schema';
// prettier-ignore
export const AiQuestionCheckboxResultSchema = z.object({
    id: z.string(),
    question: z.string(),
    aiQuestions: z.unknown(),
    aiQuestionsId: z.string(),
    A: z.string(),
    B: z.string(),
    C: z.string(),
    D: z.string(),
    E: z.string(),
    F: z.string(),
    answer: AiQuestionCheckbox_AnswersSchema.array()
}).strict();

export type AiQuestionCheckboxResultType = z.infer<typeof AiQuestionCheckboxResultSchema>;
