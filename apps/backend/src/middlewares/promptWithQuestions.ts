import express from "express";
import {ApiErrorResponse, questionsSchema, questionsSchemaType} from "shared-types";
import {z} from "zod";

export async function questionsValidationMiddleware(req: express.Request, res: express.Response<ApiErrorResponse>, next: express.NextFunction) {
  const answeredQuestions: questionsSchemaType = req.body;

  try {
    res.locals.answeredQuestions = questionsSchema.parse(answeredQuestions);
    next();
  } catch (error) {
    if(error instanceof z.ZodError) {
      return res.status(422).json({
        success: false,
        error: {
          message: "Invalid questions data"
        }
      })
    }
  }
}
