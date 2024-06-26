"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-context";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      variant="link"
      className=" pr-0 py-2 h-10 w-max text-sm text-black text-foreground/70 transition-colors hover:text-foreground/100 group inline-flex items-center justify-center"
      onClick={toggleTheme}
    >
      {theme == "dark" ? "Light" : "Dark"}
    </Button>
  );
}
