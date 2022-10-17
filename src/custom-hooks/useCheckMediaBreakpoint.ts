import { useEffect, useState } from "react";

export const useCheckMediaBreakpoint = (): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const handleResizeEventCallback = (): void => {
      if (window.innerWidth > 1024) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    window.addEventListener("resize", handleResizeEventCallback);

    return () => {
      window.removeEventListener("resize", handleResizeEventCallback);
    };
  }, []);
  return isDesktop;
};
