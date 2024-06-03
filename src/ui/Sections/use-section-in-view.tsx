"use client"

import { SectionName } from "@/lib/types";
import { useEffect } from "react";
import { useActiveSectionContext } from "./provider";
import { useInView } from "react-intersection-observer";

export function useSectionInView(SectionName: SectionName, IntersectionOptions = {threshold: 0.75}) {
    const {setActiveSection, activeSectionChangeTime} = useActiveSectionContext()
    const [ref, inView] = useInView(IntersectionOptions)

    useEffect(() => {
        let dateTime = new Date()
        if (inView && dateTime.getTime() - activeSectionChangeTime.getTime() >= 1000) {
            setActiveSection(SectionName)
        }
    }, [inView, SectionName, setActiveSection, activeSectionChangeTime]);

    return {ref}
}