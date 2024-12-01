"use client";

import { Button } from "@/ui/components/button";
import { useSectionInView } from "./use-section-in-view";
import { MaxWidthWrapper } from "../layout/max-width-wrapper";
import { LinkArrow, Linkedin, Github, Twitter } from "@/ui/icons";
import { ArrowDownToLine } from "lucide-react"
import { useRouter } from "next/navigation";
import Spline from '@splinetool/react-spline';

export default function Home() {
  const router = useRouter();
  const { ref } = useSectionInView("Home");

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <section className="bg-gradient-to-b from-transparent from-40% to-[#fafafa] dark:to-[#0a0a0a] pb-10 relative z-0" id="home">
      <Spline
        className="absolute inset-0 w-full h-full -z-10"
        scene="https://prod.spline.design/Z95ys6MCqk8r8QqE/scene.splinecode"
      />
      <MaxWidthWrapper className=" min-h-[600px] z-10 pointer-events-none">
        <div
          ref={ref}
          className="flex pt-[15vh] flex-col justify-left items-left"
        >
          <div className="flex flex-row items-center gap-3">
            {/* <div className="h-4 w-4 rounded-full bg-green-500"></div> */}
            <div className="py-5 text-sm font-medium text-stone-500 pointer-events-auto">Last updated : 30 Nov 2024</div>
          </div>
          <div className="w-fit py-5 text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-70% md:from-40% dark:from-50% from-neutral-500 dark:from-white to-black dark:to-neutral-300 to-85% md:to-80% dark:to-65% inline-block pointer-events-auto">
            Hey, I&apos;m Vineet.
          </div>
          <div className="w-fit py-2 text-xl text-neutral-500 font-medium pointer-events-auto">
            I&apos;m a full stack developer with experience in{" "}
            <strong className="text-xl text-neutral-950 dark:text-neutral-100 font-medium">Python</strong>
            ,<strong className="text-xl text-neutral-950 dark:text-neutral-100 font-medium"> Next</strong>{" "}
            and{" "}
            <strong className="text-xl text-neutral-950 dark:text-neutral-100 font-medium">
              AI/Machine learning
            </strong>
            . I do independent research, digital art, gamedev, and other creative work.
          </div>
          <div className="py-10 flex flex-col md:flex-row md:justify-left gap-6">
            <Button
              variant="default"
              className="dark:bg-[#dddddd] text-base font-medium flex flex-row gap-3 pointer-events-auto"
              onClick={() => router.push("/#contact")}
            >
              <div>Contact me here</div>
              <LinkArrow className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="font-medium flex flex-row gap-3 pointer-events-auto"
              asChild
            >
              <a href="/vineet_resume.pdf" download="vineet_resume">
                <div className="flex flex-row gap-2 items-center">
                  {/* <Download className="w-[18px] h-[18px]" /> */}
                  <ArrowDownToLine className="w-5 h-5" />
                  <div>Download CV</div>
                </div>
              </a>
            </Button>
            <Button
              variant="outline"
              className="font-medium flex flex-row gap-2 pointer-events-auto"
              onClick={() => openInNewTab("https://www.linkedin.com/in/vineetnpatil/")}
            >
              <Linkedin className="h-7 w-7" />
              Linkedin
            </Button>
            <Button
              variant="outline"
              className="font-medium flex flex-row gap-2 pointer-events-auto"
              onClick={() => openInNewTab("https://github.com/imBLISP")}
            >
              <Github className="h-[23.75px] w-[23.75px]" />
              Github
            </Button>
            <Button
              variant="outline"
              className="font-medium flex flex-row gap-2 items-center pointer-events-auto"
              onClick={() => openInNewTab("https://x.com/vinnapx")}
            >
              <Twitter className="h-[21px] w-[21px]" />
              Twitter
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
