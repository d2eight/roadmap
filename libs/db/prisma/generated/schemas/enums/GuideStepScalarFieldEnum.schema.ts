import * as z from 'zod';

export const GuideStepScalarFieldEnumSchema = z.enum(['id', 'guideId', 'title', 'description', 'status', 'createdAt', 'updatedAt'])

export type GuideStepScalarFieldEnum = z.infer<typeof GuideStepScalarFieldEnumSchema>;