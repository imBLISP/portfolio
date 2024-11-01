"use client";

import { Button } from "@/ui/components/button";
import { useSectionInView } from "./use-section-in-view";
import { MaxWidthWrapper } from "../layout/max-width-wrapper";
import { LinkArrow, Download, Linkedin, Github, Twitter } from "@/ui/icons";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { ref } = useSectionInView("Home");

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const buttonGap = 2;

  return (
    <section className="bg-gradient-to-b from-transparent from-40% to-[#fafafa] dark:to-[#111111] pb-10" id="home">
      <MaxWidthWrapper className="mt-4 md:mt-24 min-h-[400px]">
        <div
          ref={ref}
          className="flex flex-col justify-left items-left"
        >
          <div className="flex flex-row items-center gap-3">
            {/* <div className="h-4 w-4 rounded-full bg-green-500"></div> */}
            <div className="py-5 text-sm font-medium text-zinc-500">Last updated : 1 Nov 2024</div>
          </div>
          <div className="border-r border-b border-dashed py-5 text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-5% dark:from-50% from-zinc-500 dark:from-white to-black dark:to-zinc-300 to-65% dark:to-65% inline-block">
            Hey, I&apos;m Vineet.
          </div>
          <div className="border-r border-dashed py-2 text-xl text-zinc-500 font-medium">
            I&apos;m a full stack developer with experience in{" "}
            <strong className="text-xl text-zinc-950 dark:text-zinc-100 font-medium">Python</strong>
            ,<strong className="text-xl text-zinc-950 dark:text-zinc-100 font-medium"> Next</strong>{" "}
            and{" "}
            <strong className="text-xl text-zinc-950 dark:text-zinc-100 font-medium">
              AI/Machine learning
            </strong>
            . I do independent research, machine learning, gamedev, and other creative work.
          </div>
          <div className="py-10 flex flex-col md:flex-row md:justify-left gap-6">
            <Button
              variant="default"
              className="text-base h-14 font-medium flex flex-row gap-3"
              onClick={() => router.push("/#contact")}
            >
              <div>Contact me here</div>
              <LinkArrow className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="text-base h-14 font-medium flex flex-row gap-3"
              asChild
            >
                <a href="/vineet_resume.pdf" download="vineet_resume">
                <div className="flex flex-row gap-2 items-center">
                  <div>Download CV</div>
                  <Download className="w-[19px] h-[19px]" />
                </div>
                </a>
            </Button>
            <Button
              variant="outline"
              className="text-base h-14 font-medium flex flex-row gap-2"
              onClick={() => openInNewTab("https://www.linkedin.com/in/vineetnpatil/")}
            >
              Linkedin
              <Linkedin className="h-7 w-7" />
            </Button>
            <Button
              variant="outline"
              className="text-base h-14 font-medium flex flex-row gap-2"
              onClick={() => openInNewTab("https://github.com/imBLISP")}
            >
              Github
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              className="text-base h-14 font-medium flex flex-row gap-2"
              onClick={() => openInNewTab("https://x.com/vinnapx")}
            >
              Twitter
              <Twitter className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
