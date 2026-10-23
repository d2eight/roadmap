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
import { clientEnv } from 'env/client';

export async function fetchGuide({
  guideId,
  requestBody,
}: {
  guideId: string;
  requestBody: RequestInit;
}): Promise<Result<ApiResponseSuccess<GuideModelWithRelations>, ApiErrors>> {
  const response = await fetch(
    `${clientEnv.NEXT_URL}/api/guides/${guideId}`,
    requestBody,
  );

  const responseJson = await response.json();
  const responseStatusCode = response.status;

  if (responseJson.success) {
    return Result.ok(responseJson);
  }

  return handleApiError({
    responseJson,
    responseStatusCode,
  });
}

export async function fetchGuides({
  requestBody,
  searchParams,
}: {
  requestBody: RequestInit;
  searchParams: URLSearchParams;
}): Promise<
  Result<ApiResponseSuccess<[GuideModelWithRelations[], number]>, ApiErrors>
> {
  const response = await fetch(
    `${clientEnv.NEXT_URL}/api/guides?${searchParams}`,
    requestBody,
  );

  const responseJson = await response.json();
  const responseStatusCode = response.status;

  if (responseJson.success) {
    return Result.ok(responseJson);
  }

  return handleApiError({
    responseJson,
    responseStatusCode,
  });
}

export async function createGuide(
  requestBody: RequestInit,
): Promise<Result<ApiResponseSuccess<string>, ApiErrors<PromptFormErrors>>> {
  const response = await fetch(
    `${clientEnv.EXPRESS_URL}/api/create-guide`,
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
    `${clientEnv.EXPRESS_URL}/api/create-guide-questions`,
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
    `${clientEnv.EXPRESS_URL}/api/create-guide-with-answered-questions/${guideId}`,
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
    `${clientEnv.EXPRESS_URL}/api/update-guide-progress/${guideId}`,
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
    `${clientEnv.EXPRESS_URL}/api/remove-guide/${guideId}`,
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

export async function simpleRecreateGuide(
  guideId: string,
  requestBody: RequestInit,
) {
  const response = await fetch(
    `${clientEnv.EXPRESS_URL}/api/simple-recreate-guide/${guideId}`,
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
    `${clientEnv.EXPRESS_URL}/api/recreate-guide/${guideId}`,
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
    `${clientEnv.EXPRESS_URL}/api/recreate-guide-questions/${guideId}`,
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

export async function recreateGuideWithAnsweredQuestions(
  guideId: string,
  requestBody: RequestInit,
): Promise<Result<null, ApiErrors<GuideQuestionFormErrors>>> {
  const response = await fetch(
    `${clientEnv.EXPRESS_URL}/api/recreate-guide-with-answered-questions/${guideId}`,
    requestBody,
  );

  const responseStatusCode = response.status;

  if (responseStatusCode === 204) {
    return Result.ok(null);
  }

  const responseJson: ApiResponseError<GuideQuestionFormErrors> =
    await response.json();

  return handleApiError({
    responseJson,
    responseStatusCode,
  });
}
