"use client";

import { Button } from "@/components/ui/button";
import { useSectionInView } from "./use-section-in-view";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const { ref } = useSectionInView("Home");
  return (
    <div ref={ref} className="h-[70dvh] mt-16 flex flex-col justify-center" id="home">
      <div className="basis-1/2 flex flex-col gap-12 h-dvh">
        <div className="text-base">Online</div>
        <div className="text-6xl font-bold">Hey, I&apos;m Vineet.</div>
        <div className="text-2xl font-medium">
          I&apos;m a full stack developer from India with experience in React,
          Next and AI/Machine learning. I enjoy building sites and apps.
        </div>
        <div className="flex flex-col items-left md:flex-row gap-6">
          <Button variant="default" className="basis-3/12 text-xl h-14 font-medium">Contact me here</Button>
          <Button variant="outline" className="basis-3/12 text-xl h-14 font-medium">Download cv</Button>
          <Button variant="outline" className="basis-3/12 text-xl h-14 font-medium">Linkedin</Button>
          <Button variant="outline" className="basis-3/12 text-xl h-14 font-medium">Github</Button>
        </div>
        <div className="w-full border-b-2 py-5"></div>
      </div>

    </div>
  );
}
