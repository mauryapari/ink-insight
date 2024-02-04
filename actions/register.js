"use server"

import { db } from "@/lib/db";
import { RegisterFormSchema } from "@/schema";
import bcryptjs from "bcryptjs";

export const register = async (values) => {
    const validatedData = RegisterFormSchema.safeParse(values);

    if(!validatedData.success) {
        return {error: "Invalid Field!"};
    }

    const { email, password, name } = validatedData.data;
    const hashedPassword = await bcryptjs.hash(password, 10);

    const existingUser = await db.user.findUnique({
        where:{
            email
        }
    });

    console.log(existingUser);

    if(existingUser) {
        return {error: "Email Already in Use!"};
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    //TODO: Send verfication email;
    console.log(values);
    return {success: 'User Created'};
}