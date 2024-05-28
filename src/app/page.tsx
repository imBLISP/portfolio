import React, { Suspense } from "react";
import Home from "@/ui/Sections/home";
import About from "@/ui/Sections/about";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function App() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-4/5">
          <Home></Home>
          <About></About>
        </div>
      </div>
    </div>
  );
}
