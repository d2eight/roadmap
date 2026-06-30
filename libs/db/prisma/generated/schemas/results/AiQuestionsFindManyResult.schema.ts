import * as z from 'zod';
export const AiQuestionsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  guide: z.unknown(),
  guideId: z.string(),
  AiQuestionABCD: z.unknown().optional(),
  AiQuestionRange: z.unknown().optional(),
  AiQuestion: z.unknown().optional(),
  AiQuestionCheckbox: z.unknown().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});