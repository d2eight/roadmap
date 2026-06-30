import * as z from 'zod';
export const AiQuestionCreateResultSchema = z.object({
  id: z.string(),
  question: z.string(),
  aiQuestions: z.unknown(),
  aiQuestionsId: z.string(),
  answer: z.string().optional()
});