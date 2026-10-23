'use client';

import { useFormState } from 'react-dom';
import { Controller, useForm } from 'react-hook-form';
import { ApiError, userSignUpSchema, userSignUpSchemaType } from 'shared-types';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '../ui/field';
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
import { RedAlert } from '@/components/custom-ui/RedAlert';
import { signUpWithEmailAndPassword } from '@/utils/auth';

export function SignUpForm() {
  const router = useRouter();
  const { processingStatus, setProcessingStatus } = useContext(
    FormProcessingContext,
  );

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
    onSuccess: () => {
      setProcessingStatus(false);
      toast.success('You have successfully signed up!');
      router.push('/prompting');
    },
    onError: (error) => {
      setProcessingStatus(false);
      toast.error(error.message);
    },
  });

  async function signUp(data: userSignUpSchemaType) {
    const result = await signUpWithEmailAndPassword(data);

    if (result.isErr()) {
      throw result.error;
    }

    return result.value;
  }

  function onSubmit(data: userSignUpSchemaType) {
    setProcessingStatus(true);
    mutate(data);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="sign-up-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldSet disabled={processingStatus}>
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
                    type="password"
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
          </FieldSet>
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
        <Field>
          <Button disabled={processingStatus} type="submit" form="sign-up-form">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
