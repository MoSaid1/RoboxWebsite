import { useCallback, useRef, useState } from "react";
import { FaArrowsAltH, FaSyncAlt } from "react-icons/fa";
import ImagePlaceholder from "./ImagePlaceholder.jsx";
import "./Product360.css";

const DEG_PER_PX = 0.6;

export default function Product360({ frames = [], label }) {
  const [angle, setAngle] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [touched, setTouched] = useState(false);
  const lastX = useRef(0);

  const frameCount = frames.length;
  const activeFrame =
    frameCount > 0 ? frames[Math.floor((((angle % 360) + 360) % 360) / (360 / frameCount)) % frameCount] : null;

  const onPointerDown = useCallback((e) => {
    setDragging(true);
    setTouched(true);
    lastX.current = e.clientX;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }, []);

  const onPointerMove = useCallback(
    (e) => {
      if (!dragging) return;
      const delta = e.clientX - lastX.current;
      lastX.current = e.clientX;
      setAngle((a) => a + delta * DEG_PER_PX);
    },
    [dragging]
  );

  const onPointerUp = useCallback(() => setDragging(false), []);

  const displayDeg = Math.round((((angle % 360) + 360) % 360));

  return (
    <div
      className={`product-360 ${dragging ? "dragging" : ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {activeFrame ? (
        <img src={activeFrame} alt={label || "360 view"} draggable={false} />
      ) : (
        <ImagePlaceholder
          label={label || "360° rotation set — 24–36 sequential shots, 10° apart"}
          ratio="1 / 1"
          className="product-360-placeholder"
        />
      )}

      <div className="product-360-badge">
        <FaSyncAlt size={11} /> 360° View
      </div>

      <div className="product-360-readout">{displayDeg}°</div>

      {!touched && (
        <div className="product-360-hint">
          <FaArrowsAltH size={16} />
          <span>Drag to rotate</span>
        </div>
      )}
    </div>
  );
}
