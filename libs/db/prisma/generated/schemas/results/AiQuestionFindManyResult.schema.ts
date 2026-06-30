import * as z from 'zod';
export const AiQuestionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  question: z.string(),
  aiQuestions: z.unknown(),
  aiQuestionsId: z.string(),
  answer: z.string().optional()
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