import * as z from 'zod';
// prettier-ignore
export const AiQuestionsModelSchema = z.object({
    id: z.string(),
    guide: z.unknown(),
    guideId: z.string(),
    AiQuestionABCD: z.unknown().nullable(),
    AiQuestionRange: z.unknown().nullable(),
    AiQuestion: z.unknown().nullable(),
    AiQuestionCheckbox: z.unknown().nullable()
}).strict();

export type AiQuestionsPureType = z.infer<typeof AiQuestionsModelSchema>;
