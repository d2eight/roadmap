import * as z from 'zod';

export const GuideProgressStatusSchema = z.enum(['PENDING', 'INWORK', 'DONE'])

export type GuideProgressStatus = z.infer<typeof GuideProgressStatusSchema>;