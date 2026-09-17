import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import ImagePlaceholder from "./ImagePlaceholder.jsx";
import "./HotspotImage.css";

export default function HotspotImage({ image, placeholder, hotspots = [], alt = "" }) {
  const [active, setActive] = useState(0);

  return (
    <div className="hotspot-image">
      {image ? <img src={image} alt={alt} /> : <ImagePlaceholder {...placeholder} ratio={placeholder?.ratio || "1 / 1"} />}

      {hotspots.map((h, i) => (
        <button
          key={i}
          className={`hotspot-dot ${active === i ? "active" : ""}`}
          style={{ left: `${h.x}%`, top: `${h.y}%` }}
          onClick={() => setActive(active === i ? null : i)}
          aria-label={h.title}
        >
          {active === i ? <FaTimes size={10} /> : <FaPlus size={10} />}
        </button>
      ))}

      {hotspots.map(
        (h, i) =>
          active === i && (
            <div
              key={`card-${i}`}
              className="hotspot-card"
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
            >
              <h5>{h.title}</h5>
              <p>{h.text}</p>
            </div>
          )
      )}
    </div>
  );
}
