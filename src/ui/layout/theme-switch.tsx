"use client"

import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-context";

export default function ThemeSwitch() {
  const {toggleTheme} = useTheme();
    return(
        <Button variant="link" className="text-base" onClick={toggleTheme}>Dark</Button>
    );
}