"use client";

import { ExperienceData } from "@/lib/data/data";
import ReactGlobe from "../globe/react-globe";
import { MaxWidthWrapper } from "../layout/max-width-wrapper";
import { useSectionInView } from "./use-section-in-view";
import { Badge } from "@/ui/components/badge";
import { FaPython } from "react-icons/fa";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section className="bg-gradient-to-b from-transparent from-40% to-[#fafafa] dark:to-[#111111] pb-10">
      <MaxWidthWrapper>
        <div ref={ref} className="">
          <div className="text-4xl font-semibold pb-6 pt-10" id="experience">
            Experience
          </div>
          <ReactGlobe></ReactGlobe>
          <div className="grid md:grid-cols-2 gap-4 pt-6">
            {ExperienceData.map(({ date, title, description, tags }, index) => (
              <div
                key={index}
                className="border rounded-xl p-5 transition duration-300 hover:border-neutral-400 hover:bg-white dark:hover:bg-black dark:hover:border-neutral-900"
              >
                <div className="font-medium text-sm text-neutral-500 py-2">
                  {date}
                </div>
                <div className="font-semibold text-xl py-2">{title}</div>
                <div className="font-medium text-sm py-2 text-neutral-500">
                  {description}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {tags.map((tag) => (
                    <Badge variant="default" key={tag} className="h-8 rounded-md gap-2">
                      {/* <FaPython className="h-10"/> */}
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
