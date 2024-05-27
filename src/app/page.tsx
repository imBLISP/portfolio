"use client";

import React, { Suspense } from "react";
import { Nav } from "../components/ui/nav";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="flex justify-center">
        <div className="w-4/5">
          <div className="flex h-dvh justify-center items-center bg-slate-100">
            <div className="flex flex-wrap-reverse xl:flex-nowrap flex-row gap-4 bg-slate-200 basis-4/5 h-3/4">
              <div className="grow basis-1/2 bg-slate-300">
              </div>
              <div className="grow basis-1/2 bg-slate-300">
              </div>
            </div>
          </div>
          <div className="flex h-dvh justify-center items-center bg-slate-100">
            <div className="flex flex-row gap-4 bg-slate-200 basis-4/5 h-3/4">
              <div className="basis-1/2 bg-slate-300">
              </div>
              <div className="basis-1/2 bg-slate-300">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
