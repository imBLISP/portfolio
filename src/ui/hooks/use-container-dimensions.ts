import { RefObject, useEffect, useState } from "react";

export function useContainerDimensions(myRef: RefObject<HTMLDivElement>) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const getDimensions = ({
      offsetWidth,
      offsetHeight,
    }: {
      offsetWidth: number;
      offsetHeight: number;
    }) => ({
      width: offsetWidth,
      height: offsetHeight,
    });

    const handleResize = () => {
      if (myRef.current) {
        setDimensions(getDimensions(myRef.current));
      }
    };

    if (myRef.current != undefined) {
      setDimensions(getDimensions(myRef.current));
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);

  return dimensions;
}
