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
  '/api/create-guide-answered-questions/:guideId',
  authMiddleware,
  questionsValidationMiddleware,
  guideMiddleware,
  createGuideAnsweredQuestions,
);

guidesRouter.delete('/api/remove-guide/:guideId', authMiddleware, removeGuide);

guidesRouter.put(
  '/api/update-guide-progress/:guideId',
  authMiddleware,
  stepsValidationMiddleware,
  updateGuide,
);
