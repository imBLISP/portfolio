"use client"

import { SectionName } from "@/lib/types";
import { useEffect } from "react";
import { useActiveSectionContext } from "./provider";
import { useInView } from "react-intersection-observer";

export function useSectionInView(SectionName: SectionName, IntersectionOptions = {threshold: 0.75}) {
    const {setActiveSection} = useActiveSectionContext()
    const [ref, inView] = useInView(IntersectionOptions)

    useEffect(() => {
        if (inView) {
            setActiveSection(SectionName)
        }
    }, [inView, SectionName]);

    return {ref}
}