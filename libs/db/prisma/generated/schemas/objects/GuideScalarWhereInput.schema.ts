import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { EnumGuideStatusFilterObjectSchema as EnumGuideStatusFilterObjectSchema } from './EnumGuideStatusFilter.schema';
import { GuideStatusSchema } from '../enums/GuideStatus.schema';
import { EnumGuideProgressStatusFilterObjectSchema as EnumGuideProgressStatusFilterObjectSchema } from './EnumGuideProgressStatusFilter.schema';
import { GuideProgressStatusSchema } from '../enums/GuideProgressStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

const guidescalarwhereinputSchema = z
    .object({
        AND: z
            .union([
                z.lazy(() => GuideScalarWhereInputObjectSchema),
                z.lazy(() => GuideScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => GuideScalarWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => GuideScalarWhereInputObjectSchema),
                z.lazy(() => GuideScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        prompt: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        externalAiQuestionsStatus: z
            .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
            .optional(),
        userId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        title: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        description: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        questions: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
        answeredQuestions: z
            .lazy(() => JsonNullableFilterObjectSchema)
            .optional(),
        status: z
            .union([
                z.lazy(() => EnumGuideStatusFilterObjectSchema),
                GuideStatusSchema,
            ])
            .optional(),
        progressStatus: z
            .union([
                z.lazy(() => EnumGuideProgressStatusFilterObjectSchema),
                GuideProgressStatusSchema,
            ])
            .optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
            .optional(),
    })
    .strict();
export const GuideScalarWhereInputObjectSchema: z.ZodType<Prisma.GuideScalarWhereInput> =
    guidescalarwhereinputSchema as unknown as z.ZodType<Prisma.GuideScalarWhereInput>;
export const GuideScalarWhereInputObjectZodSchema = guidescalarwhereinputSchema;
