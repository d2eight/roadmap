import {z} from "zod";

export const userSignUpSchema = z.object({
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  name: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must be similar"
});

export type userSignInSchema = z.infer<typeof userSignUpSchema>
