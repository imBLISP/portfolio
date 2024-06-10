import React, { Suspense } from "react";
import Home from "@/ui/Sections/home";
import Blogs from "@/ui/Sections/blogs";
import Experience from "@/ui/Sections/Experience";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function App() {
  return (
    <div>
          <Home></Home>
          <Experience></Experience>
          <Blogs></Blogs>
    </div>
  );
}
