import * as z from "zod";

export const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, {
        message: 'Password must be present'
    })
});

export const RegisterFormSchema = z.object({
    name: z.string().min(4, {
        message: 'Name should have at least 4 char.'
    }),
    email: z.string().email(),
    password: z.string().min(6,{
        message: 'Password must be 6 char long'
    })
})