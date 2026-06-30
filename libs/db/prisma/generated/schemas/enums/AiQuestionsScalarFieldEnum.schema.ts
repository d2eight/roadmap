import * as z from 'zod';

export const AiQuestionsScalarFieldEnumSchema = z.enum(['id', 'guideId'])

export type AiQuestionsScalarFieldEnum = z.infer<typeof AiQuestionsScalarFieldEnumSchema>;