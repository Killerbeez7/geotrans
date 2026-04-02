import { useState, useEffect, useRef } from "react";

export const useScrollShrink = (threshold = 16, duration = 300) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let ticking = false;

    const clearTransitionTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const startTransition = () => {
      setIsTransitioning(true);
      clearTransitionTimeout();

      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        timeoutRef.current = null;
      }, duration);
    };

    const onScroll = () => {
      if (window.innerWidth < 768) {
        clearTransitionTimeout();
        setIsTransitioning(false);
        setIsShrunk(false);
        return;
      }

      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const shouldShrink = window.scrollY > threshold;

        setIsShrunk((prev) => {
          if (prev !== shouldShrink) {
            startTransition();
            return shouldShrink;
          }
          return prev;
        });

        ticking = false;
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      clearTransitionTimeout();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [threshold, duration]);

  return { isShrunk, isTransitioning };
};
