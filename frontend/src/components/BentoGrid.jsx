import { SpecIcon } from "../lib/icons.jsx";
import ImagePlaceholder from "./ImagePlaceholder.jsx";
import "./BentoGrid.css";

export default function BentoGrid({ items }) {
  return (
    <div className="bento-grid">
      {items.map((item) => (
        <div className={`bento-card bento-${item.size || "normal"}`} key={item.title}>
          {item.placeholder && (
            <div className="bento-card-media">
              <ImagePlaceholder {...item.placeholder} ratio={item.placeholder.ratio || "16 / 9"} />
            </div>
          )}
          <div className="bento-card-body">
            <div className="bento-card-icon">
              <SpecIcon name={item.icon} size={18} />
            </div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
