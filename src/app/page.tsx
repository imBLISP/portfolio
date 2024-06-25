import React, { Suspense, useEffect } from "react";
import Home from "@/ui/Sections/home";
import Blogs from "@/ui/Sections/blogs";
import Experience from "@/ui/Sections/Experience";
import Projects from "@/ui/Sections/Projects";
import Contact from "@/ui/Sections/contact";
import { useParams } from "next/navigation";
import Footer from "@/ui/Sections/Footer";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function App() {
  return (
    <div>
      <Home></Home>
      <div className="w-full border-t pt-3 pb-10"></div>
      <Experience></Experience>
      <div className="w-full border-t pb-10"></div>
      <div className="w-full pt-3 pb-10"></div>
      <Blogs></Blogs>
      <div className="w-full border-t pb-10"></div>
      <Projects></Projects>
      <div className="w-full border-t pb-10"></div>
      <Contact></Contact>
      <div className="w-full border-t pb-10"></div>
      <Footer></Footer>
    </div>
  );
}
