import "./SectionBlock.css";

export default function SectionBlock({ title, description, image, imagePosition = "right", children }) {
  return (
    <div className={`section-block ${imagePosition === "left" ? "reversed" : ""} ${!image ? "no-image" : ""}`}>
      {image && (
        <div className="section-block-image">
          <img src={image} alt={title || ""} loading="lazy" />
        </div>
      )}
      <div className="section-block-content">
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        {children}
      </div>
    </div>
  );
}
