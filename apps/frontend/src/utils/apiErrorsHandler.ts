import { ApiError } from '../customClasses/apiError';
import { usePathname, useRouter } from 'next/navigation';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export function handleApiFormError<T extends FieldValues>(
  error: ApiError,
  router: AppRouterInstance,
  form: UseFormReturn<T>,
  isSignPage = false,
) {
  console.error(error);
  switch (error.statusCode) {
    case 401:
      isSignPage
        ? form.setError('root.serverError', {
            message: error.message || 'Authorization error',
          })
        : router.push(`/auth/sign-in`);
      break;
    case 422:
      if(error.issues) {
        error.issues.forEach((issue) => {
          form.setError(issue.path[0], {
            type: "manual",
            message: issue.message
          })
        })
      } else {
        form.setError('root.serverError', {
          message: error.message || 'Invalid data',
        });
      }
      break;
    default:
      form.setError('root.serverError', {
        message: error.message || 'Something went wrong',
      });
  }
}
