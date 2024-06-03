"use client"

import { useSectionInView } from "./use-section-in-view";

export default function Home() {
    const {ref} = useSectionInView("Home")
    return (
        <div ref={ref} className="flex h-dvh justify-center items-center bg-slate-100" id="home">
            <div className="flex flex-wrap-reverse xl:flex-nowrap flex-row gap-4 bg-slate-200 basis-4/5 h-3/4">
                <div className="grow basis-1/2 bg-slate-300 flex flex-col gap-4">
                    <div className="bg-slate-400 basis-2/3 text-8xl">{"Hi, I'm vineet"}</div>
                    <div className="bg-slate-400 basis-1/3">gsd</div>
                </div>
                <div className="grow basis-1/2 bg-slate-300">
                </div>
            </div>
        </div>
    );
}
