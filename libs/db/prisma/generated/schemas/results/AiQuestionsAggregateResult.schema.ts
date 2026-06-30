import * as z from 'zod';
export const AiQuestionsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    guide: z.number(),
    guideId: z.number(),
    AiQuestionABCD: z.number(),
    AiQuestionRange: z.number(),
    AiQuestion: z.number(),
    AiQuestionCheckbox: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    guideId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    guideId: z.string().nullable()
  }).nullable().optional()});