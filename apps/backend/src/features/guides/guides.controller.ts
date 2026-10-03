import express from 'express';
import * as guidesService from './guides.service';
import {
  answeredQuestionsSchemaType,
  paramsSchemaType,
  promptSchemaType,
} from 'shared-types';
import { GuideStepModel } from '@/libs/db/generated/prisma/models/GuideStep';
import { getGuides } from 'utils';
import {
  recreateGuideNewPrompt,
  recreateGuideNewQuestions,
} from './guides.service';

export async function createGuideBasic(
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
    const guideId = await guidesService.create(promptData.prompt, userId);

    return res.status(201).json({
      success: true,
      data: guideId,
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
    const guideId = await guidesService.createQuestions(
      promptData.prompt,
      userId,
    );

    return res.status(201).json({
      success: true,
      data: guideId,
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

export async function createGuideAnsweredQuestions(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const answeredQuestions: answeredQuestionsSchemaType =
    res.locals.answeredQuestions;
  const userId: string = res.locals.userId;
  const guideId: string = req.params.guideId as string;
  const prompt: string = res.locals.prompt;

  try {
    await guidesService.createWithAnsweredQuestions({
      prompt,
      answeredQuestions,
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

export async function removeGuide(req: express.Request, res: express.Response) {
  const userId: string = res.locals.userId;
  const guideId = req.params.guideId as string;
  try {
    await guidesService.remove(guideId, userId);

    return res.status(204).end();
  } catch (error) {
    console.error('Failed to delete guide:', error);

    return res.status(500).json({
      success: false,
    });
  }
}

export async function updateGuide(req: express.Request, res: express.Response) {
  const userId: string = res.locals.userId;
  const guideId = req.params.guideId as string;
  const steps: GuideStepModel[] = res.locals.steps;

  try {
    const guide = await guidesService.update(guideId, userId, steps);

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

export async function recreateGuide(
  req: express.Request,
  res: express.Response,
) {
  const answeredQuestions: answeredQuestionsSchemaType =
    res.locals.answeredQuestions;
  const userId: string = res.locals.userId;
  const guideId: string = req.params.guideId as string;
  const prompt: string = res.locals.prompt;

  try {
    await guidesService.recreate(guideId, userId);

    return res.status(204).end();
  } catch (error) {
    console.error('Failed to recreate guide:', error);

    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
}

export async function recreateGuideWithPrompt(
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
    await guidesService.recreateGuideNewPrompt({
      userId: userId,
      guideId: guideId,
      newPrompt: promptData.prompt,
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

export async function recreateGuideWithQuestions(
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
    await guidesService.recreateGuideNewQuestions({
      userId: userId,
      guideId: guideId,
      newPrompt: promptData.prompt,
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

export async function recreateGuideAnsweredQuestions(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const answeredQuestions: answeredQuestionsSchemaType =
    res.locals.answeredQuestions;
  const userId: string = res.locals.userId;
  const guideId: string = req.params.guideId as string;
  const prompt: string = res.locals.prompt;

  try {
    await guidesService.recreateGuideWithQuestions({
      prompt,
      answeredQuestions,
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
