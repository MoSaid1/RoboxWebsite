import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./StackedCardsCarousel.css";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const onChange = (e) => setMatches(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

export default function StackedCardsCarousel({
  cards,
  autoplay = true,
  interval = 3000,
  duration = 900,
  easing = "cubic-bezier(0.22, 1, 0.36, 1)",
  topOffset = -120,
  bottomOffset = 120,
  activeScale = 1,
  inactiveScale = 0.72,
  mobileTopOffset,
  mobileBottomOffset,
  mobileInactiveScale,
  swipeThreshold = 50,
  pauseOnHover = true,
  enableDrag = true,
  ariaLabel = "Card carousel",
}) {
  const total = cards.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [dragPaused, setDragPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragState = useRef({ dragging: false, startY: 0, lastY: 0, moved: false });
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isMobile = useMediaQuery("(max-width: 560px)");
  const effectiveDuration = reducedMotion ? 0 : duration;
  const effectiveTopOffset = isMobile ? mobileTopOffset ?? topOffset * 0.6 : topOffset;
  const effectiveBottomOffset = isMobile ? mobileBottomOffset ?? bottomOffset * 0.6 : bottomOffset;
  const effectiveInactiveScale = isMobile ? mobileInactiveScale ?? inactiveScale : inactiveScale;

  const goTo = useCallback(
    (next) => setActiveIndex(((next % total) + total) % total),
    [total]
  );
  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (!autoplay || hoverPaused || dragPaused || total <= 1) return;
    const id = setInterval(() => setActiveIndex((i) => (i + 1) % total), interval);
    return () => clearInterval(id);
    // Depending on activeIndex restarts the countdown whenever the user
    // manually navigates (dots, keyboard, drag), so a manual choice never
    // gets immediately overridden by an already-scheduled autoplay tick.
  }, [autoplay, hoverPaused, dragPaused, interval, total, activeIndex]);

  const handlePointerDown = (e) => {
    if (!enableDrag) return;
    const startY = e.clientY;
    dragState.current = { dragging: true, startY, lastY: startY, moved: false };
    setDragPaused(true);

    const onMove = (ev) => {
      const delta = ev.clientY - dragState.current.startY;
      dragState.current.lastY = ev.clientY;
      if (Math.abs(delta) > 5) dragState.current.moved = true;
      setDragOffset(delta * 0.4);
    };

    const onUp = () => {
      const delta = dragState.current.lastY - dragState.current.startY;
      dragState.current.dragging = false;
      setDragOffset(0);
      setDragPaused(false);
      if (Math.abs(delta) > swipeThreshold) {
        if (delta < 0) next();
        else prev();
      }
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };

  const handleCardClick = (e) => {
    if (dragState.current.moved) e.preventDefault();
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  const getCardStyle = (index) => {
    const rel = ((index - activeIndex) % total + total) % total;
    const half = Math.floor(total / 2);
    const transition = `transform ${effectiveDuration}ms ${easing}, opacity ${effectiveDuration}ms ${easing}`;

    if (rel === 0) {
      return {
        transition,
        transform: `translateY(${dragOffset}px) scale(${activeScale})`,
        opacity: 1,
        zIndex: 10,
      };
    }
    if (rel === 1) {
      return {
        transition,
        transform: `translateY(${effectiveBottomOffset + dragOffset}px) scale(${effectiveInactiveScale})`,
        opacity: 0.85,
        zIndex: 5,
      };
    }
    if (rel === total - 1) {
      return {
        transition,
        transform: `translateY(${effectiveTopOffset + dragOffset}px) scale(${effectiveInactiveScale})`,
        opacity: 0.85,
        zIndex: 5,
      };
    }
    const farOffset = rel <= half ? effectiveBottomOffset * 1.8 : effectiveTopOffset * 1.8;
    return {
      transition,
      transform: `translateY(${farOffset}px) scale(0.5)`,
      opacity: 0,
      zIndex: 1,
      pointerEvents: "none",
    };
  };

  return (
    <div
      className="scc-root"
      role="region"
      aria-label={ariaLabel}
      aria-live="off"
      tabIndex={0}
      onMouseEnter={() => pauseOnHover && setHoverPaused(true)}
      onMouseLeave={() => pauseOnHover && setHoverPaused(false)}
      onKeyDown={handleKeyDown}
    >
      <div className="scc-stack" onPointerDown={handlePointerDown}>
        {cards.map((card, i) => {
          const isActive = i === activeIndex;
          const CardTag = card.to ? Link : "div";
          return (
            <CardTag
              key={card.id}
              to={card.to}
              className="scc-card"
              style={getCardStyle(i)}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}: ${card.title}`}
              aria-current={isActive ? "true" : undefined}
              onClick={handleCardClick}
            >
              {card.image && (
                <div className="scc-card-image">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    style={{
                      objectFit: card.imageFit || "cover",
                      objectPosition: card.imagePosition || "center",
                    }}
                  />
                </div>
              )}
              <div className="scc-card-body">
                {card.subtitle && <span className="scc-card-subtitle">{card.subtitle}</span>}
                <h3 className="scc-card-title">{card.title}</h3>
                {card.description && <p className="scc-card-description">{card.description}</p>}
              </div>
            </CardTag>
          );
        })}
      </div>

      <div className="scc-dots">
        {cards.map((card, i) => (
          <button
            key={card.id}
            className={`scc-dot ${i === activeIndex ? "active" : ""}`}
            aria-label={`Go to ${card.title}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
