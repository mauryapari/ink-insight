"use client";

import Link from 'next/link';
import { useForm } from "react-hook-form";
import CardWrapper from "../card-wrapper";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema } from "@/schema";

export default function RegisterForm() {
    const form = useForm({
        resolver: zodResolver(RegisterFormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <CardWrapper headerLabel={'Register'}
            showOtherLoginOptions={true}
            className="border-2"
            footerContent={
                <Link href="/auth/login" className="text-sm my-2 underline underline-offset-4">Have an Account? Log In...</Link>
            }>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">

                        <FormField
                            control={form.control}
                            name="name"
                            render={(field) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Name" {...field} className="border-2" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={(field) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Email" {...field} type="email" className="border-2" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={(field) => (
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
                    <Button size={"full"}>Create</Button>
                </form>
            </Form>
        </CardWrapper>
    )
}