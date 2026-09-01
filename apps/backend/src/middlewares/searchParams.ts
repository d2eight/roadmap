import express, { NextFunction } from 'express';
import { paramsSchema } from 'shared-types';
import { searchParamsDefaultValues } from 'shared-constants';

export function searchParamsMiddleware(
  req: express.Request,
  res: express.Response,
  next: NextFunction,
): void {
  if (req.query) {
    const parsedParams = paramsSchema.safeParse(req.query);
    res.locals.params = parsedParams.success
      ? parsedParams.data
      : searchParamsDefaultValues;
  }

  next();
}
