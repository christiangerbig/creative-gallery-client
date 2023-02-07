import { useEffect, useState } from "react";

export const useCheckBreakpoint = (breakpoint: number): boolean => {
  const [isBreakpoint, setIsBreakpoint] = useState<boolean>(false);

  useEffect(() => {
    const handleResizeEventCallback = (): void => {
      if (window.innerWidth >= breakpoint) {
        setIsBreakpoint(true);
      } else {
        setIsBreakpoint(false);
      }
    };

    window.addEventListener("resize", handleResizeEventCallback);
    handleResizeEventCallback();

    return () => {
      window.removeEventListener("resize", handleResizeEventCallback);
    };
  }, []);

  return isBreakpoint;
};
