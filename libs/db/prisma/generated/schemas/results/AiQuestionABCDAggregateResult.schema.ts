import * as z from 'zod';
export const AiQuestionABCDAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    question: z.number(),
    aiQuestions: z.number(),
    aiQuestionsId: z.number(),
    A: z.number(),
    B: z.number(),
    C: z.number(),
    D: z.number(),
    answer: z.number(),
    customAnswer: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    question: z.string().nullable(),
    aiQuestionsId: z.string().nullable(),
    A: z.string().nullable(),
    B: z.string().nullable(),
    C: z.string().nullable(),
    D: z.string().nullable(),
    customAnswer: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    question: z.string().nullable(),
    aiQuestionsId: z.string().nullable(),
    A: z.string().nullable(),
    B: z.string().nullable(),
    C: z.string().nullable(),
    D: z.string().nullable(),
    customAnswer: z.string().nullable()
  }).nullable().optional()});