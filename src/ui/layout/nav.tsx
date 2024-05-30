"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/ui/layout/navigation-menu";
import { NavItems } from "@/lib/data";
import Link from "next/link"
import { useActiveSectionContext } from "../Sections/provider";
import clsx from "clsx";
import { cn } from "@/lib/utils";

export function Nav() {
  const {activeSection} = useActiveSectionContext()

  return (
    <div className="sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 bg-white/75 backdrop-blur-lg">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        <NavigationMenu className="relative lg:block">
          <NavigationMenuList className="flex flex-row space-x-2 p-4">
            {NavItems.map(({ name, id }) => (
              <NavigationMenuItem key={name} className={cn({"bg-black": name===activeSection})}>
                <Link href={"/"+ id} className={navigationMenuTriggerStyle()}>
                    {name}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
