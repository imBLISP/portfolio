import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function MaxWidthWrapper({
    className,
    children,
}: {
    className?: string,
    children: ReactNode;
}) {
    return (
    <div
        className={cn(
            "mx-auto px-10 w-full max-w-screen-lg",
            className,
        )}
    >
        {children}
    </div>
    );
}
