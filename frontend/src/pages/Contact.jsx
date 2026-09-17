import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import Seo from "../components/Seo.jsx";
import { CONTACT, INQUIRY_TYPES, HEAR_ABOUT_OPTIONS } from "../data/company.js";
import { getProducts, submitContact } from "../lib/api.js";
import "./Contact.css";

const EMPTY_FORM = {
  inquiryType: INQUIRY_TYPES[0],
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  products: [],
  message: "",
  hearAboutUs: "",
};

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => {});
  }, []);

  useEffect(() => {
    const productSlug = searchParams.get("product");
    if (productSlug) {
      setForm((f) => ({ ...f, products: [productSlug], inquiryType: "Request a Quote" }));
    }
  }, [searchParams]);

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const toggleProduct = (slug) => {
    setForm((f) => ({
      ...f,
      products: f.products.includes(slug) ? f.products.filter((p) => p !== slug) : [...f.products, slug],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setStatus("loading");
    try {
      await submitContact(form);
      setStatus("success");
      setForm(EMPTY_FORM);
      setTimeout(() => setStatus(null), 4000);
    } catch (err) {
      setStatus("error");
      setErrors(err.fields || {});
    }
  };

  return (
    <div className="page contact-page">
      <Seo title="Contact Us" description="Have questions about our robotic solutions? Contact Robox Industries today." />

      <div className="container contact-container">
        <div className="contact-left">
          <span className="eyebrow">Get in Touch</span>
          <h1 className="section-title">Contact Us</h1>
          <p className="section-description">
            Have questions or need assistance? Reach out to us, and our team will get back to you promptly.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>{CONTACT.location}</p>
              </div>
            </div>
            <div className="contact-info-item">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </div>
            <div className="contact-info-item">
              <FaPhoneAlt />
              <div>
                <h4>Phone</h4>
                <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
              </div>
            </div>
          </div>

          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="btn btn-ghost whatsapp-btn">
            <FaWhatsapp size={18} /> Chat on WhatsApp
          </a>
        </div>

        <form className="contact-form card" onSubmit={handleSubmit}>
          {status === "success" && (
            <div className="form-banner success">
              <FaCheckCircle /> Thanks! Your message has been sent — we'll get back to you shortly.
            </div>
          )}
          {status === "error" && !Object.keys(errors).length && (
            <div className="form-banner error">Something went wrong. Please try again.</div>
          )}

          <div className="form-row two">
            <div className="form-field">
              <label>First Name *</label>
              <input value={form.firstName} onChange={(e) => update("firstName", e.target.value)} required />
              {errors.firstName && <span className="field-error">{errors.firstName}</span>}
            </div>
            <div className="form-field">
              <label>Last Name *</label>
              <input value={form.lastName} onChange={(e) => update("lastName", e.target.value)} required />
              {errors.lastName && <span className="field-error">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-row two">
            <div className="form-field">
              <label>Email *</label>
              <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
            <div className="form-field">
              <label>Phone</label>
              <input value={form.phone} onChange={(e) => update("phone", e.target.value)} />
            </div>
          </div>

          <div className="form-row two">
            <div className="form-field">
              <label>Inquiry Type</label>
              <select value={form.inquiryType} onChange={(e) => update("inquiryType", e.target.value)}>
                {INQUIRY_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label>How did you hear about us?</label>
              <select value={form.hearAboutUs} onChange={(e) => update("hearAboutUs", e.target.value)}>
                <option value="">Select an option</option>
                {HEAR_ABOUT_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {products.length > 0 && (
            <div className="form-field">
              <label>Products of Interest</label>
              <div className="product-checks">
                {products.map((p) => (
                  <label key={p.slug} className={`product-check ${form.products.includes(p.slug) ? "checked" : ""}`}>
                    <input
                      type="checkbox"
                      checked={form.products.includes(p.slug)}
                      onChange={() => toggleProduct(p.slug)}
                    />
                    {p.name}
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="form-field">
            <label>Message *</label>
            <textarea rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} required />
            {errors.message && <span className="field-error">{errors.message}</span>}
          </div>

          <button className="btn btn-primary submit-btn" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
