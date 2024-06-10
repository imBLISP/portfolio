"use client";

import { ActiveSectionContextProvider } from "@/ui/Sections/provider";
import { ReactNode } from "react";

export default function Providers({children}: {children: ReactNode}) {
    return (
        <ActiveSectionContextProvider>
            {children}
        </ActiveSectionContextProvider>
    );
}