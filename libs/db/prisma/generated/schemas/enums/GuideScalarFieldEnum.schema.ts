import * as z from 'zod';

export const GuideScalarFieldEnumSchema = z.enum(['id', 'prompt', 'userId', 'title', 'description', 'questions', 'answeredQuestions', 'externalAiQuestionsStatus', 'status', 'createdAt', 'updatedAt'])

export type GuideScalarFieldEnum = z.infer<typeof GuideScalarFieldEnumSchema>;