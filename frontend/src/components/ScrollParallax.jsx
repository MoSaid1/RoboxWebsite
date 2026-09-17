import { useEffect, useRef, useState } from "react";
import "./ScrollParallax.css";

/**
 * Wraps children in an element whose transform is driven continuously by
 * scroll position (not a one-shot reveal). `speed` controls how far it
 * drifts as it crosses the viewport; `scale` optionally grows the element
 * from `scaleFrom` to 1 as it reaches viewport center.
 */
export default function ScrollParallax({ children, speed = 0.12, scaleFrom = null, className = "" }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const inView = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    let rafId = null;

    const update = () => {
      rafId = null;
      if (!inView.current || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1 when element center is at the bottom of the viewport, 0 at center, 1 at top
      const centerOffset = rect.top + rect.height / 2 - vh / 2;
      const progress = Math.max(-1, Math.min(1, centerOffset / (vh / 2)));
      const translate = progress * speed * -100;
      let transform = `translate3d(0, ${translate}px, 0)`;
      if (scaleFrom !== null) {
        const closeness = 1 - Math.abs(progress); // 0 at edges, 1 at center
        const scale = scaleFrom + (1 - scaleFrom) * closeness;
        transform += ` scale(${scale})`;
      }
      setStyle({ transform });
    };

    const onScroll = () => {
      if (rafId === null) rafId = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
        if (inView.current) onScroll();
      },
      { rootMargin: "20% 0px 20% 0px" }
    );
    observer.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [speed, scaleFrom]);

  return (
    <div ref={ref} className={`scroll-parallax ${className}`} style={style}>
      {children}
    </div>
  );
}
