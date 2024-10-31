import React from "react";
import Home from "@/ui/Sections/home";
import Blogs from "@/ui/Sections/blogs";
import Experience from "@/ui/Sections/Experience";
import Projects from "@/ui/Sections/Projects";
import Contact from "@/ui/Sections/contact";
import Footer from "@/ui/Sections/Footer";

export default function App() {
  return (
    <div>
      <Home />
      <div className="w-full border-t pt-3 pb-10"></div>
      <Experience />
      <div className="w-full border-t pb-10"></div>
      <div className="w-full pt-3 pb-10"></div>
      <Projects />
      <div className="w-full border-t pb-10"></div>
      <Blogs />
      <div className="w-full border-t pb-10"></div>
      <Contact />
      <div className="w-full border-t pb-10"></div>
      <Footer />
    </div>
  );
}
