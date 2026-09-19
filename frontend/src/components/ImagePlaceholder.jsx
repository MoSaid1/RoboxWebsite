import { FaImage } from "react-icons/fa";
import "./ImagePlaceholder.css";

export default function ImagePlaceholder({ label, ratio = "1 / 1", className = "", image, alt = "" }) {
  if (image) {
    return <img className={`img-real ${className}`} style={{ aspectRatio: ratio }} src={image} alt={alt || label || ""} />;
  }

  return (
    <div className={`img-placeholder ${className}`} style={{ aspectRatio: ratio }}>
      <FaImage size={26} />
      {label && <span>{label}</span>}
    </div>
  );
}
