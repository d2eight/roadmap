import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';
import {
    ApiErrors,
    ApiResponseError,
} from 'shared-types';
import {
    NotFoundError,
    UnauthorizedError,
    UnexpectedError,
    UnprocessableEntity,
} from 'errors';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { ZodFlattenedError } from 'zod';
import { Result } from 'better-result';
import { useCallback } from 'react';

type ClientHandleApiErrorParams<Form extends FieldValues> = {
    error: ApiErrors<ZodFlattenedError<Form> | null>;
    form?: UseFormReturn<Form>;
    redirect?: boolean;
};

export function useClientHandleApiError() {
    const router = useRouter();

    const clientHandleApiError = useCallback(
        <Form extends FieldValues>({
            error,
            form,
            redirect = true,
        }: ClientHandleApiErrorParams<Form>) => {
            const errorMessage = error.message
                ? error.message
                : 'Something went wrong';

            if (error instanceof UnauthorizedError) {
                router.replace('/auth/sign-in');
            } else if (error instanceof UnprocessableEntity) {
                const fieldsErrors = error.zodError?.fieldErrors;

                if (form && fieldsErrors) {
                    const fields = Object.keys(
                        fieldsErrors,
                    ) as FieldPath<Form>[];

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
            } else if (error instanceof NotFoundError && redirect) {
                router.replace('/404');
            }

            toast.error(errorMessage);
        },
        [router],
    );

    return { clientHandleApiError };
}

export function handleApiError<Z = null>({
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
        case 404:
            return Result.err(
                new NotFoundError({
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
