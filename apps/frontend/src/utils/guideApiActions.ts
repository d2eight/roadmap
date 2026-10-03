import { Result } from 'better-result';
import {
  ApiErrors,
  ApiResponse,
  ApiResponseError,
  ApiResponseSuccess,
  GuideModelWithRelations,
  GuideQuestionFormErrors,
  guideQuestionsSchemaType,
  GuideStepsFormErrors,
  guideStepsSchemaType,
  PromptFormErrors,
  promptSchemaType,
} from 'shared-types';
import { handleApiError } from '@/utils/apiErrorsHandler';
import {
  NotFoundError,
  UnauthorizedError,
  UnexpectedError,
  UnprocessableEntity,
} from 'errors';

export async function createGuideBasic(
  requestBody: RequestInit,
): Promise<Result<ApiResponseSuccess<string>, ApiErrors<PromptFormErrors>>> {
  const response = await fetch(
    'http://localhost:3333/api/create-guide',
    requestBody,
  );

  const responseJson: ApiResponse<string, PromptFormErrors> =
    await response.json();
  const responseStatusCode = response.status;

  if (responseJson.success) {
    return Result.ok(responseJson);
  }

  return handleApiError({
    responseJson,
    responseStatusCode,
  });
}

export async function createGuideQuestions(
  requestBody: RequestInit,
): Promise<Result<ApiResponseSuccess<string>, ApiErrors<PromptFormErrors>>> {
  const response = await fetch(
    'http://localhost:3333/api/create-guide-questions',
    requestBody,
  );

  const responseJson: ApiResponse<string, PromptFormErrors> =
    await response.json();
  const responseStatusCode = response.status;

  if (responseJson.success) {
    return Result.ok(responseJson);
  }

  return handleApiError({
    responseJson,
    responseStatusCode,
  });
}

export async function createGuideWithAnsweredQuestions(
  guideId: string,
  requestBody: RequestInit,
): Promise<Result<ApiResponseSuccess, ApiErrors<GuideQuestionFormErrors>>> {
  const response = await fetch(
    `http://localhost:3333/api/create-guide-with-answered-questions/${guideId}`,
    requestBody,
  );

  const responseJson: ApiResponse<null, GuideQuestionFormErrors> =
    await response.json();
  const responseStatusCode = response.status;

  if (responseJson.success) {
    return Result.ok(responseJson);
  }

  return handleApiError({
    responseJson,
    responseStatusCode,
  });
}

export async function recreateGuideWithAnsweredQuestions(
  guideId: string,
  requestBody: RequestInit,
): Promise<Result<ApiResponseSuccess, ApiErrors<GuideQuestionFormErrors>>> {
  const response = await fetch(
    `http://localhost:3333/api/recreate-guide-with-answered-questions/${guideId}`,
    requestBody,
  );

  const responseJson: ApiResponse<null, GuideQuestionFormErrors> =
    await response.json();
  const responseStatusCode = response.status;

  if (responseJson.success) {
    return Result.ok(responseJson);
  }

  return handleApiError({
    responseJson,
    responseStatusCode,
  });
}

export async function updateGuideProgress(
  guideId: string,
  requestBody: RequestInit,
): Promise<
  Result<
    ApiResponseSuccess<GuideModelWithRelations>,
    ApiErrors<GuideStepsFormErrors>
  >
> {
  const response = await fetch(
    `http://localhost:3333/api/update-guide-progress/${guideId}`,
    requestBody,
  );

  const responseJson: ApiResponse<
    GuideModelWithRelations,
    GuideStepsFormErrors
  > = await response.json();
  const responseStatusCode = response.status;

  if (responseJson.success) {
    return Result.ok(responseJson);
  }

  return handleApiError({
    responseJson,
    responseStatusCode,
  });
}

export async function deleteGuide(
  guideId: string,
  requestBody: RequestInit,
): Promise<Result<null, ApiErrors>> {
  const response = await fetch(
    `http://localhost:3333/api/remove-guide/${guideId}`,
    requestBody,
  );

  const responseStatusCode = response.status;

  if (responseStatusCode === 204) {
    return Result.ok(null);
  }

  const responseJson: ApiResponseError = await response.json();

  return handleApiError({
    responseJson,
    responseStatusCode,
  });
}

export async function recreateGuide(guideId: string, requestBody: RequestInit) {
  const response = await fetch(
    `http://localhost:3333/api/recreate-guide/${guideId}`,
    requestBody,
  );

  const responseStatusCode = response.status;

  if (responseStatusCode === 204) {
    return Result.ok(null);
  }

  const responseJson: ApiResponseError = await response.json();

  return handleApiError({
    responseJson,
    responseStatusCode,
  });
}

export async function recreateGuidePrompt(
  guideId: string,
  requestBody: RequestInit,
) {
  const response = await fetch(
    `http://localhost:3333/api/recreate-guide-new-prompt/${guideId}`,
    requestBody,
  );

  const responseStatusCode = response.status;

  if (responseStatusCode === 204) {
    return Result.ok(null);
  }

  const responseJson: ApiResponseError = await response.json();

  return handleApiError({
    responseJson,
    responseStatusCode,
  });
}

export async function recreateGuideQuestions(
  guideId: string,
  requestBody: RequestInit,
) {
  const response = await fetch(
    `http://localhost:3333/api/recreate-guide-new-questions/${guideId}`,
    requestBody,
  );

  const responseStatusCode = response.status;

  if (responseStatusCode === 204) {
    return Result.ok(null);
  }

  const responseJson: ApiResponseError = await response.json();

  return handleApiError({
    responseJson,
    responseStatusCode,
  });
}
