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

export function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<userSignUpSchemaType>({
    resolver: zodResolver(userSignUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  const router = useRouter();
  const setProcessingStatus = useContext(FormProcessingContext);

  async function onSubmit(data: userSignUpSchemaType) {
    setProcessingStatus(true);
    await authClient.signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
        callbackURL: '/prompting',
      },
      {
        onError: (ctx) => {
          setProcessingStatus(false);
        },
        onSuccess: (ctx) => {
          setProcessingStatus(false);
          return router.push('/prompting');
        },
      },
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              control={control}
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
              control={control}
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
              control={control}
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
              control={control}
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
      <CardFooter>
        <Field>
          <Button type="submit" form="sign-up-form">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
