import { LoginFormSchema } from "@/schema";
import Credentials from "next-auth/providers/credentials";
import Github  from "next-auth/providers/github";
import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";

const authConfig = {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedData = LoginFormSchema.safeParse(credentials);

                if(validatedData.success) {
                    const {email, password} = validatedData.data;

                    const user = await db.user.findUnique({where:{email}});
                    // console.log("user is", user);
                    if(!user && !user?.password) {
                        return null;
                    } 

                    const passwordMatch = bcryptjs.compare(password, user.password);

                    if(passwordMatch) {
                        return user;
                    }
                }

                return null;
            }
        }),
        Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ]
}

export default authConfig;