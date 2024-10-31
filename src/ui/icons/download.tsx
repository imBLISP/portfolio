import { cn } from "@/lib/utils";
import { useTheme } from "../layout/theme-context";
import { FaFileDownload } from "react-icons/fa";

export function Download({ className }: { className: string }) {
  const {theme} = useTheme();
  return (
    <FaFileDownload className={className} color={cn({ "#000000": theme == 'light', "#ffffff": theme == 'dark' })} />
  );
}
