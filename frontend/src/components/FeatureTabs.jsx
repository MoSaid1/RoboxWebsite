import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder.jsx";
import ScrollParallax from "./ScrollParallax.jsx";
import "./FeatureTabs.css";

export default function FeatureTabs({ tabs }) {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <div className="feature-tabs">
      <div className="feature-tabs-list">
        {tabs.map((tab, i) => (
          <button
            key={tab.title}
            className={`feature-tab ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="feature-tab-index">{String(i + 1).padStart(2, "0")}</span>
            <span className="feature-tab-text">
              <span className="feature-tab-title">{tab.title}</span>
              {active === i && <span className="feature-tab-summary">{tab.summary}</span>}
            </span>
          </button>
        ))}
      </div>

      <div className="feature-tabs-panel" key={active}>
        <ScrollParallax speed={0.06} className="feature-tabs-image">
          {current.image ? (
            <img src={current.image} alt={current.title} />
          ) : (
            <ImagePlaceholder {...current.placeholder} ratio={current.placeholder?.ratio || "4 / 3"} />
          )}
        </ScrollParallax>
        <p className="feature-tabs-body">{current.text}</p>
      </div>
    </div>
  );
}
