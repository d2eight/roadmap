import { Result } from 'better-result';
import {
  ApiResponse,
  ApiResponseSuccess,
  PromptFormErrors,
} from 'shared-types';
import { handleApiError } from '@/utils/apiErrorsHandler';
import {
  UnauthorizedError,
  UnexpectedError,
  UnprocessableEntity,
} from 'errors';

export async function createGuideBasic(
  requestBody: RequestInit,
): Promise<
  Result<
    ApiResponseSuccess<string>,
    UnauthorizedError | UnprocessableEntity<PromptFormErrors> | UnexpectedError
  >
> {
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
): Promise<
  Result<
    ApiResponseSuccess<string>,
    UnauthorizedError | UnprocessableEntity<PromptFormErrors> | UnexpectedError
  >
> {
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
