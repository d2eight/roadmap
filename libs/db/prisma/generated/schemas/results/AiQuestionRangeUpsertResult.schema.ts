import * as z from 'zod';
export const AiQuestionRangeUpsertResultSchema = z.object({
  id: z.string(),
  question: z.string(),
  aiQuestions: z.unknown(),
  aiQuestionsId: z.string(),
  start: z.number().int(),
  end: z.number().int(),
  answer: z.number().int().optional()
});