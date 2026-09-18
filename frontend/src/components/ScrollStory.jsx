import { useEffect, useRef, useState } from "react";
import { SpecIcon } from "../lib/icons.jsx";
import "./ScrollStory.css";

export default function ScrollStory({ eyebrow, title, steps }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [steps]);

  const currentStep = steps[active];

  return (
    <section className="section scroll-story-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="scroll-story-inner">
          <div className="scroll-story-sticky">
            <div className="scroll-story-visual">
              <div className="scroll-story-icon" key={active}>
                <SpecIcon name={currentStep.icon} size={56} />
              </div>
              <span className="scroll-story-visual-num">{String(active + 1).padStart(2, "0")}</span>
              <h3 className="scroll-story-visual-title">{currentStep.title}</h3>
            </div>
            <div className="scroll-story-progress">
              {steps.map((step, i) => (
                <span key={step.title} className={`scroll-story-dot ${i === active ? "active" : ""}`} />
              ))}
            </div>
          </div>

          <div className="scroll-story-steps">
            {steps.map((step, i) => (
              <div
                key={step.title}
                ref={(el) => (stepRefs.current[i] = el)}
                data-index={i}
                className={`scroll-story-step ${i === active ? "active" : ""}`}
              >
                <span className="scroll-story-step-index">{String(i + 1).padStart(2, "0")}</span>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
