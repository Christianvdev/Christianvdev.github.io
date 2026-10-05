import { useEffect, useRef, useState } from "react";

// Counts from 0 up to "target" (over 1.5 seconds) when it scrolls into view.
export default function Counter({ target }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / 1500, 1);
        setValue(Math.round(target * (1 - Math.pow(1 - progress, 3)))); // ease-out
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <b ref={ref}>{value}</b>;
}
