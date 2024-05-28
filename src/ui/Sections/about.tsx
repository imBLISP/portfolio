"use client"

import { useContext } from "react";
import { ActiveSectionContext } from "./provider";

export default function About() {
    const {activeSection, setActiveSection} = useContext(ActiveSectionContext)

    return (
        <div className="flex h-dvh justify-center items-center bg-slate-100" id="about">
            <div className="flex flex-row gap-4 bg-slate-200 basis-4/5 h-3/4">
                <div className="basis-1/2 bg-slate-300">
                </div>
                <div className="basis-1/2 bg-slate-300">
                </div>
            </div>
        </div>
    );
}
