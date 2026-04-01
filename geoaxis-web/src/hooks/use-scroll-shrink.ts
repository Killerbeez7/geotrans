import { useState, useEffect } from "react";

export const useScrollShrink = (threshold = 16) => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (window.innerWidth < 768) {
        setIsShrunk(false);
        return;
      }

      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const shouldShrink = window.scrollY > threshold;
        setIsShrunk((prev) => (prev === shouldShrink ? prev : shouldShrink));
        ticking = false;
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [threshold]);

  return isShrunk;
};
