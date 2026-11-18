import * as z from 'zod';
export const GuideStepUpsertResultSchema = z.object({
  id: z.number().int(),
  guide: z.unknown().optional(),
  guideId: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
});