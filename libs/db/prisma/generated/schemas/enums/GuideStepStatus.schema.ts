import * as z from 'zod';

export const GuideStepStatusSchema = z.enum(['PENDING', 'INWORK', 'DONE', 'REJECTED'])

export type GuideStepStatus = z.infer<typeof GuideStepStatusSchema>;