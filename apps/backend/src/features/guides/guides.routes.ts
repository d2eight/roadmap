import express from 'express';
import { authMiddleware } from '../../middlewares/auth';
import {
    createGuide,
    createGuideQuestions,
    createGuideWithAnsweredQuestions,
    deleteGuide,
    recreateGuide,
    recreateGuideQuestions,
    recreateGuideWithAnsweredQuestions,
    simpleRecreateGuide,
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
    createGuide,
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

guidesRouter.patch(
    '/api/create-guide-with-answered-questions/:guideId',
    authMiddleware({
        errorMessage: 'Guide was not created, please sign in',
    }),
    questionsValidationMiddleware({}),
    guideMiddleware({
        requiredStatuses: ['QUESTIONS_GENERATED'],
    }),
    createGuideWithAnsweredQuestions,
);

guidesRouter.delete(
    '/api/remove-guide/:guideId',
    authMiddleware({
        errorMessage: 'Guide was not deleted, please sign in',
    }),
    deleteGuide,
);

guidesRouter.patch(
    '/api/update-guide-progress/:guideId',
    authMiddleware({
        errorMessage: 'Guide progress was not updated, please sign in',
    }),
    guideMiddleware({
        requiredStatuses: ['GUIDE_GENERATED'],
    }),
    stepsValidationMiddleware({}),
    updateGuide,
);

guidesRouter.put(
    '/api/simple-recreate-guide/:guideId',
    authMiddleware({
        errorMessage: 'Guide was not recreated, please sign in',
    }),
    guideMiddleware({
        requiredStatuses: ['GUIDE_GENERATED'],
    }),
    simpleRecreateGuide,
);

guidesRouter.put(
    '/api/recreate-guide/:guideId',
    authMiddleware({
        errorMessage: 'Guide was not recreated, please sign in',
    }),
    guideMiddleware({
        requiredStatuses: ['GUIDE_GENERATED'],
    }),
    promptValidationMiddleware({}),
    recreateGuide,
);

guidesRouter.put(
    '/api/recreate-guide-questions/:guideId',
    authMiddleware({
        errorMessage: 'Guide was not recreated, please sign in',
    }),
    guideMiddleware({
        requiredStatuses: ['GUIDE_GENERATED', 'QUESTIONS_GENERATED']
    }),
    promptValidationMiddleware({}),
    recreateGuideQuestions,
);

guidesRouter.put(
    '/api/recreate-guide-with-answered-questions/:guideId',
    authMiddleware({
        errorMessage: 'Guide questions were not created, please sign in',
    }),
    questionsValidationMiddleware({}),
    guideMiddleware({
        requiredStatuses: ['GUIDE_GENERATED'],
    }),
    recreateGuideWithAnsweredQuestions,
);
