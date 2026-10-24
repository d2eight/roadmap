'use client';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSignInSchema, userSignInSchemaType } from 'shared-types';
import { Field, FieldError, FieldLabel, FieldSet } from '../ui/field';
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
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { FormProcessingContext } from '../../context/FormProcessor';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { RedAlert } from '../custom-ui/RedAlert';
import { signInWithEmailAndPassword } from '@/utils/auth';

export function SignInForm() {
    const router = useRouter();
    const { processingStatus, setProcessingStatus } = useContext(
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
        onSuccess: () => {
            setProcessingStatus(false);
            toast.success('You have successfully signed in!');
            router.push('/prompting');
        },
        onError: (error) => {
            setProcessingStatus(false);
            toast.error(error.message);
        },
    });

    async function signIn(data: userSignInSchemaType) {
        const result = await signInWithEmailAndPassword(data);

        if (result.isErr()) {
            throw result.error;
        }

        return result.value;
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
                    <FieldSet disabled={processingStatus}>
                        <Controller
                            control={form.control}
                            name="email"
                            render={({ field, fieldState }) => {
                                return (
                                    <>
                                        <Field
                                            data-invalid={fieldState.invalid}
                                        >
                                            <FieldLabel htmlFor={field.name}>
                                                Email
                                            </FieldLabel>
                                            <Input
                                                {...field}
                                                id={field.name}
                                                type="email"
                                                aria-invalid={
                                                    fieldState.invalid
                                                }
                                                placeholder="@gmail.com"
                                            />
                                            {fieldState.error && (
                                                <FieldError
                                                    errors={[fieldState.error]}
                                                />
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
                                        <Field
                                            data-invalid={fieldState.invalid}
                                        >
                                            <FieldLabel htmlFor={field.name}>
                                                Password
                                            </FieldLabel>
                                            <Input
                                                {...field}
                                                id={field.name}
                                                type="password"
                                                aria-invalid={
                                                    fieldState.invalid
                                                }
                                                placeholder="*****"
                                            />
                                            {fieldState.error && (
                                                <FieldError
                                                    errors={[fieldState.error]}
                                                />
                                            )}
                                        </Field>
                                    </>
                                );
                            }}
                        />
                    </FieldSet>
                </form>
            </CardContent>
            <CardContent>
                {form.formState.errors.root?.serverError && (
                    <RedAlert
                        title={'Something went wrong'}
                        message={
                            form.formState.errors.root?.serverError
                                .message as string
                        }
                    />
                )}{' '}
            </CardContent>
            <CardFooter>
                <Button
                    disabled={processingStatus}
                    form="sign-in-form"
                    type="submit"
                    className="w-full"
                >
                    Sign In
                </Button>
            </CardFooter>
        </Card>
    );
}
