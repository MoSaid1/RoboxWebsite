import { FaImage } from "react-icons/fa";
import Reveal from "./Reveal.jsx";
import "./GifShowcase.css";

export default function GifShowcase({ eyebrow, title, text, gif, gifLabel }) {
  return (
    <section className="gif-showcase-section">
      <div className="container gif-showcase-inner">
        <Reveal className="gif-showcase-media">
          {gif ? (
            <img src={gif} alt={title} className="gif-showcase-img" />
          ) : (
            <div className="gif-showcase-placeholder">
              <FaImage size={28} />
              <span>{gifLabel || "Transparent GIF placeholder — no background"}</span>
            </div>
          )}
        </Reveal>

        <Reveal delay={120} className="gif-showcase-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
          {text && <p className="gif-showcase-text">{text}</p>}
        </Reveal>
      </div>
    </section>
  );
}
