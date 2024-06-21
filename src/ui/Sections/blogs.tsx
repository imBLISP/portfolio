"use client";

import { Badge } from "@/components/ui/badge";
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
} from "@/components/ui/carousel";
import Link from "next/link";

export default function Blogs() {
  const { ref } = useSectionInView("Blogs");
  return (
    <section className="bg-gradient-to-b from-transparent from-40% to-[#fafafa]">
      <MaxWidthWrapper>
        <div ref={ref} id="blogs">
          <div className="text-4xl font-medium pb-10 pt-10">Blogs</div>
          <Carousel
            opts={{
              loop: true,
            }}
            className="pb-32"
          >
            <CarouselContent className="">
              {BlogsData.map(({ date, title, description, tags, href}, index) => (
                <CarouselItem key={index} className="basis md:basis-1/3">
                  <Link href={href}>
                  <div className="border-2 rounded-xl p-5">
                    <div className="h-44"></div>
                    <div className="font-medium text-md py-2">{date}</div>
                    <div className="font-semibold text-2xl py-2">{title}</div>
                    <div className="font-medium text-md py-2">
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
