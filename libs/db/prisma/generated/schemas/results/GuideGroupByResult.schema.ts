import * as z from 'zod';
export const GuideGroupByResultSchema = z.array(z.object({
  id: z.string(),
  prompt: z.string(),
  userId: z.string(),
  title: z.string(),
  description: z.string(),
  questions: z.unknown(),
  answeredQuestions: z.unknown(),
  externalAiQuestionsStatus: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    prompt: z.number(),
    user: z.number(),
    userId: z.number(),
    title: z.number(),
    description: z.number(),
    steps: z.number(),
    questions: z.number(),
    answeredQuestions: z.number(),
    externalAiQuestionsStatus: z.number(),
    status: z.number(),
    progressStatus: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    prompt: z.string().nullable(),
    userId: z.string().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    prompt: z.string().nullable(),
    userId: z.string().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));