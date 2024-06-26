"use client";

import { SectionId, SectionName } from "@/lib/types";
import { useActiveSectionContext } from "../Sections/provider";
import { NavItems } from "@/lib/data/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useMediaQuery } from "../hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import useScrollBehavior from "../hooks/use-scroll-behavior";
import { usePathname, useRouter } from "next/navigation";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function NavTabs() {
  const router = useRouter();
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  useScrollBehavior(open);
  const { device, isDesktop } = useMediaQuery();
  const { activeSection, setActiveSection, setActiveSectionChangeTime } =
    useActiveSectionContext();

  const scrollToId = (id: SectionId, timeout: number) => {
    const section = document.querySelector(id);
    setTimeout(
      () =>
        section?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        }),
      timeout
    );
  };

  const handleNavItemClick = (name: SectionName) => {
    setActiveSection(name);
    setActiveSectionChangeTime(new Date());
  };

  const handleDrawerItemClick = (
    name: SectionName,
    id: SectionId,
    timeout: number = 0
  ) => {
    setActiveSection(name);
    setActiveSectionChangeTime(new Date());

    setOpen(false);
    if (pathName == "/") {
      scrollToId(id, timeout);
    } else {
      setTimeout(() => router.push(`/${id}`), timeout);
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
            href={`/${id}`}
            onClick={() => handleNavItemClick(name)}
            className={cn(
              "pr-8 py-2 h-10 w-max leading-6 text-sm text-black text-foreground/70 transition-colors hover:text-foreground/100 group inline-flex items-center justify-center",
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
        <DrawerTrigger
          className={cn(
            "pr-8 py-2 h-10 w-max text-sm text-black text-foreground/70 transition-colors hover:text-foreground/100 group inline-flex items-center justify-center"
          )}
        >
          Drawer
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            {NavItems.map(({ name, id }) => (
              <Button
                key={name}
                onClick={() => handleDrawerItemClick(name, id, 600)}
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
