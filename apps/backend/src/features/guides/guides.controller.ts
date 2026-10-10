import express from 'express';
import * as guidesService from './guides.service';
import { answeredQuestionsSchemaType, promptSchemaType } from 'shared-types';
import { GuideStepModel } from '@/libs/db/generated/prisma/models/GuideStep';
import { deleteCurrentQuestionsData } from './guides.service';

export async function createGuide(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const promptData: promptSchemaType = res.locals.promptData;

  if (promptData.externalAiQuestionsStatus) {
    return res.status(422).json({
      success: false,
      message: 'Unexpected external ai questions behavior',
    });
  }

  const userId: string = res.locals.userId;

  try {
    const guide = await guidesService.createEmptyGuide({
      promptData,
      userId,
    });
    await guidesService.initiateAiStepsGeneration({
      guideId: guide.id,
      userId: userId,
    });

    return res.status(201).json({
      success: true,
      data: guide.id,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Guide was no created, unexpected error',
    });
  }
}

export async function createGuideQuestions(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const promptData: promptSchemaType = res.locals.promptData;

  if (!promptData.externalAiQuestionsStatus) {
    return res.status(422).json({
      success: false,
      error: {
        message: 'Invalid data',
      },
    });
  }

  const userId: string = res.locals.userId;

  try {
    const guide = await guidesService.createEmptyGuide({
      promptData,
      userId,
    });

    await guidesService.initiateAiQuestionsGeneration({
      guideId: guide.id,
      userId: userId,
    });

    return res.status(201).json({
      success: true,
      data: guide.id,
    });
  } catch (error) {
    console.error('Failed to create guide:', error);

    return res.status(500).json({
      success: false,
      error: {
        message: 'Something went wrong',
      },
    });
  }
}

export async function createGuideWithAnsweredQuestions(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const answeredQuestions: answeredQuestionsSchemaType =
    res.locals.answeredQuestions;
  const userId: string = res.locals.userId;
  const guideId: string = req.params.guideId as string;

  try {
    await guidesService.addGuideAnsweredQuestions({
      guideId,
      userId,
      answeredQuestions,
    });

    await guidesService.initiateAiStepsGeneration({
      guideId,
      userId,
    });

    return res.status(201).json({
      success: true,
    });
  } catch (error) {
    console.error('Failed to create guide:', error);

    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
}

export async function deleteGuide(req: express.Request, res: express.Response) {
  const userId: string = res.locals.userId;
  const guideId = req.params.guideId as string;
  try {
    await guidesService.deleteGuide({
      guideId,
      userId,
    });

    return res.status(204).end();
  } catch (error) {
    console.error('Failed to delete guide:', error);

    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
}

export async function updateGuide(req: express.Request, res: express.Response) {
  const userId: string = res.locals.userId;
  const guideId = req.params.guideId as string;
  const steps: GuideStepModel[] = res.locals.steps;

  try {
    const guide = await guidesService.updateGuide({ guideId, userId, steps });

    return res.status(200).json({
      success: true,
      data: guide,
    });
  } catch (error) {
    console.error('Failed to update guide:', error);

    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
}

export async function simpleRecreateGuide(
  req: express.Request,
  res: express.Response,
) {
  const userId: string = res.locals.userId;
  const guideId: string = req.params.guideId as string;

  try {
    await guidesService.resetGuideStatus({
      guideId,
      userId,
    });

    await guidesService.deleteAllGuideSteps({
      guideId,
    });

    await guidesService.initiateAiStepsGeneration({
      guideId,
      userId,
    });

    return res.status(204).end();
  } catch (error) {
    console.error('Failed to recreate guide:', error);

    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
}

export async function recreateGuide(
  req: express.Request,
  res: express.Response,
) {
  const userId: string = res.locals.userId;
  const guideId: string = req.params.guideId as string;
  const promptData: promptSchemaType = res.locals.promptData;

  if (promptData.externalAiQuestionsStatus) {
    return res.status(422).json({
      success: false,
      message: 'Unexpected external ai questions behavior',
    });
  }

  try {
    await guidesService.resetGuideStatus({
      guideId,
      userId,
    });

    await guidesService.deleteAllGuideSteps({
      guideId,
    });

    await guidesService.deleteCurrentQuestionsData({
      guideId,
      userId,
    });

    await guidesService.addNewPrompt({
      guideId,
      userId,
      newPrompt: promptData.prompt,
    });

    await guidesService.initiateAiStepsGeneration({
      guideId,
      userId,
    });

    return res.status(204).end();
  } catch (error) {
    console.error('Failed to recreate guide:', error);

    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
}

export async function recreateGuideQuestions(
  req: express.Request,
  res: express.Response,
) {
  const userId: string = res.locals.userId;
  const guideId: string = req.params.guideId as string;
  const promptData: promptSchemaType = res.locals.promptData;

  if (!promptData.externalAiQuestionsStatus) {
    return res.status(422).json({
      success: false,
      message: 'Unexpected external ai questions behavior',
    });
  }

  try {
    await guidesService.resetGuideStatus({
      guideId,
      userId,
    });

    await guidesService.deleteAllGuideSteps({
      guideId,
    });

    await guidesService.deleteCurrentQuestionsData({
      guideId,
      userId,
    });

    await guidesService.addNewPrompt({
      guideId,
      userId,
      newPrompt: promptData.prompt,
    });

    await guidesService.initiateAiQuestionsGeneration({
      userId: userId,
      guideId: guideId,
    });

    return res.status(204).end();
  } catch (error) {
    console.error('Failed to recreate guide:', error);

    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
}

export async function recreateGuideWithAnsweredQuestions(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const answeredQuestions: answeredQuestionsSchemaType =
    res.locals.answeredQuestions;
  const userId: string = res.locals.userId;
  const guideId: string = req.params.guideId as string;

  try {
    await guidesService.resetGuideStatus({
      guideId,
      userId,
    });

    await guidesService.deleteAllGuideSteps({
      guideId,
    });

    await guidesService.addGuideAnsweredQuestions({
      guideId,
      userId,
      answeredQuestions,
    });

    await guidesService.initiateAiStepsGeneration({
      guideId,
      userId,
    });

    return res.status(204).end();
  } catch (error) {
    console.error('Failed to create guide:', error);

    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
}
