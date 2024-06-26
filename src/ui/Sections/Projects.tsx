"use client";

import { Badge } from "@/components/ui/badge";
import { MaxWidthWrapper } from "../layout/max-width-wrapper";
import { useSectionInView } from "./use-section-in-view";
import Image from "next/image";
import { ProjectsData } from "@/lib/data/data";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  return (
    <section className="bg-gradient-to-b pt-10 from-transparent from-40% to-[#fafafa] dark:to-[#111111] pb-10 overflow-hidden">
      <div ref={ref}>
        <MaxWidthWrapper>
          <div className="text-4xl font-bold pb-10 pt-10" id="projects">
            Projects
          </div>
        </MaxWidthWrapper>
        <div className="overflow-hidden ml-[50%] translate-x-[-50%] w-[1566px] gradient-mask-b-20">
          <div className="flex flex-row shrink justify-center gap-4 px-10 box-border">
            <div>
              <div className="relative">
                <Image
                  src="/candyland.png"
                  width="1000"
                  height="1000"
                  alt="Image of a candyland project"
                  className="border rounded-md overflow-hidden shadow-md hover:brightness-90 transition duration-150 ease-in"
                ></Image>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Image
                src="/ecommerce_1.png"
                width="1000"
                height="1000"
                alt="Image of a candyland project"
                className="border rounded-md overflow-hidden shadow-md hover:brightness-90 transition duration-150 ease-in"
              ></Image>
              <Image
                src="/ecommerce_3.png"
                width="1000"
                height="1000"
                alt="Image of a candyland project"
                className="border rounded-md overflow-hidden shadow-md hover:brightness-90 transition duration-150 ease-in"
              ></Image>
            </div>
            <div>
              <Image
                src="/ecommerce_2.png"
                width="1000"
                height="1000"
                alt="Image of a candyland project"
                className="border rounded-md overflow-hidden shadow-md hover:brightness-90 transition duration-150 ease-in"
              ></Image>
            </div>
            <div>
              <Image
                src="/recommendation_system.png"
                width="1000"
                height="1000"
                alt="Image of a candyland project"
                className="border rounded-md overflow-hidden shadow-md hover:brightness-90 transition duration-150 ease-in"
              ></Image>
            </div>
          </div>
        </div>
        <MaxWidthWrapper>
        <div className="pt-10 pb-10 text-xl font-medium text-zinc-500">
          To create new products and learn new technologies, I love building projects in my freetime. Here are some things I&apos;ve worked on recently.
        </div>
          <div className="grid md:grid-cols-2 gap-4">
            {ProjectsData.map(({ date, title, description, tags }, index) => (
              <div
                key={index}
                className="border rounded-xl p-5 transition duration-300 hover:border-zinc-400 dark:hover:border-zinc-900 dark:hover:bg-black hover:bg-white"
              >
                <div className="font-medium text-md text-zinc-500 py-2">
                  {date}
                </div>
                <div className="font-semibold text-xl py-2">{title}</div>
                <div className="font-medium text-sm py-2 text-zinc-500">
                  {description}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {tags.map((tag) => (
                    <Badge key={tag} className="h-8 rounded-md">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
