import OauthLogin from "./auth/oAuthLogin";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export default function CardWrapper(props) {
    const { headerLabel, footerContent, children, showOtherLoginOptions } = props;
    return (
        <Card className="w-[400px]">
            <CardHeader className="text-xl">{headerLabel}</CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="flex flex-col">
                {showOtherLoginOptions &&
                    <div className="mb-8 pt-8 border-t-2 w-full text-center">
                        <p className="text-xs mb-4"> Sign in Via </p>
                        <OauthLogin />
                    </div>
                }
                {footerContent}
            </CardFooter>
        </Card>
    )
}