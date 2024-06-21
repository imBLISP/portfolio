"use client";

import { ActiveSectionContextProvider } from "@/ui/Sections/provider";
import ThemeContextProvider from "@/ui/layout/theme-context";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ActiveSectionContextProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
      <Toaster/>
    </ActiveSectionContextProvider>
  );
}
