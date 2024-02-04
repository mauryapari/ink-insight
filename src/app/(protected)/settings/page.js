import { Button } from "@/components/ui/button";
import { auth, signOut } from "../../../../auth";
import { FaSignOutAlt } from "react-icons/fa";

export default async function SettingsPage() {
    const session = await auth();

    console.log(session);
    return (
        <div>
            <form action={async () => {
                    "use server";
                    await signOut();
                }}>
                    <Button type="submit"><FaSignOutAlt /></Button>
                </form>
            Settings Page
        </div>
    )
}