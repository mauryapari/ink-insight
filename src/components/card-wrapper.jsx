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
                    <div className="mb-8 pt-4 w-full text-center">
                        <div className="flex mb-8 items-center">
                            <div className="h-[1px] bg-slate-500 flex flex-1 "></div>
                            <p className="text-xs mx-4"> or </p>
                            <div className="h-[1px] bg-slate-500 flex flex-1 "></div>
                        </div>
                        <OauthLogin />
                    </div>
                }
                {footerContent}
            </CardFooter>
        </Card>
    )
}