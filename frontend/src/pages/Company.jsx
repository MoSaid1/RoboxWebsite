import { Link } from "react-router-dom";
import {
  FaLightbulb,
  FaHeadset,
  FaMedal,
  FaMapMarkedAlt,
  FaBullseye,
  FaEye,
  FaIndustry,
  FaPuzzlePiece,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import Seo from "../components/Seo.jsx";
import SectionBlock from "../components/SectionBlock.jsx";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import ScrollParallax from "../components/ScrollParallax.jsx";
import Reveal from "../components/Reveal.jsx";
import StatRow from "../components/StatCounter.jsx";
import { COMPANY_PAGE, CONTACT, NAV_CATEGORIES } from "../data/company.js";
import "./Company.css";

const VALUE_ICONS = [FaLightbulb, FaHeadset, FaMedal, FaMapMarkedAlt];

const PROCESS_STEPS = [
  { icon: FaLightbulb, title: "Concept & Design", text: "Every solution starts by understanding the operational problem, not the product spec sheet." },
  { icon: FaIndustry, title: "Production", text: "Designed, manufactured, and assembled in-house — built for the local market and global standards." },
  { icon: FaPuzzlePiece, title: "Integration", text: "Fitted into your actual environment, systems, and workflow — not a generic install." },
  { icon: FaHeadset, title: "After-Sales Support", text: "Local engineers, fast response, and continuous improvement long after delivery." },
];

const STATS = [
  { value: 10, label: "Robots in the Lineup" },
  { value: NAV_CATEGORIES.length, label: "Product Categories" },
  { value: 11, label: "Partners & Clients" },
  { value: 100, suffix: "%", label: "Designed & Assembled In-House" },
];

export default function Company() {
  return (
    <div className="page company-page">
      <Seo
        title="Our Company"
        description="Learn about Robox Industries, a leading provider of robotic solutions including delivery robots, advertising robots, service robots, and educational kits."
      />

      <section className="page-hero company-hero">
        <div className="container company-hero-grid">
          <Reveal>
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
          </Reveal>
          <Reveal delay={140} className="company-hero-visual">
            <ScrollParallax speed={0.1} scaleFrom={0.94}>
              <ImagePlaceholder label="Hero shot — Robox engineering team or HQ, 4:3" ratio="4 / 3" />
            </ScrollParallax>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="section stats-section-home company-stats">
        <StatRow stats={STATS} />
      </Reveal>

      <div className="container">
        <SectionBlock
          title={COMPANY_PAGE.whoWeAre.title}
          description={COMPANY_PAGE.whoWeAre.description}
          placeholder={{ label: "Team shot — engineers at work in the workshop" }}
          imagePosition="right"
        />
      </div>

      <section className="section mission-vision-section">
        <div className="container mission-vision-grid">
          <Reveal className="mission-vision-card">
            <div className="mission-vision-icon">
              <FaBullseye size={22} />
            </div>
            <h3>{COMPANY_PAGE.mission.title}</h3>
            <p>{COMPANY_PAGE.mission.description}</p>
          </Reveal>
          <Reveal delay={100} className="mission-vision-card">
            <div className="mission-vision-icon">
              <FaEye size={22} />
            </div>
            <h3>{COMPANY_PAGE.vision.title}</h3>
            <p>{COMPANY_PAGE.vision.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">How We Work</span>
            <h2 className="section-title">From Concept to Continuous Support</h2>
          </Reveal>
          <div className="process-grid">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 90} className="process-step">
                <span className="process-step-number">{String(i + 1).padStart(2, "0")}</span>
                <div className="process-step-icon">
                  <step.icon size={18} />
                </div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">What Drives Us</span>
            <h2 className="section-title">Our Values</h2>
          </Reveal>
          <div className="values-grid">
            {COMPANY_PAGE.values.map((v, i) => {
              const Icon = VALUE_ICONS[i] || FaLightbulb;
              return (
                <Reveal key={v.title} delay={i * 80} className="value-card">
                  <div className="value-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section why-choose-section">
        <div className="container why-choose-grid">
          <Reveal className="why-choose-visual">
            <ScrollParallax speed={0.08}>
              <ImagePlaceholder label="Detail shot — robotic arm or assembly line" ratio="4 / 3" />
            </ScrollParallax>
          </Reveal>
          <Reveal delay={100}>
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
          </Reveal>
        </div>
      </section>

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
          <div className="company-cta-meta">
            <span>
              <FaMapMarkerAlt size={13} /> {CONTACT.location}
            </span>
            <span>
              <FaEnvelope size={13} /> {CONTACT.email}
            </span>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
