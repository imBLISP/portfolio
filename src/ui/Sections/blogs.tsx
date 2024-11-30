"use client";

import { Badge } from "@/ui/components/badge";
import { MaxWidthWrapper } from "../layout/max-width-wrapper";
import { useSectionInView } from "./use-section-in-view";
import { BlogsData } from "../../lib/data/data";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/components/carousel";
import Link from "next/link";
import { useMediaQuery } from "../hooks/use-media-query";
import { cn } from "@/lib/utils";
import Processor from "../svgs/processor";

export default function Blogs() {
  const {isDesktop} = useMediaQuery();
  const { ref } = useSectionInView("Blogs");
  return (
    <section className="bg-gradient-to-b from-transparent from-40% to-[#fafafa] dark:to-[#111111]">
      <MaxWidthWrapper>
        <div ref={ref} id="blogs">
          <div className="text-4xl font-semibold pb-10 pt-10">Blogs</div>
          <div className="pb-10 text-xl font-medium text-neutral-500">
            I write blogs on my experiences and learnings. Mostly on X but you can find some of them here.
          </div>
          <Carousel
            opts={{
              loop: true,
            }}
            className={cn("pb-10", {"mx-[2rem]": !isDesktop, "mx-[0.1rem]": isDesktop})}
          >
            <CarouselContent className="">
              {BlogsData.map(({ date, title, description, tags, id}, index) => (
                <CarouselItem key={index} className="basis md:basis-1/2">
                  <Link href={`/blogs/${id}`}>
                  <div className="border rounded-xl p-5 hover:bg-white hover:border-neutral-400 transition duration-300 hover:bg-gradient-to-b from-transparent from-40% to-[#fafafa] dark:hover:bg-gradient-to-b dark:from-transparent dark:from-40% dark:to-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-black">
                    <div className="h-44 flex justify-center items-center">
                        <Processor></Processor>
                    </div>
                    <div className="font-medium text-md py-2 text-neutral-500">{date}</div>
                    <div className="font-semibold text-xl py-2">{title}</div>
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
