"use client"

import { useSectionInView } from "./use-section-in-view";

export default function About() {
    const {ref} = useSectionInView("About")
    return (
        <div ref={ref} className="flex h-dvh justify-center items-center bg-slate-100" id="about">
            <div className="flex flex-row gap-4 bg-slate-200 basis-4/5 h-3/4">
                <div className="basis-1/2 bg-slate-300">
                </div>
                <div className="basis-1/2 bg-slate-300">
                </div>
            </div>
        </div>
    );
}
