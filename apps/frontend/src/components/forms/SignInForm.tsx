'use client';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ApiError, userSignInSchema, userSignInSchemaType } from 'shared-types';
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import { authClient } from '../../lib/auth-client';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { Spinner } from '../ui/spinner';
import { usePathname, useRouter } from 'next/navigation';
import { FormProcessingContext } from '../wrappers/FormProcessor';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { RedAlert } from '../custom-ui/RedAlert';
import { isAPIError } from 'better-auth/api';
import { handleApiFormError } from '@/utils/apiErrorsHandler';

export function SignInForm() {
  const router = useRouter();
  const { setProcessingStatus } = useContext(
    FormProcessingContext,
  );

  const form = useForm<userSignInSchemaType>({
    resolver: zodResolver(userSignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate } = useMutation({
    mutationFn: signIn,
    onSuccess: async () => {
      setProcessingStatus(false);
      toast.success('You have successfully signed in!');
      router.push('/prompting');
    },
    onError: async (error: ApiError) => {
      setProcessingStatus(false);
      handleApiFormError(error, router, form, true);
      toast.error(error.message);
    },
  });

  async function signIn(formData: userSignInSchemaType) {
    const response = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
    });

    if (response.error) {
      const message =
        response.error.message ||
        'Something went wrong, user was not signed in!';
      throw new ApiError(response.error.status, message);
    }

    return response;
  }

  function onSubmit(data: userSignInSchemaType) {
    setProcessingStatus(true);
    mutate(data);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Sign In to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="sign-in-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => {
                return (
                  <>
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        type="email"
                        aria-invalid={fieldState.invalid}
                        placeholder="@gmail.com"
                      />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  </>
                );
              }}
            />
            <Controller
              control={form.control}
              name="password"
              render={({ field, fieldState }) => {
                return (
                  <>
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        type="text"
                        aria-invalid={fieldState.invalid}
                        placeholder="*****"
                      />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  </>
                );
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardContent>
        {form.formState.errors.root?.serverError && (
          <RedAlert
            title={'Something went wrong'}
            message={form.formState.errors.root?.serverError.message as string}
          />
        )}{' '}
      </CardContent>
      <CardFooter>
        <Button
          disabled={form.formState.isSubmitting}
          form="sign-in-form"
          type="submit"
        >
          Sign In
        </Button>
      </CardFooter>
    </Card>
  );
}
