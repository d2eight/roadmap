import * as z from 'zod';
export const GuideStepDeleteResultSchema = z.nullable(
    z.object({
        id: z.number().int(),
        guide: z.unknown(),
        guideId: z.string(),
        title: z.string(),
        description: z.string(),
        status: z.unknown(),
        createdAt: z.date(),
        updatedAt: z.date(),
    }),
);
