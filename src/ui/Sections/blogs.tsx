"use client"

import { useSectionInView } from "./use-section-in-view";

export default function Blogs() {
    const {ref} = useSectionInView("Blogs")
    return (
        <div ref={ref} className="flex h-dvh justify-center items-center bg-slate-100" id="blogs">
        </div>
    );
}
