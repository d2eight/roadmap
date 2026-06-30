import * as z from 'zod';
export const AiQuestionsDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  guide: z.unknown(),
  guideId: z.string(),
  AiQuestionABCD: z.unknown().optional(),
  AiQuestionRange: z.unknown().optional(),
  AiQuestion: z.unknown().optional(),
  AiQuestionCheckbox: z.unknown().optional()
}));