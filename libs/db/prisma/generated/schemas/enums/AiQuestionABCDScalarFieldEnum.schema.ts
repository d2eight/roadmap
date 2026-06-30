import * as z from 'zod';

export const AiQuestionABCDScalarFieldEnumSchema = z.enum(['id', 'question', 'aiQuestionsId', 'A', 'B', 'C', 'D', 'answer', 'customAnswer'])

export type AiQuestionABCDScalarFieldEnum = z.infer<typeof AiQuestionABCDScalarFieldEnumSchema>;