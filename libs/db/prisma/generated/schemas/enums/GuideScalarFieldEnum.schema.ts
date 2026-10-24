import * as z from 'zod';

export const GuideScalarFieldEnumSchema = z.enum([
    'id',
    'prompt',
    'externalAiQuestionsStatus',
    'userId',
    'title',
    'description',
    'questions',
    'answeredQuestions',
    'status',
    'progressStatus',
    'createdAt',
    'updatedAt',
]);

export type GuideScalarFieldEnum = z.infer<typeof GuideScalarFieldEnumSchema>;
