import * as z from 'zod';

export const AiQuestionCheckboxScalarFieldEnumSchema = z.enum(['id', 'question', 'aiQuestionsId', 'A', 'B', 'C', 'D', 'E', 'F', 'answer'])

export type AiQuestionCheckboxScalarFieldEnum = z.infer<typeof AiQuestionCheckboxScalarFieldEnumSchema>;