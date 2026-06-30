import * as z from 'zod';
export const GuideDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  prompt: z.string(),
  user: z.unknown(),
  userId: z.string(),
  title: z.string(),
  description: z.string(),
  steps: z.array(z.unknown()),
  questions: z.unknown().optional(),
  externalAiQuestionsStatus: z.boolean(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));