"use client";

import { Badge } from "@/ui/components/badge";
import { MaxWidthWrapper } from "../layout/max-width-wrapper";
import { useSectionInView } from "./use-section-in-view";
import Image from "next/image";
import { ProjectsData, ProjectsDataDetailed } from "@/lib/data/data";
import Link from "next/link";
import { Tweet } from "react-tweet";
import { useTheme } from "../layout/theme-context";
import { LinkArrow } from "@/ui/icons"

export default function Projects() {
  const { theme } = useTheme();
  const { ref } = useSectionInView("Projects");

  return (
    <section className="bg-gradient-to-b pt-10 from-transparent from-40% to-[#fafafa] dark:to-[#111111] pb-10 overflow-hidden">
      <div ref={ref}>
        <MaxWidthWrapper>
          <div className="text-4xl font-bold pb-10 pt-10" id="projects">
            Projects
          </div>
        </MaxWidthWrapper>
        <div
          className="overflow-hidden ml-[50%] translate-x-[-50%] w-[1566px]"
          style={{ maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 1) 60%)" }}
        >
          <div className="flex flex-row shrink justify-center gap-4 px-10 box-border">
            <div>
              <div className="relative">
                <Image
                  src="/candyland.png"
                  width="1000"
                  height="1000"
                  alt="Image of a candyland project"
                  className="dark:brightness-[90%] border rounded-md overflow-hidden shadow-md hover:brightness-90 transition duration-150 ease-in"
                  quality={10}
                ></Image>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Image
                src="/ecommerce_1.png"
                width="1000"
                height="1000"
                alt="Image of a candyland project"
                className="dark:brightness-[90%] border rounded-md overflow-hidden shadow-md hover:brightness-90 transition duration-150 ease-in"
                quality={10}
              ></Image>
              <Image
                src="/ecommerce_3.png"
                width="1000"
                height="1000"
                alt="Image of a candyland project"
                className="dark:brightness-[90%] border rounded-md overflow-hidden shadow-md hover:brightness-90 transition duration-150 ease-in"
                quality={10}
              ></Image>
            </div>
            <div>
              <Image
                src="/ecommerce_2.png"
                width="1000"
                height="1000"
                alt="Image of a candyland project"
                className="dark:brightness-[90%] border rounded-md overflow-hidden shadow-md hover:brightness-90 transition duration-150 ease-in"
                quality={10}
              ></Image>
            </div>
            <div>
              <Image
                src="/recommendation_system.png"
                width="1000"
                height="1000"
                alt="Image of a candyland project"
                className="dark:brightness-[90%] border rounded-md overflow-hidden shadow-md hover:brightness-90 transition duration-150 ease-in"
                quality={10}
              ></Image>
            </div>
          </div>
        </div>
        <MaxWidthWrapper>
          <div className="pt-10 pb-10 text-xl font-medium text-neutral-500">
            I love building projects in my freetime. Here are some things I&apos;ve worked on recently.
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {ProjectsDataDetailed.map(({ date, title, description, tags, link, preview_type, preview_link }, index) => (
              <Link href={link || "https://dub.sh/vineet"} key={index} rel="noopener noreferrer" target="_blank">
                <div
                  key={index}
                  className="border rounded-xl p-5 transition duration-300 hover:border-neutral-400 dark:hover:border-neutral-900 dark:hover:bg-black hover:bg-white"
                >
                  <div className="flex items-center gap-2">
                    <div className="font-medium text-sm text-neutral-500 py-2">
                      {date}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-xl py-2">{title}</div>
                    <LinkArrow className="w-4 h-4 text-neutral-500" />
                  </div>
                  <div className="font-medium text-sm py-2 text-neutral-500">
                    {description}
                  </div>
                  <div className={`${theme === "dark" ? "dark" : "light"}`}>
                    {preview_type === "twitter" && preview_link && (
                      <div className="drop-shadow-xl tweet-embed">
                        <Tweet id={preview_link} />
                      </div>
                    )}
                    {preview_type === "image" && preview_link && (
                      <Image className="my-5 dark:brightness-[90%] border rounded-xl drop-shadow-xl" src={preview_link} alt="Image of a project" width="1000" height="1000" quality={50} />
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {tags.map((tag) => (
                      <Badge key={tag} className="h-8 rounded-md">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
            <div className="flex flex-col gap-4">
              {ProjectsData.map(({ date, title, description, tags, link }, index) => (
                <Link href={link || "https://dub.sh/vineet"} key={index} rel="noopener noreferrer" target="_blank">
                  <div
                    key={index}
                    className="border rounded-xl p-5 transition duration-300 hover:border-neutral-400 dark:hover:border-neutral-900 dark:hover:bg-black hover:bg-white"
                  >
                    <div className="flex items-center gap-2">
                      <div className="font-medium text-sm text-neutral-500 py-2">
                        {date}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="font-semibold text-xl py-2">{title}</div>
                      <LinkArrow className="w-4 h-4 text-neutral-500" />
                    </div>
                    <div className="font-medium text-sm py-2 text-neutral-500">
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
                </Link>
              ))}

            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
