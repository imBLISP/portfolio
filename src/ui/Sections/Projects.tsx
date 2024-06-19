"use client";

import { Badge } from "@/components/ui/badge";
import { MaxWidthWrapper } from "../layout/max-width-wrapper";
import { useSectionInView } from "./use-section-in-view";
import Image from "next/image";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  return (
    <section className="bg-gradient-to-b from-transparent from-40% to-[#fafafa] pb-20">
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
        <div className="py-2 text-2xl font-medium">
            I work on projects in my free time. I have worked on a full stack ecommerce website to buy/sell digital art, A recommendation system for movies, A Frontend only application. 
        </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
