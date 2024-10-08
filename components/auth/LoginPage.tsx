"use client"

import { useState, useTransition } from "react";

import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, type loginType } from "@/lib/schemas/login";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import AuthenticationCard from "../my-ui/auth-card/AuthCard";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import FormError from "../form/FormError";
import FormSuccess from "../form/FormSucess";

import { login } from "@/lib/actions/user";

const LoginPage = () => {
    const [isPending, startTransation] = useTransition();

    const [formError, setFormError] = useState<string | undefined>(undefined);
    const [formSuccess, setFormSuccess] = useState<string | undefined>(undefined);

    const form = useForm<loginType>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (values: loginType) => {
        setFormError(undefined);
        setFormSuccess(undefined);

        startTransation(async () => {
            const data = await login(values);

            setFormError(data?.error);
            setFormSuccess(data?.success);
        });
    }

    return (
        <main className="flex flex-1 justify-center items-center">
            <AuthenticationCard
                headerLabel="Sign In"
                backButtonLabel="Don't have an account?"
                backButtonHref="/register"
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="email"
                                                placeholder="sample@sample.com"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="password"
                                                placeholder="******"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormError message={formError} />
                        <FormSuccess message={formSuccess} />
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isPending}
                        >
                            Login
                        </Button>
                    </form>
                </Form>
            </AuthenticationCard>
        </main>
    )
}

export default LoginPage;