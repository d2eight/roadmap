import * as z from 'zod';
export const AiQuestionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  question: z.string(),
  aiQuestionsId: z.string(),
  answer: z.string(),
  _count: z.object({
    id: z.number(),
    question: z.number(),
    aiQuestions: z.number(),
    aiQuestionsId: z.number(),
    answer: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    question: z.string().nullable(),
    aiQuestionsId: z.string().nullable(),
    answer: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    question: z.string().nullable(),
    aiQuestionsId: z.string().nullable(),
    answer: z.string().nullable()
  }).nullable().optional()
}));