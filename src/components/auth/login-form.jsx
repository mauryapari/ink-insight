"use client";

import Link from 'next/link';
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

import { useForm } from 'react-hook-form';
import CardWrapper from '../card-wrapper';
import { LoginFormSchema } from '@/schema';
import { login } from '../../../actions/login';
import {toast} from 'sonner';
import { useRouter } from 'next/navigation';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export default function LoginForm() {
    const router = useRouter();
    const form = useForm({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (data) => {
        const res = await login(data);
        if(res.error) {
            toast.error(res.error);
        } else {
            toast.success(res.success);
            router.push(DEFAULT_LOGIN_REDIRECT);
        }
    };

    return (
        <CardWrapper headerLabel={'Login'}
            showOtherLoginOptions={true}
            footerContent={
                <Link href="/auth/register" className='text-sm my-2 underline underline-offset-4'>Don&apos;t Have a Account? Create one...</Link>
            }>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Mail" {...field} type="email" className="border-2"/>
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
                                        <Input placeholder="Enter Password" {...field} type="password" className="border-2" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button size={"full"} className="shadow-md drop-shadow-sm">Login</Button>
                </form>
            </Form>
        </CardWrapper>
    )
}