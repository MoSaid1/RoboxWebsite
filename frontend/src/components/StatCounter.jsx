import { useEffect, useRef, useState } from "react";
import { SpecIcon } from "../lib/icons.jsx";
import "./StatCounter.css";

function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

export default function StatRow({ stats }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="stat-row">
      {stats.map((s, i) => (
        <StatItem key={s.label} stat={s} active={active} index={i} />
      ))}
    </div>
  );
}

function StatItem({ stat, active, index }) {
  const value = useCountUp(stat.value, active);
  const decimals = stat.decimals || 0;
  return (
    <div className={`stat-item ${stat.icon ? "has-icon" : ""}`}>
      {stat.icon && (
        <div
          className={`stat-icon ${active ? "in" : ""}`}
          style={{ transitionDelay: `${index * 90}ms` }}
        >
          <SpecIcon name={stat.icon} size={stat.iconSize || 36} />
        </div>
      )}
      <div className="stat-text">
        <div className="stat-value">
          {stat.prefix}
          {value.toFixed(decimals)}
          {stat.suffix}
        </div>
        <div className="stat-divider" />
        <div className="stat-label">{stat.label}</div>
      </div>
    </div>
  );
}
