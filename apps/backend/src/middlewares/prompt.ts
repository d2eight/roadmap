import express from 'express';
import { promptSchema, promptSchemaType } from 'shared-types';
import { z } from 'zod';

export async function promptValidationMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const promptData: promptSchemaType = req.body;

  try {
    res.locals.promptData = promptSchema.parse(promptData);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(422).json({
        success: false,
        error: {
          message: 'Invalid prompt data',
        },
      });
    }
  }
}
