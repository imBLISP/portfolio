"use client";

import { useState, useEffect, useRef, forwardRef } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { useContainerDimensions } from "../hooks/use-container-dimensions";
import { GlobeMethods } from "react-globe.gl";

const GlobeTmpl = dynamic(() => import("./globe"), {
  ssr: false,
});
const Globe = forwardRef(function Globe(props, ref) {
  return <GlobeTmpl {...props} forwardRef={ref} />;
});

const arcsData = [
  {
    startLat: 18,
    startLng: 73,
    endLat: 37,
    endLng: -122,
    color: () => "#ffffff",
    label: "Kanverse",
    stroke: 1000,
  },
];

const gData = [
  {
    lat: 18,
    lng: 73,
    size: 25,
    color: "#ffffff",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

const World = () => {
  const globeRef = useRef<GlobeMethods>();
  const componentRef = useRef<HTMLDivElement>(null);

  const [globeReady, setGlobeReady] = useState(false);
  const [countries, setCountries] = useState({ features: [] });

  const { width } = useContainerDimensions(componentRef);

  useEffect(() => {
    if (!globeRef.current) {
      return;
    }
    globeRef.current.controls().enableZoom = false;
    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 0.7;
    globeRef.current.pointOfView({ lat: 0, lng: 0, altitude: 1.7 });
  }, [globeReady]);

  useEffect(() => {
    fetch("/api/countries")
      .then((res) => res.json())
      .then((res) => {
        const x = JSON.parse(res);
        setCountries(x);
      });
  }, []);

  return (
    <div
      ref={componentRef}
      className="mx-auto max-w-screen-lg w-full overflow-hidden flex flex-row justify-center min-h-[500px]"
    >
      {!globeReady && (
        <Skeleton
          className="mt-20 rounded rounded-full"
          style={{ width: `${width - 100}px`, height: `${width - 100}px` }}
        ></Skeleton>
      )}
      <Globe
        ref={globeRef}
        onGlobeReady={() => setGlobeReady(true)}
        width={width}
        height={width}
        atmosphereColor="#000000"
        backgroundColor="#ffffff"
        hexPolygonsData={countries.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.3}
        hexPolygonUseDots={true}
        hexPolygonColor={() => "#ffffff"}
        arcsData={arcsData}
        arcStroke={1.5}
        arcColor={() => "#36454F"}
        arcAltitude={0.4}
        arcLabel={() => "Kanverse"}
        htmlElementsData={gData}
        htmlElement={(d) => {
          const el = document.createElement("div");
          el.innerHTML = markerSvg;
          el.style.color = d.color;
          el.style.width = `${d.size}px`;

          el.style["pointer-events"] = "auto";
          el.style.cursor = "pointer";
          el.onclick = () => console.info(d);
          return el;
        }}
      />
    </div>
  );
};

export default World;
