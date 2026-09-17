import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HERO_SLIDES } from "../data/company.js";
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
      <div className="container hero-content">
        {HERO_SLIDES.map((slide, i) => (
          <div key={i} className={`hero-slide ${i === index ? "active" : ""}`}>
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
        ))}

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
