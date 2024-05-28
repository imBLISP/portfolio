import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "../ui/layout/nav";
import { ActiveSectionContextProvider } from "@/ui/Sections/provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <ActiveSectionContextProvider>
          <Nav />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
