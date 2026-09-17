import { FaVideo } from "react-icons/fa";
import "./ProductVideoIntro.css";

export default function ProductVideoIntro({ data }) {
  return (
    <section className="product-video-intro">
      <div className="product-video-intro-media">
        {data.video ? (
          <video
            className="product-video-intro-video"
            autoPlay
            muted
            loop={!!data.loop}
            playsInline
            poster={data.poster}
            src={data.video}
          />
        ) : (
          <div className="product-video-intro-placeholder">
            <FaVideo size={28} />
            <span>{data.videoLabel || "Background video placeholder"}</span>
          </div>
        )}
        <div className="product-video-intro-overlay" />
      </div>

      <div className="container product-video-intro-content">
        <span className="product-video-intro-eyebrow">{data.eyebrow}</span>
        <h1 className="product-video-intro-title">{data.title}</h1>
        <p className="product-video-intro-subtitle">{data.subtitle}</p>
      </div>

      <div className="product-video-intro-scroll">
        <span>Scroll</span>
        <div className="product-video-intro-scroll-icon" />
      </div>
    </section>
  );
}
