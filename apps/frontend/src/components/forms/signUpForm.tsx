"use client"

import {useFormState} from "react-dom";
import {Controller, useForm} from "react-hook-form";
import {userSignUpSchema, userSignUpSchemaType} from "shared-types";
import {Field, FieldError, FieldGroup, FieldLabel} from "@/apps/frontend/src/components/ui/field";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/apps/frontend/src/components/ui/card";
import {Button} from "@/apps/frontend/src/components/ui/button";
import {zodResolver} from "@hookform/resolvers/zod";
import {authClient} from "@/apps/frontend/src/lib/auth-client";

export function SignUpForm() {
  const { control, handleSubmit, formState: {errors} } = useForm<userSignUpSchemaType>({
    resolver: zodResolver(userSignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    mode: "onChange"
  });

  async function onSubmit (data: userSignUpSchemaType) {
    await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      callbackURL: "/prompting"
    }, {
      onError: (error) => {}
    })

  }

  return <>
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller control={control} name="name" render={({ field, fieldState, }) => (
              <Field data-invalid={fieldState.error}>
                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="pookiebar3334"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )} />
            <Controller control={control} name="email" render={({ field, fieldState, }) => (
              <Field data-invalid={fieldState.error}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="@gmail.com"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )} />
            <Controller control={control} name="password" render={({ field, fieldState, }) => (
              <Field data-invalid={fieldState.error}>
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="*****"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )} />
            <Controller control={control} name="confirmPassword" render={({ field, fieldState, }) => (
              <Field data-invalid={fieldState.error}>
                <FieldLabel htmlFor={field.name}>Confirm password</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="*****"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )} />
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
  </>
}
