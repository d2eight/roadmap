import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { GuideScalarRelationFilterObjectSchema as GuideScalarRelationFilterObjectSchema } from './GuideScalarRelationFilter.schema';
import { GuideWhereInputObjectSchema as GuideWhereInputObjectSchema } from './GuideWhereInput.schema';
import { AiQuestionABCDNullableScalarRelationFilterObjectSchema as AiQuestionABCDNullableScalarRelationFilterObjectSchema } from './AiQuestionABCDNullableScalarRelationFilter.schema';
import { AiQuestionABCDWhereInputObjectSchema as AiQuestionABCDWhereInputObjectSchema } from './AiQuestionABCDWhereInput.schema';
import { AiQuestionRangeNullableScalarRelationFilterObjectSchema as AiQuestionRangeNullableScalarRelationFilterObjectSchema } from './AiQuestionRangeNullableScalarRelationFilter.schema';
import { AiQuestionRangeWhereInputObjectSchema as AiQuestionRangeWhereInputObjectSchema } from './AiQuestionRangeWhereInput.schema';
import { AiQuestionNullableScalarRelationFilterObjectSchema as AiQuestionNullableScalarRelationFilterObjectSchema } from './AiQuestionNullableScalarRelationFilter.schema';
import { AiQuestionWhereInputObjectSchema as AiQuestionWhereInputObjectSchema } from './AiQuestionWhereInput.schema';
import { AiQuestionCheckboxNullableScalarRelationFilterObjectSchema as AiQuestionCheckboxNullableScalarRelationFilterObjectSchema } from './AiQuestionCheckboxNullableScalarRelationFilter.schema';
import { AiQuestionCheckboxWhereInputObjectSchema as AiQuestionCheckboxWhereInputObjectSchema } from './AiQuestionCheckboxWhereInput.schema'

const aiquestionswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AiQuestionsWhereInputObjectSchema), z.lazy(() => AiQuestionsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AiQuestionsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AiQuestionsWhereInputObjectSchema), z.lazy(() => AiQuestionsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  guideId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  guide: z.union([z.lazy(() => GuideScalarRelationFilterObjectSchema), z.lazy(() => GuideWhereInputObjectSchema)]).optional(),
  AiQuestionABCD: z.union([z.lazy(() => AiQuestionABCDNullableScalarRelationFilterObjectSchema), z.lazy(() => AiQuestionABCDWhereInputObjectSchema)]).optional(),
  AiQuestionRange: z.union([z.lazy(() => AiQuestionRangeNullableScalarRelationFilterObjectSchema), z.lazy(() => AiQuestionRangeWhereInputObjectSchema)]).optional(),
  AiQuestion: z.union([z.lazy(() => AiQuestionNullableScalarRelationFilterObjectSchema), z.lazy(() => AiQuestionWhereInputObjectSchema)]).optional(),
  AiQuestionCheckbox: z.union([z.lazy(() => AiQuestionCheckboxNullableScalarRelationFilterObjectSchema), z.lazy(() => AiQuestionCheckboxWhereInputObjectSchema)]).optional()
}).strict();
export const AiQuestionsWhereInputObjectSchema: z.ZodType<Prisma.AiQuestionsWhereInput> = aiquestionswhereinputSchema as unknown as z.ZodType<Prisma.AiQuestionsWhereInput>;
export const AiQuestionsWhereInputObjectZodSchema = aiquestionswhereinputSchema;
