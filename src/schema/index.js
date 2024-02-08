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

export const BlogFormSchema = z.object({
    catSlug :z.string(1, {
        message: 'Please select a category',
    }),
    title: z.string().min(4,{
        message: 'Title should be 4 char long',
    }),
    description: z.string().min(4, {
        message: 'Description should be 4 char long.'
    })
})