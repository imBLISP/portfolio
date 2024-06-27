import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import NavTabs from "@/ui/layout/nav-tabs";
import Providers from "./providers";
import ThemeSwitch from "@/ui/layout/theme-switch";
import "@/styles/globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

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
      <body className={`${roboto.className} antialiased`}>
        <div vaul-drawer-wrapper="">
          <div className="relative flex min-h-screen flex-col bg-background">
            <Providers>
              <div className="px-10 w-full sticky z-10 top-0 h-16 border-b border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-lg flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                  <NavTabs />
                </div>
                <div className="flex flex-row items-center justify-end">
                  <ThemeSwitch />
                </div>
              </div>
              <div className="">
                <div className="">
                  {children}
                </div>
              </div>
            </Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
