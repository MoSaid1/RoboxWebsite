import { FaImage } from "react-icons/fa";
import "./ImagePlaceholder.css";

export default function ImagePlaceholder({ label, ratio = "1 / 1", className = "" }) {
  return (
    <div className={`img-placeholder ${className}`} style={{ aspectRatio: ratio }}>
      <FaImage size={26} />
      {label && <span>{label}</span>}
    </div>
  );
}
