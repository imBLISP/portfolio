"use client";

import { Button } from "@/components/ui/button";
import { useSectionInView } from "./use-section-in-view";
import { Badge } from "@/components/ui/badge";
import { MaxWidthWrapper } from "../layout/max-width-wrapper";
import LinkArrow from "../icons/link-arrow";
import Download from "../icons/download";
import Linkedin from "../icons/linkedin";
import Github from "../icons/github";
import Link from "next/link";

export default function Home() {
  const { ref } = useSectionInView("Home");
  return (
    <MaxWidthWrapper className="mt-24 min-h-[400px]">
      <div
        ref={ref}
        className="flex flex-col justify-left items-left"
        id="home"
      >
        <div className="flex flex-row items-center gap-3">
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
          <div className="py-5 text-base">Online</div>
        </div>
        <div className="py-5 text-6xl font-bold">Hey, I&apos;m Vineet.</div>
        <div className="py-2 text-2xl font-medium">
          I&apos;m a full stack developer from India with experience in React,
          Next and AI/Machine learning. I enjoy building sites and apps.
        </div>
        <div className="py-10 flex flex-col md:flex-row md:justify-left gap-6">
          <Button
            variant="default"
            className="text-xl h-14 font-medium flex flex-row gap-3"
          >
            <div>Contact me here</div>
            <LinkArrow className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="text-xl h-14 font-medium flex flex-row gap-3"
            asChild
          >
            <div>
              <Download className="w-5 h-5" />
              <a href="/vineet_resume.pdf" download="vineet_resume">Download cv</a>
            </div>
          </Button>
          <Button
            variant="outline"
            className="text-xl h-14 font-medium flex flex-row gap-3"
          >
            <Linkedin className="h-7 w-7" />
            <Link href="https://www.linkedin.com/in/vineetnpatil/" rel="noopener noreferrer" target="_blank">Linkedin</Link>
          </Button>
          <Button
            variant="outline"
            className="text-xl h-14 font-medium flex flex-row gap-3"
          >
            <Github className="h-6 w-6"></Github>
            <Link href="https://github.com/imBLISP" rel="noopener noreferrer" target="_blank">Github</Link>
          </Button>
        </div>
        {/* <div className="w-full border-b-2 py-5"></div> */}
      </div>
    </MaxWidthWrapper>
  );
}
