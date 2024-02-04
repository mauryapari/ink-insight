"use server"

import { LoginFormSchema } from "@/schema";
import { signIn } from "../auth";
import AuthError from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const login = async (values) => {
    const validatedData = LoginFormSchema.safeParse(values);

    if(!validatedData.success) {
        return {error: "Invalid Field!"};
    }

    console.log(validatedData);

    const { email, password } = validatedData.data;

    try {
        const res = await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
        if(!res) {
            throw new Error("Something went wrong");
        }
    } catch(err) {
        if(err instanceof AuthError) {
            console.log(err);
            switch (err.type) {
                case "CredentialsSignIn":
                    return {error: "Invalid Credentials"};
                default:
                    return {error: 'Something went Wrong!'};
            }
        }

        throw err;
    }
}