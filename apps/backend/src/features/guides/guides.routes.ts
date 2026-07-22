import express from 'express';
import { authMiddleware } from '../../middlewares/auth';
import {
  createGuideAnsweredQuestions,
  createGuideBasic,
  createGuideQuestions,
  removeGuide,
} from './guides.controller';
import { promptValidationMiddleware } from '../../middlewares/prompt';
import { guideMiddleware } from '../../middlewares/guide';
import { questionsValidationMiddleware } from '../../middlewares/promptWithQuestions';

export const guidesRouter = express.Router();

guidesRouter.post(
  '/api/create-guide',
  authMiddleware,
  promptValidationMiddleware,
  createGuideBasic,
);

guidesRouter.post(
  '/api/create-guide-questions',
  authMiddleware,
  promptValidationMiddleware,
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
