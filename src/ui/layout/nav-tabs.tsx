"use client";

import { SectionId, SectionName } from "@/lib/types";
import { useActiveSectionContext } from "../Sections/provider";
import { NavItems } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useMediaQuery } from "../hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import useScrollBehavior from "../hooks/use-scroll-behavior";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function NavTabs() {
  const [open, setOpen] = useState(false);
  const { device, isDesktop } = useMediaQuery();
  useScrollBehavior(open);

  const { activeSection, setActiveSection, setActiveSectionChangeTime } =
    useActiveSectionContext();

  const handleClick = (
    name: SectionName,
    date: Date,
    id: SectionId | null = null
  ) => {
    setActiveSection(name);
    setActiveSectionChangeTime(date);
    if (id) {
      setOpen(false);
      const section = document.querySelector(id);
      setTimeout(
        () =>
          section?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          }),
        600
      );
    }
  };

  if (device == null) {
    return (
      <div>
        <Skeleton className="w-24 h-6 rounded-full"></Skeleton>
      </div>
    );
  }

  if (isDesktop) {
    return (
      <div>
        {NavItems.map(({ name, id }) => (
          <Link
            href={"/" + id}
            onClick={() => handleClick(name, new Date())}
            className={cn(
              " text-foreground/70 group inline-flex h-10 w-max items-center justify-center pr-8 py-2 text-base font-medium transition-colors hover:text-foreground/100",
              { "text-foreground/100": name == activeSection }
            )}
            key={name}
          >
            {name}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger className={cn(
              "text-foreground/70 group inline-flex h-10 w-max items-center justify-center pr-8 py-2 text-base font-medium transition-colors hover:text-foreground/100",
            )}>Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            {NavItems.map(({ name, id }) => (
              <Button
                key={name}
                onClick={() => handleClick(name, new Date(), id)}
                variant="ghost"
              >
                {name}
              </Button>
            ))}
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
