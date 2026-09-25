import { FieldPath, FieldValues, Path, UseFormReturn } from 'react-hook-form';
import {
  ApiResponse,
  ApiResponseError,
  PromptFormErrors,
  promptSchemaType,
} from 'shared-types';
import {
  UnauthorizedError,
  UnexpectedError,
  UnprocessableEntity,
} from 'errors';
import { toast } from 'sonner';
import { redirect, useRouter } from 'next/navigation';
import { z } from 'zod';
import { Result } from 'better-result';

export function clientHandleApiError<TForm extends FieldValues>(
  error:
    | UnexpectedError
    | UnauthorizedError
    | UnprocessableEntity<z.ZodFlattenedError<TForm>>,
  form?: UseFormReturn<TForm>,
) {
  const errorMessage = error.message ? error.message : 'Something went wrong';

  if (error instanceof UnauthorizedError) {
    toast.error(errorMessage);
    redirect('/auth/sign-in');
  } else if (error instanceof UnprocessableEntity) {
    const fieldsErrors = error.zodError?.fieldErrors;

    if (fieldsErrors && form) {
      const fields = Object.keys(fieldsErrors) as FieldPath<TForm>[];

      for (const property of fields) {
        form.setError(property, {
          type: 'manual',
          message: fieldsErrors[property]?.[0],
        });
      }

      form.setError('root', {
        message: errorMessage,
      });
    }
  }

  toast.error(errorMessage);
}

export function handleApiError<Z>({
  responseJson,
  responseStatusCode,
}: {
  responseStatusCode: number;
  responseJson: ApiResponseError<Z>;
}) {
  switch (responseStatusCode) {
    case 401:
      return Result.err(
        new UnauthorizedError({
          message: responseJson.message,
        }),
      );
    case 422:
      return Result.err(
        new UnprocessableEntity<Z>({
          message: responseJson.message,
          zodError: responseJson.zodError,
        }),
      );
    default:
      return Result.err(
        new UnexpectedError({
          message: responseJson.message,
        }),
      );
  }
}
