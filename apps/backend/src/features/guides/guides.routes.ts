import express from 'express';
import { authMiddleware } from '../../middlewares/auth';
import {
  createGuideAnsweredQuestions,
  createGuideBasic,
  createGuideQuestions,
  removeGuide,
  updateGuide,
} from './guides.controller';
import { promptValidationMiddleware } from '../../middlewares/prompt';
import { guideMiddleware } from '../../middlewares/guide';
import { questionsValidationMiddleware } from '../../middlewares/promptWithQuestions';
import { stepsValidationMiddleware } from '../../middlewares/steps';

export const guidesRouter = express.Router();

guidesRouter.post(
  '/api/create-guide',
  authMiddleware({
    errorMessage: 'Guide was not created, please sign in',
  }),
  promptValidationMiddleware({}),
  createGuideBasic,
);

guidesRouter.post(
  '/api/create-guide-questions',
  authMiddleware({
    errorMessage: 'Guide questions were not created, please sign in',
  }),
  promptValidationMiddleware({
    errorMessage: 'Guide questions were not created, invalid data',
  }),
  createGuideQuestions,
);

guidesRouter.post(
  '/api/create-guide-with-answered-questions/:guideId',
  authMiddleware({
    errorMessage: 'Guide was not created, please sign in',
  }),
  questionsValidationMiddleware({}),
  guideMiddleware({}),
  createGuideAnsweredQuestions,
);

guidesRouter.delete(
  '/api/remove-guide/:guideId',
  authMiddleware({
    errorMessage: 'Guide was not deleted, please sign in',
  }),
  removeGuide,
);

guidesRouter.put(
  '/api/update-guide-progress/:guideId',
  authMiddleware({
    errorMessage: 'Guide progress was not updated, please sign in',
  }),
  guideMiddleware({}),
  stepsValidationMiddleware({}),
  updateGuide,
);
