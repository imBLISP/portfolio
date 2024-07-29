import { cn } from "@/lib/utils";
import { useTheme } from "../layout/theme-context";

export default function Download({ className }: { className: string }) {
  const {theme} = useTheme();
  return (
    <svg
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 21 21"
      className={className}
    >
<path xmlns="http://www.w3.org/2000/svg" d="M5 12V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V12" stroke={cn({"#000000": theme == 'light', "#ffffff": theme=='dark'})}
 stroke-linecap="round" stroke-linejoin="round"/>
<path xmlns="http://www.w3.org/2000/svg" d="M12 3L12 15M12 15L16 11M12 15L8 11" stroke={cn({"#000000": theme == 'light', "#ffffff": theme=='dark'})} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}
