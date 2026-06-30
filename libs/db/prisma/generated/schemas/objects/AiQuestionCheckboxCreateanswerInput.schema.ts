import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionCheckbox_AnswersSchema } from '../enums/AiQuestionCheckbox_Answers.schema'

const makeSchema = () => z.object({
  set: AiQuestionCheckbox_AnswersSchema.array()
}).strict();
export const AiQuestionCheckboxCreateanswerInputObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxCreateanswerInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxCreateanswerInput>;
export const AiQuestionCheckboxCreateanswerInputObjectZodSchema = makeSchema();
