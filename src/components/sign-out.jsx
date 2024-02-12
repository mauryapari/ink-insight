import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "../../auth";
import { Button } from "./ui/button";

export default function SignOut() {
    return(
        <form action={async ()=>{
            "use server";
            await signOut();
        }}>
            <Button type="submit" size={"icon"} variant="outline"><FaSignOutAlt/></Button>
        </form>
    )
}