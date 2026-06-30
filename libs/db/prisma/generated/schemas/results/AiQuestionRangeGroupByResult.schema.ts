import * as z from 'zod';
export const AiQuestionRangeGroupByResultSchema = z.array(z.object({
  id: z.string(),
  question: z.string(),
  aiQuestionsId: z.string(),
  start: z.number().int(),
  end: z.number().int(),
  answer: z.number().int(),
  _count: z.object({
    id: z.number(),
    question: z.number(),
    aiQuestions: z.number(),
    aiQuestionsId: z.number(),
    start: z.number(),
    end: z.number(),
    answer: z.number()
  }).optional(),
  _sum: z.object({
    start: z.number().nullable(),
    end: z.number().nullable(),
    answer: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    start: z.number().nullable(),
    end: z.number().nullable(),
    answer: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    question: z.string().nullable(),
    aiQuestionsId: z.string().nullable(),
    start: z.number().int().nullable(),
    end: z.number().int().nullable(),
    answer: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    question: z.string().nullable(),
    aiQuestionsId: z.string().nullable(),
    start: z.number().int().nullable(),
    end: z.number().int().nullable(),
    answer: z.number().int().nullable()
  }).nullable().optional()
}));