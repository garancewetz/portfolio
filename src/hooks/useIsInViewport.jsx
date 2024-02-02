import { useMemo, useEffect, useState } from "react";

export default function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        rootMargin: "-40% 0px 0px 0px", // Marge de 30% en haut
      }
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
