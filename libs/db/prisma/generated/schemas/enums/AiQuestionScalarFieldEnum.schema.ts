import * as z from 'zod';

export const AiQuestionScalarFieldEnumSchema = z.enum(['id', 'question', 'aiQuestionsId', 'answer'])

export type AiQuestionScalarFieldEnum = z.infer<typeof AiQuestionScalarFieldEnumSchema>;