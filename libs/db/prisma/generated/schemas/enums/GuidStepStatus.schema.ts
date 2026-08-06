import * as z from 'zod';

export const GuidStepStatusSchema = z.enum(['PENDING', 'INWORK', 'DONE', 'REJECTED'])

export type GuidStepStatus = z.infer<typeof GuidStepStatusSchema>;