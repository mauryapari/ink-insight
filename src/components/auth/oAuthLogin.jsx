'use client';
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";

const OauthLogin = () => {
    const clickHandler = () => {
        signIn("github", {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        })
    }
    return(
        <Button size={"lg"} className="rounded-md" onClick={()=>clickHandler()}><FaGithub className="h-9 w-9"/></Button>
    )
}

export default OauthLogin;