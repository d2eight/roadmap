import {z} from "zod";
import {
  AiQuestionABCDModelSchema, AiQuestionCheckboxModelSchema, AiQuestionModelSchema,
  AiQuestionRangeModelSchema,
  AiQuestionsModelSchema
} from "@/libs/db/prisma/generated/schemas";
import {AiQuestionABCD_Answers, AiQuestionCheckbox_Answers} from "@/libs/db/generated/prisma/enums";

export const userSignUpSchema = z.object({
  name: z.string().min(5, {message: "Name must be at least 5 characters"}),
  email: z.email(),
  password: z.string()
    .min(8, {message: "Password must be at least 8 characters"})
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "Password must contain at least one special character" }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must be similar",
  "path": ["confirmPassword"],
});

export type userSignUpSchemaType = z.infer<typeof userSignUpSchema>

export const promptSchema = z.object({
  prompt: z.string().min(5, {message: "Prompt must have at least 5 characters"}).max(1500, {message: "Prompt must have no more than 1500 letters"}),
  externalAiQuestionsStatus: z.boolean()
})

export type promptSchemaType = z.infer<typeof promptSchema>

export const aiGuideGenerationSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(15),
  steps: z.array(z.object({
    title: z.string().min(5),
    description: z.string().min(15),
  })).max(30)
})

export type aiGuideGenerationSchemaType = z.infer<typeof aiGuideGenerationSchema>

export const aiQuestionABCDSchema = AiQuestionABCDModelSchema.omit({
  id: true,
  aiQuestions: true,
  aiQuestionsId: true,
  answer: true,
  customAnswer: true,
})

export const aiQuestionRangeSchema = AiQuestionRangeModelSchema.omit({
  id: true,
  aiQuestions: true,
  aiQuestionsId: true,
  answer: true
})

export const aiQuestionSchema = AiQuestionModelSchema.omit({
  id: true,
  aiQuestions: true,
  aiQuestionsId: true,
  answer: true,
})

export const aiQuestionCheckboxSchema = AiQuestionCheckboxModelSchema.omit({
  id: true,
  aiQuestions: true,
  aiQuestionsId: true,
  answer: true,
})

export const aiQuestionsSchema =
  AiQuestionsModelSchema
    .omit({
      id: true,
      guideId: true,
      guide: true
    })
    .extend({
      AiQuestionABCD: aiQuestionABCDSchema,
      AiQuestionRange: aiQuestionRangeSchema,
      AiQuestion: aiQuestionSchema,
      AiQuestionCheckbox: aiQuestionCheckboxSchema,
    })

export type aiQuestionsSchemaType = z.infer<typeof aiQuestionsSchema>;

export const questionsSchema = z.object({
  AiQuestionABCD: z.object({
    answer: z.enum(AiQuestionABCD_Answers),
    customAnswer: z.string().min(5).optional(),
  }).optional(),
  AiQuestionRange: z.number().min(1).max(100).optional(),
  AiQuestion: z.string().min(5).optional(),
  AiQuestionCheckbox: z.array(z.enum(AiQuestionCheckbox_Answers)).optional()
}).superRefine((data, ctx) => {
  if(data?.AiQuestionABCD?.answer === "CUSTOM" && !data.AiQuestionABCD.customAnswer) {
    ctx.addIssue({
      code: "custom",
      message: "Custom answer must be added",
      path: ["AiQuestionABCD.customAnswer"],
    })
  }
})

export type questionsSchemaType = z.infer<typeof questionsSchema>;

// export const formQuestionABCDSchema = AiQuestionABCDModelSchema.omit({
//   id: true,
//   aiQuestions: true,
//   aiQuestionsId: true
// })
//
// export const formQuestionRangeSchema = AiQuestionRangeModelSchema.omit({
//   id: true,
//   aiQuestions: true,
//   aiQuestionsId: true
// })
//
// export const formQuestionSchema = AiQuestionModelSchema.omit({
//   id: true,
//   aiQuestions: true,
//   aiQuestionsId: true
// })
//
// export const formQuestionCheckboxSchema = AiQuestionCheckboxModelSchema.omit({
//   id: true,
//   aiQuestions: true,
//   aiQuestionsId: true
// })
//
// export const formQuestionsSchema =
//   AiQuestionsModelSchema
//     .omit({
//       id: true,
//       guideId: true,
//       guide: true
//     })
//     .extend({
//       AiQuestionABCD: aiQuestionABCDSchema,
//       AiQuestionRange: aiQuestionRangeSchema,
//       AiQuestion: aiQuestionSchema,
//       AiQuestionCheckbox: aiQuestionCheckboxSchema,
//     })
//
// export type formQuestionsSchemaType = z.infer<typeof formQuestionsSchema>;




