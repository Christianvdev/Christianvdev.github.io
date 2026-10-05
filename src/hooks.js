import { useEffect, useRef } from "react";

// Adds the class "in" to an element the first time it scrolls into view.
// The CSS (.reveal / .reveal.in) does the actual fade-up animation.
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("in");
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}
