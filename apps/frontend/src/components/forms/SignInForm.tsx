'use client';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSignInSchema, userSignInSchemaType } from 'shared-types';
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
import { useRouter } from 'next/navigation';
import { FormProcessingContext } from '../wrappers/FormProcessor';

export function SignInForm() {
  const form = useForm<userSignInSchemaType>({
    resolver: zodResolver(userSignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const router = useRouter();
  const setProcessingStatus = useContext(FormProcessingContext);

  async function onSubmit(data: userSignInSchemaType) {
    setProcessingStatus(true);
    await authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
      },
      {
        onError: (context) => {
          setProcessingStatus(false);
        },
        onSuccess: async () => {
          setProcessingStatus(false);
          return router.push('/prompting');
        },
      },
    );
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
      <CardFooter>
        <Button form="sign-in-form" type="submit">
          Sign In
        </Button>
      </CardFooter>
    </Card>
  );
}
