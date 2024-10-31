import { cn } from "@/lib/utils";
import { useTheme } from "../layout/theme-context";
import { FaSquareXTwitter } from "react-icons/fa6";

export function Twitter({ className }: { className: string }) {
    const { theme } = useTheme();

    return (
        <FaSquareXTwitter className={className} color={cn({ "#000000": theme == 'light', "#ffffff": theme == 'dark' })} />
    );
}
