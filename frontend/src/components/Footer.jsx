import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { CONTACT, NAV_CATEGORIES } from "../data/company.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <img src="/Logo-white.png" alt="Robox Industries" className="footer-logo" />
          <p>
            Robox Industries designs, manufactures, and assembles advanced robotic solutions — delivery, advertising,
            service, and educational robots built for the future of automation.
          </p>
          <div className="footer-social">
            <a href={CONTACT.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={CONTACT.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/company">Our Company</Link></li>
            <li><Link to="/blogs">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Products</h4>
          <ul>
            {NAV_CATEGORIES.map((c) => (
              <li key={c.key}>
                <Link to={`/products?category=${c.key}`}>{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <div className="footer-contact-item">
            <FaMapMarkerAlt />
            <span>{CONTACT.location}</span>
          </div>
          <div className="footer-contact-item">
            <FaEnvelope />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
          <div className="footer-contact-item">
            <FaPhoneAlt />
            <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Robox Industries. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
