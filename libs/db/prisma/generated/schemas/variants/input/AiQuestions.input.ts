import * as z from 'zod';
// prettier-ignore
export const AiQuestionsInputSchema = z.object({
    id: z.string(),
    guide: z.unknown(),
    guideId: z.string(),
    AiQuestionABCD: z.unknown().optional().nullable(),
    AiQuestionRange: z.unknown().optional().nullable(),
    AiQuestion: z.unknown().optional().nullable(),
    AiQuestionCheckbox: z.unknown().optional().nullable()
}).strict();

export type AiQuestionsInputType = z.infer<typeof AiQuestionsInputSchema>;
