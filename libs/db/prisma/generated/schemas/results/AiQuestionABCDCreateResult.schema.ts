import * as z from 'zod';
export const AiQuestionABCDCreateResultSchema = z.object({
  id: z.string(),
  question: z.string(),
  aiQuestions: z.unknown(),
  aiQuestionsId: z.string(),
  A: z.string(),
  B: z.string(),
  C: z.string(),
  D: z.string(),
  answer: z.unknown().optional(),
  customAnswer: z.string().optional()
});