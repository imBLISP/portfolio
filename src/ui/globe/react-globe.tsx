"use client";

import { useState, useEffect, useRef, forwardRef } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/ui/components/skeleton";
import { useContainerDimensions } from "../hooks/use-container-dimensions";
import { GlobeMethods, GlobeProps } from "react-globe.gl";
import { useMediaQuery } from "../hooks/use-media-query";
import { useTheme } from "../layout/theme-context";
import { cn } from "@/lib/utils";

const GlobeTmpl = dynamic(() => import("./globe"), {
  ssr: false,
});

const Globe = forwardRef(function Globe(props: GlobeProps, ref) {
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
  {
    startLat: 18,
    startLng: 73,
    endLat: 12.9716,
    endLng: 77.5946,
    color: () => "#ffffff",
    label: "Bangalore",
    stroke: 1000,
  },
];

const gData = [
  {
    lat: 18,
    lng: 73,
    size: 25,
    color: "#ffffff",
    textColor: "#3f3f46",
    text: "Me",
  },
  {
    lat: 37,
    lng: -122,
    size: 25,
    color: "#ffffff",
    textColor: "#3f3f46",
    text: "Kanverse.ai",
  },
  {
    lat: 12.9716,
    lng: 77.5946,
    size: 25,
    color: "#ffffff",
    textColor: "#3f3f46",
    text: "Cognologix (Uber)",
  },
];

const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};

const getDistanceFromLatLonInKm = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};

const markerSvg = `<div><svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg></div>`;

const World = () => {
  const globeRef = useRef<GlobeMethods>();
  const componentRef = useRef<HTMLDivElement>(null);

  const [globeReady, setGlobeReady] = useState(false);
  const [countries, setCountries] = useState({ features: [] });

  const { width } = useContainerDimensions(componentRef);
  const { device, isDesktop } = useMediaQuery();

  const { theme } = useTheme();

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
        backgroundColor={cn({
          "#ffffff": theme == "light",
          "#000000": theme == "dark",
        })}
        hexPolygonsData={countries.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.3}
        hexPolygonUseDots={true}
        hexPolygonColor={() => "#ffffff"}
        arcsData={arcsData}
        arcStroke={1}
        arcColor={() => (theme == "light" ? "#52525b" : "#71717a")}
        arcAltitude={(d: {
          startLat?: number;
          startLng?: number;
          endLat?: number;
          endLng?: number;
        }) => {
          let dist = 0;
          if (d.startLat && d.startLng && d.endLat && d.endLng)
            dist = getDistanceFromLatLonInKm(
              d.startLat,
              d.startLng,
              d.endLat,
              d.endLng
            );
          console.log(dist / 100000.0);
          return (dist / 100000.0) * 2.5;
        }}
        arcLabel={() => "Kanverse"}
        htmlElementsData={gData}
        htmlElement={(d: {
          text?: string;
          textColor?: string;
          size?: number;
          color?: string;
        }) => {
          const el = document.createElement("div");
          const textel = document.createElement("div");
          if (d.text) textel.textContent = d.text;
          if (d.textColor) textel.style.color = d.textColor;
          if (isDesktop) {
            textel.style.fontSize = "16px";
          } else {
            textel.style.fontSize = "10px";
          }
          textel.style.background = "white";
          textel.style.borderRadius = "5px";
          textel.style.paddingInline = "5px";
          const svgel = document.createElement("div");
          svgel.innerHTML = markerSvg;
          // el.appendChild(svgel);
          el.appendChild(textel);
          svgel.style.width = `${d.size}px`;
          if (d.color) svgel.style.color = d.color;

          el.style.pointerEvents = "auto";
          el.style.cursor = "pointer";
          el.onclick = () => console.info(d);
          return el;
        }}
      />
    </div>
  );
};

export default World;
