import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTruck, FaBullhorn, FaConciergeBell, FaGraduationCap, FaArrowRight } from "react-icons/fa";
import Seo from "../components/Seo.jsx";
import HeroSlider from "../components/HeroSlider.jsx";
import ProductCard from "../components/ProductCard.jsx";
import PartnersMarquee from "../components/PartnersMarquee.jsx";
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

  return (
    <div className="page">
      <Seo
        title="Home"
        description="Robox Industries designs, manufactures, and assembles delivery, advertising, service, and educational robots for the future of automation."
      />

      <HeroSlider />

      <section className="section">
        <div className="container story-block">
          <div>
            <span className="eyebrow">{OUR_STORY.title}</span>
            <h2 className="section-title">Engineering the machines that power tomorrow's businesses.</h2>
          </div>
          <div className="story-text">
            {OUR_STORY.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Link to="/company" className="btn btn-ghost btn-sm story-link">
              Learn About Us <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section categories-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Build</span>
            <h2 className="section-title">Four categories. One engineering standard.</h2>
          </div>
          <div className="categories-grid">
            {NAV_CATEGORIES.map((c) => {
              const Icon = CATEGORY_ICONS[c.key];
              return (
                <Link key={c.key} to={`/products?category=${c.key}`} className="category-card">
                  <div className="category-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{c.label}</h3>
                  <span className="category-link">
                    Explore <FaArrowRight size={11} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head split">
            <div>
              <span className="eyebrow">Our Robots</span>
              <h2 className="section-title">Featured Products</h2>
            </div>
            <Link to="/products" className="btn btn-ghost btn-sm">
              View All Products <FaArrowRight size={12} />
            </Link>
          </div>

          {!products && !error && <Loading label="Loading products..." />}
          {error && <ErrorMessage message="Could not load products right now." />}
          {products && (
            <div className="products-grid">
              {products.slice(0, 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section why-section">
        <div className="container why-grid">
          <div>
            <span className="eyebrow">{COMPANY_PAGE.whyChoose.title}</span>
            <h2 className="section-title">{COMPANY_PAGE.whyChoose.intro}</h2>
            <p className="section-description">{COMPANY_PAGE.whyChoose.lead}</p>
            <Link to="/company" className="btn btn-primary story-link">
              Discover Our Company
            </Link>
          </div>
          <ul className="why-list">
            {COMPANY_PAGE.whyChoose.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {partners?.length > 0 && (
        <section className="section partners-section">
          <div className="container">
            <div className="section-head center">
              <span className="eyebrow">Trusted By</span>
              <h2 className="section-title">Partners &amp; Clients</h2>
            </div>
          </div>
          <PartnersMarquee partners={partners} />
        </section>
      )}

      {blogs?.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head split">
              <div>
                <span className="eyebrow">Latest News</span>
                <h2 className="section-title">From the Blog</h2>
              </div>
              <Link to="/blogs" className="btn btn-ghost btn-sm">
                View All Posts <FaArrowRight size={12} />
              </Link>
            </div>
            <div className="blog-teaser-grid">
              {blogs.slice(0, 2).map((b) => (
                <Link to={`/blogs/${b.slug}`} key={b.id} className="blog-teaser-card">
                  <div className="blog-teaser-image">
                    <img src={b.photo} alt={b.title} loading="lazy" />
                  </div>
                  <div className="blog-teaser-body">
                    <h3>{b.title}</h3>
                    <p>{b.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section cta-section">
        <div className="container cta-box">
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
        </div>
      </section>
    </div>
  );
}
