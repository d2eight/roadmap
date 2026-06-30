import * as z from 'zod';
export const AiQuestionCheckboxUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  question: z.string(),
  aiQuestions: z.unknown(),
  aiQuestionsId: z.string(),
  A: z.string(),
  B: z.string(),
  C: z.string(),
  D: z.string(),
  E: z.string(),
  F: z.string(),
  answer: z.array(z.unknown())
}));