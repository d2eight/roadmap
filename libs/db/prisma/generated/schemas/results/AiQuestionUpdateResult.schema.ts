import * as z from 'zod';
export const AiQuestionUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  question: z.string(),
  aiQuestions: z.unknown(),
  aiQuestionsId: z.string(),
  answer: z.string().optional()
}));