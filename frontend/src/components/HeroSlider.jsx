import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HERO_SLIDES } from "../data/company.js";
import ImagePlaceholder from "./ImagePlaceholder.jsx";
import "./HeroSlider.css";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const go = (i) => setIndex((i + HERO_SLIDES.length) % HERO_SLIDES.length);

  useEffect(() => {
    timerRef.current = setInterval(() => go(index + 1), 6000);
    return () => clearInterval(timerRef.current);
  }, [index]);

  return (
    <section className="hero-slider">
      <div className="hero-bg" />
      <div className="hero-bg-grid" />
      <div className="container hero-content">
        {HERO_SLIDES.map((slide, i) => (
          <div key={i} className={`hero-slide ${i === index ? "active" : ""}`}>
            <div className="hero-text">
              <span className="eyebrow">Robox Industries · Robotics &amp; Automation</span>
              <h1>
                {slide.title} <span className="gradient-text">{slide.highlight}</span>
              </h1>
              <h2>{slide.subtitle}</h2>
              <p>{slide.description}</p>
              <div className="hero-buttons">
                {slide.buttons.map((b, bi) => (
                  <button
                    key={bi}
                    className={`btn ${bi === 0 ? "btn-primary" : "btn-ghost"}`}
                    onClick={() => navigate(b.to)}
                  >
                    {b.text}
                  </button>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-visual-glow" />
              <div className="hero-visual-frame">
                <ImagePlaceholder label={slide.visual.label} ratio={slide.visual.ratio} />
              </div>
              {slide.chips?.map((chip, ci) => (
                <div key={ci} className={`hero-chip hero-chip-${ci}`}>
                  <span className="hero-chip-dot" />
                  {chip}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="hero-footer-row">
        <div className="hero-scroll-cue">
          <span>Scroll</span>
          <div className="hero-scroll-cue-icon" />
        </div>
        <div className="hero-controls">
          <button aria-label="Previous slide" onClick={() => go(index - 1)}>
            <FaChevronLeft />
          </button>
          <div className="hero-dots">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                className={`hero-dot ${i === index ? "active" : ""}`}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button aria-label="Next slide" onClick={() => go(index + 1)}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
