import {ApiError} from "@/apps/frontend/src/customClasses/apiError";
import {useRouter} from "next/navigation";
import {FieldValues, UseFormReturn} from "react-hook-form";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export function handleApiFormError<T extends FieldValues>(error: ApiError, router: AppRouterInstance, form: UseFormReturn<T>) {

  switch (error.statusCode) {
    case 401:
      router.push(`/auth/sign-up`);
      break;
    case 422:
      form.setError("root.serverError", {
        message: error.message
      })
      break;
    case 500:
      form.setError("root.serverError", {
        message: error.message
      })
      break;
    default:
      form.setError("root.serverError", {
        message: error.message
      })
  }
}

