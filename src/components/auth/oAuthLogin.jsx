import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

const OauthLogin = () => {
    return(
        <Button size={"lg"} className="rounded-md"><FaGithub className="h-9 w-9"/></Button>
    )
}

export default OauthLogin;