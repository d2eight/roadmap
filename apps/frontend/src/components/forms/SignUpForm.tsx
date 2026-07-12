'use client';

import { useFormState } from 'react-dom';
import { Controller, useForm } from 'react-hook-form';
import { userSignUpSchema, userSignUpSchemaType } from 'shared-types';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { authClient } from '../../lib/auth-client';
import { useContext } from 'react';
import { FormProcessingContext } from '../wrappers/FormProcessor';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { isAPIError } from 'better-auth/api';

export function SignUpForm() {
  const router = useRouter();
  const { setProcessingStatus, setErrorMessage, FormAlert } = useContext(
    FormProcessingContext,
  );
  const { refetch, isError } = useContext(AuthContext);

  const form = useForm<userSignUpSchemaType>({
    resolver: zodResolver(userSignUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  const { mutate } = useMutation({
    mutationFn: signUp,
    onSuccess: async (response) => {
      setProcessingStatus(false);
      await refetch();
      toast.success('You have successfully signed up!');
      router.push('/prompting');
    },
    onError: (error: Error) => {
      setProcessingStatus(false);
      setErrorMessage(error.message);
      form.setError('root.serverError', {
        message: error.message,
      });
    },
  });

  async function signUp(formData: userSignUpSchemaType) {
    const response = await authClient.signUp.email({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    if (response.error && isAPIError(response.error)) {
      throw new Error(response.error.message);
    }

    return response;
  }

  function onSubmit(formData: userSignUpSchemaType) {
    setProcessingStatus(true);
    mutate(formData);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="sign-up-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.error}>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="pookiebar3334"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.error}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="@gmail.com"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.error}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="*****"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="confirmPassword"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.error}>
                  <FieldLabel htmlFor={field.name}>Confirm password</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="*****"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardContent>
        {form.formState.errors.root?.serverError && FormAlert()}
      </CardContent>
      <CardFooter>
        <Field>
          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            form="sign-up-form"
          >
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
