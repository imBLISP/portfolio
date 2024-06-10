import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import NavTabs from "@/ui/layout/nav-tabs";
import Providers from "./providers";
import { Suspense } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Vineet",
  description: "Vineet's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <Providers>
          <div className="min-h-screen w-full">
            <div className="sticky z-10 top-0 h-16 border-b border-gray-200 bg-white/50 backdrop-blur-lg flex justify-center">
              <div className="basis-4/5 md:basis-3/5 max-w-screen-lg flex justify-between">
                <div className="flex flex-row items-center">
                    <NavTabs />
                </div>
                <div className="flex flex-row items-center">
                  <Button variant="ghost" className="text-base">Dark</Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="basis-4/5 grow-0 overflow-hidden md:basis-3/5 max-w-screen-lg w-full">
                {children}
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
