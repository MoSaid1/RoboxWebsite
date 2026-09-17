import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTruck,
  FaBullhorn,
  FaConciergeBell,
  FaGraduationCap,
  FaArrowRight,
  FaBullseye,
  FaExpandArrowsAlt,
  FaShieldAlt,
  FaCoins,
  FaInfinity,
} from "react-icons/fa";
import Seo from "../components/Seo.jsx";
import HeroSlider from "../components/HeroSlider.jsx";
import ProductCard from "../components/ProductCard.jsx";
import PartnersMarquee from "../components/PartnersMarquee.jsx";
import Reveal from "../components/Reveal.jsx";
import ScrollParallax from "../components/ScrollParallax.jsx";
import StatRow from "../components/StatCounter.jsx";
import StackedCardsCarousel from "../components/StackedCardsCarousel.jsx";
import { Loading, ErrorMessage } from "../components/StateMessage.jsx";
import { getProducts, getPartners, getBlogs } from "../lib/api.js";
import { OUR_STORY, COMPANY_PAGE, NAV_CATEGORIES } from "../data/company.js";
import "./Home.css";

const CATEGORY_ICONS = {
  delivery: FaTruck,
  advertising: FaBullhorn,
  service: FaConciergeBell,
  educational: FaGraduationCap,
};

const WHY_ICONS = {
  Precise: FaBullseye,
  Scalable: FaExpandArrowsAlt,
  Safe: FaShieldAlt,
  "Cost-effective": FaCoins,
  "Built for long-term performance": FaInfinity,
};

export default function Home() {
  const [products, setProducts] = useState(null);
  const [partners, setPartners] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProducts().then(setProducts).catch(() => setError(true));
    getPartners().then(setPartners).catch(() => {});
    getBlogs().then(setBlogs).catch(() => {});
  }, []);

  const stats = [
    { value: products?.length || 10, label: "Robots in the Lineup" },
    { value: NAV_CATEGORIES.length, label: "Product Categories" },
    { value: partners?.length || 11, suffix: "+", label: "Partners & Clients" },
    { value: 100, suffix: "%", label: "Designed & Assembled In-House" },
  ];

  return (
    <div className="page">
      <Seo
        title="Home"
        description="Robox Industries designs, manufactures, and assembles delivery, advertising, service, and educational robots for the future of automation."
      />

      <HeroSlider />

      <Reveal as="section" className="section stats-section-home">
        <StatRow stats={stats} />
      </Reveal>

      <section className="section">
        <div className="container story-block">
          <Reveal>
            <span className="eyebrow">{OUR_STORY.title}</span>
            <h2 className="section-title">Engineering the machines that power tomorrow's businesses.</h2>
          </Reveal>
          <Reveal delay={100} className="story-text">
            {OUR_STORY.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Link to="/company" className="btn btn-ghost btn-sm story-link">
              Learn About Us <FaArrowRight size={12} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section categories-section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What We Build</span>
            <h2 className="section-title">Four categories. One engineering standard.</h2>
          </Reveal>
          <div className="categories-grid">
            {NAV_CATEGORIES.map((c, i) => {
              const Icon = CATEGORY_ICONS[c.key];
              return (
                <Reveal key={c.key} delay={i * 80} as={Link} className="category-card" to={`/products?category=${c.key}`}>
                  <div className="category-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{c.label}</h3>
                  <span className="category-link">
                    Explore <FaArrowRight size={11} />
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head split">
            <div>
              <span className="eyebrow">Our Robots</span>
              <h2 className="section-title">Featured Products</h2>
            </div>
            <Link to="/products" className="btn btn-ghost btn-sm">
              View All Products <FaArrowRight size={12} />
            </Link>
          </Reveal>

          {!products && !error && <Loading label="Loading products..." />}
          {error && <ErrorMessage message="Could not load products right now." />}
          {products && (
            <div className="products-grid">
              {products.slice(0, 4).map((p, i) => (
                <Reveal key={p.id} delay={i * 80}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {products?.length > 0 && (
        <section className="section lineup-section">
          <div className="container">
            <Reveal className="section-head center">
              <span className="eyebrow">The Full Lineup</span>
              <h2 className="section-title">Meet Every Robot We Build</h2>
            </Reveal>
          </div>
          <StackedCardsCarousel
            ariaLabel="Robox product lineup"
            cards={products.map((p) => ({
              id: p.id,
              title: p.name,
              subtitle: p.category,
              description: p.short_description,
              image: p.thumbnail,
              to: `/products/${p.slug}`,
            }))}
          />
        </section>
      )}

      <section className="section why-section">
        <div className="container why-grid">
          <Reveal>
            <span className="eyebrow">{COMPANY_PAGE.whyChoose.title}</span>
            <h2 className="section-title">{COMPANY_PAGE.whyChoose.intro}</h2>
            <p className="section-description">{COMPANY_PAGE.whyChoose.lead}</p>
            <Link to="/company" className="btn btn-primary story-link">
              Discover Our Company
            </Link>
          </Reveal>
          <ul className="why-list">
            {COMPANY_PAGE.whyChoose.list.map((item, i) => {
              const Icon = WHY_ICONS[item];
              return (
                <Reveal key={item} as="li" delay={i * 70}>
                  {Icon && (
                    <span className="why-list-icon">
                      <Icon size={15} />
                    </span>
                  )}
                  {item}
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {partners?.length > 0 && (
        <section className="section partners-section">
          <div className="container">
            <Reveal className="section-head center">
              <span className="eyebrow">Trusted By</span>
              <h2 className="section-title">Partners &amp; Clients</h2>
            </Reveal>
          </div>
          <PartnersMarquee partners={partners} />
        </section>
      )}

      {blogs?.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal className="section-head split">
              <div>
                <span className="eyebrow">Latest News</span>
                <h2 className="section-title">From the Blog</h2>
              </div>
              <Link to="/blogs" className="btn btn-ghost btn-sm">
                View All Posts <FaArrowRight size={12} />
              </Link>
            </Reveal>
            <div className="blog-teaser-grid">
              {blogs.slice(0, 2).map((b, i) => (
                <Reveal key={b.id} delay={i * 100} as={Link} to={`/blogs/${b.slug}`} className="blog-teaser-card">
                  <div className="blog-teaser-image">
                    <ScrollParallax speed={0.06}>
                      <img src={b.photo} alt={b.title} loading="lazy" />
                    </ScrollParallax>
                    {b.created_at && (
                      <span className="blog-teaser-date">
                        {new Date(b.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    )}
                  </div>
                  <div className="blog-teaser-body">
                    <h3>{b.title}</h3>
                    <p>{b.excerpt}</p>
                    <span className="blog-teaser-link">
                      Read Article <FaArrowRight size={12} />
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section cta-section">
        <Reveal as="div" className="container cta-box">
          <h2 className="section-title">{COMPANY_PAGE.cta.title}</h2>
          <p>{COMPANY_PAGE.cta.subtitle}</p>
          <div className="cta-buttons">
            <Link to="/products" className="btn btn-primary">
              Explore Our Products
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
