import ImagePlaceholder from "./ImagePlaceholder.jsx";
import ScrollParallax from "./ScrollParallax.jsx";
import "./SectionBlock.css";

export default function SectionBlock({ title, description, image, placeholder, imagePosition = "right", children }) {
  const hasVisual = Boolean(image || placeholder);
  return (
    <div className={`section-block ${imagePosition === "left" ? "reversed" : ""} ${!hasVisual ? "no-image" : ""}`}>
      {hasVisual && (
        <ScrollParallax speed={0.08} className="section-block-image">
          {image ? (
            <img src={image} alt={title || ""} loading="lazy" />
          ) : (
            <ImagePlaceholder {...placeholder} ratio={placeholder.ratio || "4 / 3"} />
          )}
        </ScrollParallax>
      )}
      <div className="section-block-content">
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        {children}
      </div>
    </div>
  );
}
