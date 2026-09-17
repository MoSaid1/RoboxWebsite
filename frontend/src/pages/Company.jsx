import { Link } from "react-router-dom";
import { FaLightbulb, FaHeadset, FaMedal, FaMapMarkedAlt } from "react-icons/fa";
import Seo from "../components/Seo.jsx";
import SectionBlock from "../components/SectionBlock.jsx";
import { COMPANY_PAGE } from "../data/company.js";
import "./Company.css";

const VALUE_ICONS = [FaLightbulb, FaHeadset, FaMedal, FaMapMarkedAlt];

export default function Company() {
  return (
    <div className="page company-page">
      <Seo
        title="Our Company"
        description="Learn about Robox Industries, a leading provider of robotic solutions including delivery robots, advertising robots, service robots, and educational kits."
      />

      <section className="page-hero company-hero">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1 className="section-title">{COMPANY_PAGE.heroTitle}</h1>
          <p className="section-description company-hero-description">{COMPANY_PAGE.heroDescription}</p>
          <div className="cta-buttons company-hero-buttons">
            <Link to="/products" className="btn btn-primary">
              Explore Our Products
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <SectionBlock
          title={COMPANY_PAGE.whoWeAre.title}
          description={COMPANY_PAGE.whoWeAre.description}
          imagePosition="right"
        />
        <SectionBlock title={COMPANY_PAGE.mission.title} description={COMPANY_PAGE.mission.description} imagePosition="left" />
        <SectionBlock title={COMPANY_PAGE.vision.title} description={COMPANY_PAGE.vision.description} imagePosition="right" />
      </div>

      <section className="section values-section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">What Drives Us</span>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="values-grid">
            {COMPANY_PAGE.values.map((v, i) => {
              const Icon = VALUE_ICONS[i] || FaLightbulb;
              return (
                <div className="value-card" key={v.title}>
                  <div className="value-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section why-choose-section">
        <div className="container why-choose-grid">
          <div>
            <span className="eyebrow">{COMPANY_PAGE.whyChoose.title}</span>
            <h2 className="section-title">{COMPANY_PAGE.whyChoose.intro}</h2>
            <p className="section-description">{COMPANY_PAGE.whyChoose.lead}</p>
            <ul className="why-choose-list">
              {COMPANY_PAGE.whyChoose.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {COMPANY_PAGE.whyChoose.outro.map((p, i) => (
              <p key={i} className="why-choose-outro">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

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
