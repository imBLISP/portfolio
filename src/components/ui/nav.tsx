"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export const navItems = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Projects",
  },
  {
    name: "Skills",
  },
  {
    name: "Experience",
  },
  {
    name: "Contact",
  },
];

export function Nav() {
  return (
    <div className="sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 bg-white/75 backdrop-blur-lg">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        <NavigationMenu className="relative lg:block">
          <NavigationMenuList className="flex flex-row space-x-2 p-4">
            {navItems.map(({ name }) => (
              <NavigationMenuItem key={name} className="">
                <NavigationMenuTrigger>{name}</NavigationMenuTrigger>
                {/* <NavigationMenuContent>
                                <NavigationMenuLink>{name}</NavigationMenuLink>
                            </NavigationMenuContent> */}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
