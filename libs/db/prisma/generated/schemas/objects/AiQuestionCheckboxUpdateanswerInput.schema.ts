import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionCheckbox_AnswersSchema } from '../enums/AiQuestionCheckbox_Answers.schema'

const makeSchema = () => z.object({
  set: AiQuestionCheckbox_AnswersSchema.array().optional(),
  push: z.union([AiQuestionCheckbox_AnswersSchema, AiQuestionCheckbox_AnswersSchema.array()]).optional()
}).strict();
export const AiQuestionCheckboxUpdateanswerInputObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxUpdateanswerInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxUpdateanswerInput>;
export const AiQuestionCheckboxUpdateanswerInputObjectZodSchema = makeSchema();
