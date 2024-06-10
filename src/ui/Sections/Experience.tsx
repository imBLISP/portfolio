"use client";

import Globe from "react-globe.gl";
import { useSectionInView } from "./use-section-in-view";
import { Button } from "@/components/ui/button";
import { Suspense, useEffect, useRef, useState } from "react";
import { useContainerDimensions } from "../hooks/use-container-dimensions";

export default function Experience() {
  const [size, setSize] = useState(200);
  const { ref } = useSectionInView("Experience");
  const componentRef = useRef();
  const { width, height } = useContainerDimensions(componentRef);
  const globeEl = useRef();

  useEffect(() => {
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.7;
    globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 1.7 });
  }, []);
  return (
    <div
      ref={ref}
      id="experience"
    >
      <div ref={componentRef} className="relative w-full overflow-hidden flex flex-row justify-center">
        <Suspense fallback={<div></div>}>
        <Globe
          ref={globeEl}
          width={width}
          height={width}
          backgroundColor="#ffffff"
        ></Globe>
 
        </Suspense>
     </div>
    </div>
  );
}
