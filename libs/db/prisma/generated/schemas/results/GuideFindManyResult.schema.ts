import * as z from 'zod';
export const GuideFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  prompt: z.string(),
  externalAiQuestionsStatus: z.boolean(),
  user: z.unknown(),
  userId: z.string(),
  title: z.string(),
  description: z.string(),
  steps: z.array(z.unknown()),
  questions: z.unknown().optional(),
  answeredQuestions: z.unknown().optional(),
  status: z.unknown(),
  progressStatus: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
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