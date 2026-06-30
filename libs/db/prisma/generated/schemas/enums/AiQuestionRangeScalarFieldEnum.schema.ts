import * as z from 'zod';

export const AiQuestionRangeScalarFieldEnumSchema = z.enum(['id', 'question', 'aiQuestionsId', 'start', 'end', 'answer'])

export type AiQuestionRangeScalarFieldEnum = z.infer<typeof AiQuestionRangeScalarFieldEnumSchema>;