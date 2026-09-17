import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowRight, FaFilePdf, FaChevronLeft } from "react-icons/fa";
import Seo from "../components/Seo.jsx";
import Reveal from "../components/Reveal.jsx";
import { Loading, ErrorMessage } from "../components/StateMessage.jsx";
import { SpecIcon } from "../lib/icons.jsx";
import { getProduct } from "../lib/api.js";
import { toYoutubeEmbed } from "../lib/youtube.js";
import { PRODUCT_STORIES } from "../data/productStories.js";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import ProductVideoIntro from "../components/ProductVideoIntro.jsx";
import HotspotImage from "../components/HotspotImage.jsx";
import StatRow from "../components/StatCounter.jsx";
import FeatureTabs from "../components/FeatureTabs.jsx";
import ScrollProgress from "../components/ScrollProgress.jsx";
import ScrollParallax from "../components/ScrollParallax.jsx";
import Product360 from "../components/Product360.jsx";
import BentoGrid from "../components/BentoGrid.jsx";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    setProduct(null);
    setError(false);
    setActivePhoto(0);
    getProduct(slug)
      .then(setProduct)
      .catch(() => setError(true));
  }, [slug]);

  if (error) {
    return (
      <div className="page">
        <ErrorMessage message="This product could not be found." />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="page">
        <Loading label="Loading product..." />
      </div>
    );
  }

  const embed = toYoutubeEmbed(product.video);
  const gallery = product.photos?.length ? product.photos : [product.thumbnail];
  const story = PRODUCT_STORIES[slug];
  const hasStory = story ? story.tabs?.length > 0 : product.sections?.some((s) => s.title || s.text);

  return (
    <div className="page product-detail">
      <Seo title={product.name} description={product.short_description} />

      {story?.videoIntro && <ProductVideoIntro data={story.videoIntro} />}

      <div className="container breadcrumb">
        <button onClick={() => navigate(-1)} className="breadcrumb-back">
          <FaChevronLeft size={12} /> Back
        </button>
        <span>/</span>
        <Link to="/products">Products</Link>
        <span>/</span>
        <span className="breadcrumb-current">{product.name}</span>
      </div>

      <ScrollProgress />

      <nav className="product-subnav">
        <div className="container product-subnav-inner">
          <span className="product-subnav-name">{product.name}</span>
          <div className="product-subnav-links">
            <a href="#overview">Overview</a>
            {hasStory && <a href="#story">Highlights</a>}
            {story?.view360 && <a href="#view360">360°</a>}
            {story?.compare && <a href="#compare">Compare</a>}
            {product.specifications?.length > 0 && <a href="#specs">Tech Specs</a>}
          </div>
          <Link to={`/contact?product=${product.slug}`} className="btn btn-primary btn-sm product-subnav-cta">
            <span>
              Request a
              <br />
              Quote
            </span>
          </Link>
        </div>
      </nav>

      <section className="product-hero" id="overview">
        <div className="container product-hero-text">
          <Reveal>
            <span className="badge">{product.category}</span>
          </Reveal>
          <Reveal delay={80}>
            <h1>{product.name}</h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="product-short">{product.short_description}</p>
          </Reveal>
          {story?.hook && (
            <Reveal delay={190}>
              <p className="product-hook">{story.hook}</p>
            </Reveal>
          )}
        </div>

        {story ? (
          <Reveal delay={200} className="product-hero-visual story-hero-visual">
            <ScrollParallax speed={0.1} scaleFrom={0.93}>
              <HotspotImage placeholder={story.hero.placeholder} hotspots={story.hero.hotspots} alt={product.name} />
            </ScrollParallax>
          </Reveal>
        ) : (
          <Reveal delay={200} className="product-hero-visual">
            <div className="product-gallery-main">
              <img src={gallery[activePhoto]} alt={product.name} />
            </div>
            {gallery.length > 1 && (
              <div className="product-gallery-thumbs">
                {gallery.map((src, i) => (
                  <button
                    key={i}
                    className={`product-thumb ${i === activePhoto ? "active" : ""}`}
                    onClick={() => setActivePhoto(i)}
                  >
                    <img src={src} alt={`${product.name} ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </Reveal>
        )}

        <Reveal delay={260} className="product-actions">
          <Link to={`/contact?product=${product.slug}`} className="btn btn-primary">
            Request a Quote <FaArrowRight size={13} />
          </Link>
          {product.pdf_file && (
            <a href={product.pdf_file} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <FaFilePdf /> Download Datasheet
            </a>
          )}
        </Reveal>
      </section>

      {story?.stats && (
        <Reveal as="section" className="section stats-section">
          <StatRow stats={story.stats} />
        </Reveal>
      )}

      <section className="section product-description-section">
        <div className="container product-description-wrap">
          <ScrollParallax scaleFrom={0.94}>
            <p className="product-description">{product.description}</p>
          </ScrollParallax>
        </div>
      </section>

      {story?.philosophy && (
        <section className="section philosophy-section">
          <div className="container philosophy-wrap">
            <ScrollParallax scaleFrom={0.92}>
              <p className="philosophy-text">{story.philosophy}</p>
            </ScrollParallax>
          </div>
        </section>
      )}

      {story?.bento && (
        <section className="section bento-section">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">At a Glance</span>
              <h2 className="section-title">Everything, In One Look</h2>
            </Reveal>
            <BentoGrid items={story.bento} />
          </div>
        </section>
      )}

      {embed && (
        <Reveal as="section" className="section video-section">
          <div className="container">
            <div className="video-frame">
              <iframe
                src={embed}
                title={`${product.name} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      )}

      {hasStory && story && (
        <>
          <section className="section feature-tabs-section" id="story">
            <div className="container">
              <Reveal className="section-head">
                <span className="eyebrow">Highlights</span>
                <h2 className="section-title">What Makes It Work</h2>
              </Reveal>
              <FeatureTabs tabs={story.tabs} />
            </div>
          </section>
          {story.view360 && (
            <section className="section view360-section" id="view360">
              <div className="container">
                <Reveal className="section-head center">
                  <span className="eyebrow">Take a Closer Look</span>
                  <h2 className="section-title">See It From Every Angle</h2>
                </Reveal>
                <Reveal delay={80}>
                  <Product360 frames={story.view360.frames} label={story.view360.label} />
                </Reveal>
              </div>
            </section>
          )}
          {story.compare && (
            <section className="section compare-section" id="compare">
              <div className="container">
                <CompareTable compare={story.compare} />
              </div>
            </section>
          )}
          {story.useCases && (
            <section className="use-cases-section">
              <UseCasesChapter useCases={story.useCases} />
            </section>
          )}
        </>
      )}

      {hasStory && !story && (
        <section className="product-story" id="story">
          {product.sections.map((s, i) =>
            s.title || s.text || s.image ? (
              <ProductStorySection key={i} section={s} index={i} />
            ) : null
          )}
        </section>
      )}

      {product.specifications?.length > 0 && (
        <section className="section specs-section" id="specs">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">Specifications</span>
              <h2 className="section-title">Technical Details</h2>
            </Reveal>
            <div className="specs-grid">
              {product.specifications.map((s, i) => (
                <Reveal key={i} delay={Math.min(i, 6) * 60} className="spec-card">
                  <div className="spec-icon">
                    <SpecIcon name={s.icon} size={18} />
                  </div>
                  <div>
                    <span className="spec-name">{s.name}</span>
                    <span className="spec-detail">{s.detail}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {(product.cta_title || product.cta_text) && (
        <section className="section cta-section" id="get">
          <Reveal as="div" className="container cta-box">
            {product.cta_title && <h2 className="section-title">{product.cta_title}</h2>}
            {product.cta_text && <p>{product.cta_text}</p>}
            <div className="cta-buttons">
              <Link to={`/contact?product=${product.slug}`} className="btn btn-primary">
                Request a Quote
              </Link>
              <Link to="/products" className="btn btn-ghost">
                Explore More Products
              </Link>
            </div>
            {story?.credibility && <p className="credibility-line">{story.credibility}</p>}
          </Reveal>
        </section>
      )}
    </div>
  );
}

function ProductStorySection({ section, index }) {
  const reversed = index % 2 === 1;
  const textOnly = !section.image;
  const imageOnly = !section.title && !section.text && section.image;

  if (imageOnly) {
    return (
      <Reveal as="div" className="story-image-full">
        <img src={section.image} alt="" loading="lazy" />
      </Reveal>
    );
  }

  return (
    <div className={`story-block ${reversed ? "reversed" : ""} ${textOnly ? "text-only" : ""}`}>
      {section.image && (
        <Reveal className="story-image" delay={80}>
          <img src={section.image} alt={section.title || ""} loading="lazy" />
        </Reveal>
      )}
      <Reveal className="story-text">
        {section.title && <h3>{section.title}</h3>}
        {section.text && <p>{section.text}</p>}
      </Reveal>
    </div>
  );
}

function CompareTable({ compare }) {
  return (
    <div className="compare-table-wrap">
      <Reveal className="section-head center">
        <span className="eyebrow">Compare</span>
        <h2 className="section-title">{compare.title}</h2>
        <p className="section-description compare-description">{compare.description}</p>
      </Reveal>

      <Reveal delay={80} className="compare-table">
        <div className="compare-row compare-head">
          <span></span>
          <span>{compare.aLabel || "This Model"}</span>
          <span>{compare.bLabel || compare.linkLabel}</span>
        </div>
        {compare.rows.map((row) => (
          <div className="compare-row" key={row.label}>
            <span className="compare-label">{row.label}</span>
            <span>{row.a}</span>
            <span className="compare-b">{row.b}</span>
          </div>
        ))}
      </Reveal>

      {compare.linkTo && (
        <Reveal delay={140} className="compare-cta">
          <Link to={compare.linkTo} className="btn btn-ghost">
            {compare.linkLabel} <FaArrowRight size={12} />
          </Link>
        </Reveal>
      )}
    </div>
  );
}

function UseCasesChapter({ useCases }) {
  return (
    <div className="use-cases-chapter">
      <Reveal className="use-cases-header">
        {useCases.title && <h3>{useCases.title}</h3>}
        {useCases.description && <p>{useCases.description}</p>}
      </Reveal>

      {useCases.placeholder && (
        <Reveal className="use-cases-image" delay={80}>
          <ScrollParallax speed={0.08}>
            <ImagePlaceholder {...useCases.placeholder} ratio={useCases.placeholder.ratio || "21 / 9"} />
          </ScrollParallax>
        </Reveal>
      )}

      <div className="use-cases-grid">
        {useCases.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 70} className="use-case-card">
            <div className="use-case-icon">
              <SpecIcon name={item.icon} size={18} />
            </div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
