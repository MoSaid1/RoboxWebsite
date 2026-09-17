import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaCheck,
  FaArrowLeft,
  FaArrowRight,
  FaQuestionCircle,
  FaFileInvoice,
  FaPlayCircle,
  FaTools,
  FaHandshake,
  FaEllipsisH,
} from "react-icons/fa";
import Seo from "../components/Seo.jsx";
import { CONTACT, INQUIRY_TYPES, HEAR_ABOUT_OPTIONS } from "../data/company.js";
import { getProducts, submitContact } from "../lib/api.js";
import "./Contact.css";

const EMPTY_FORM = {
  inquiryType: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  products: [],
  message: "",
  hearAboutUs: "",
};

const INQUIRY_ICONS = {
  "General Inquiry": FaQuestionCircle,
  "Request a Quote": FaFileInvoice,
  "Product Demo": FaPlayCircle,
  "Technical Support": FaTools,
  Partnership: FaHandshake,
  Other: FaEllipsisH,
};

const STEPS = [
  { key: "type", label: "Inquiry" },
  { key: "products", label: "Products" },
  { key: "details", label: "Your Details" },
  { key: "message", label: "Message" },
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [step, setStep] = useState(0);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => {});
  }, []);

  useEffect(() => {
    const productSlug = searchParams.get("product");
    if (productSlug) {
      setForm((f) => ({ ...f, products: [productSlug], inquiryType: "Request a Quote" }));
      setStep(2);
    }
  }, [searchParams]);

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const toggleProduct = (slug) => {
    setForm((f) => ({
      ...f,
      products: f.products.includes(slug) ? f.products.filter((p) => p !== slug) : [...f.products, slug],
    }));
  };

  const validateStep = (index) => {
    const nextErrors = {};
    if (index === 0 && !form.inquiryType) {
      return false;
    }
    if (index === 2) {
      if (!form.firstName.trim()) nextErrors.firstName = "First name is required";
      if (!form.lastName.trim()) nextErrors.lastName = "Last name is required";
      if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = "A valid email is required";
    }
    if (index === 3) {
      if (!form.message.trim()) nextErrors.message = "Message is required";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goNext = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step !== STEPS.length - 1) {
      goNext();
      return;
    }
    if (!validateStep(step)) return;
    setStatus("loading");
    try {
      await submitContact(form);
      setStatus("success");
      setForm(EMPTY_FORM);
      setStep(0);
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      setStatus("error");
      setErrors(err.fields || {});
    }
  };

  const selectedProductNames = useMemo(
    () => products.filter((p) => form.products.includes(p.slug)).map((p) => p.name),
    [products, form.products]
  );

  if (status === "success") {
    return (
      <div className="page contact-page">
        <Seo title="Contact Us" description="Have questions about our robotic solutions? Contact Robox Industries today." />
        <div className="container contact-success">
          <div className="contact-success-icon">
            <FaCheckCircle size={32} />
          </div>
          <h1 className="section-title">Message sent</h1>
          <p className="section-description">Thanks for reaching out — our team will get back to you shortly.</p>
        </div>
      </div>
    );
  }

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
          <div className="stepper">
            {STEPS.map((s, i) => (
              <div key={s.key} className={`stepper-item ${i === step ? "active" : ""} ${i < step ? "done" : ""}`}>
                <span className="stepper-circle">{i < step ? <FaCheck size={11} /> : i + 1}</span>
                <span className="stepper-label">{s.label}</span>
              </div>
            ))}
          </div>

          {status === "error" && !Object.keys(errors).length && (
            <div className="form-banner error">Something went wrong. Please try again.</div>
          )}

          <div className="wizard-step" key={step}>
            {step === 0 && (
              <div className="wizard-panel">
                <h3 className="wizard-title">What can we help you with?</h3>
                <p className="wizard-subtitle">Pick the option that fits best — you can always tell us more later.</p>
                <div className="inquiry-grid">
                  {INQUIRY_TYPES.map((t) => {
                    const Icon = INQUIRY_ICONS[t] || FaQuestionCircle;
                    const active = form.inquiryType === t;
                    return (
                      <button
                        type="button"
                        key={t}
                        className={`inquiry-card ${active ? "active" : ""}`}
                        onClick={() => update("inquiryType", t)}
                      >
                        <Icon size={20} />
                        <span>{t}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="wizard-panel">
                <h3 className="wizard-title">Which products interest you?</h3>
                <p className="wizard-subtitle">Optional — select as many as you like, or skip this step.</p>
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

            {step === 2 && (
              <div className="wizard-panel">
                <h3 className="wizard-title">Your contact details</h3>
                <p className="wizard-subtitle">So our team knows how to reach you back.</p>
                <div className="form-row two">
                  <div className="form-field">
                    <label>First Name *</label>
                    <input value={form.firstName} onChange={(e) => update("firstName", e.target.value)} />
                    {errors.firstName && <span className="field-error">{errors.firstName}</span>}
                  </div>
                  <div className="form-field">
                    <label>Last Name *</label>
                    <input value={form.lastName} onChange={(e) => update("lastName", e.target.value)} />
                    {errors.lastName && <span className="field-error">{errors.lastName}</span>}
                  </div>
                </div>
                <div className="form-row two">
                  <div className="form-field">
                    <label>Email *</label>
                    <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                  <div className="form-field">
                    <label>Phone</label>
                    <input value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="wizard-panel">
                <h3 className="wizard-title">Your message</h3>
                <p className="wizard-subtitle">Tell us a bit more, and review your request before sending.</p>

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

                <div className="form-field">
                  <label>Message *</label>
                  <textarea rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <div className="wizard-summary">
                  <span className="wizard-summary-chip">{form.inquiryType || "General Inquiry"}</span>
                  {selectedProductNames.map((name) => (
                    <span className="wizard-summary-chip" key={name}>
                      {name}
                    </span>
                  ))}
                  {form.email && <span className="wizard-summary-chip muted">{form.email}</span>}
                </div>
              </div>
            )}
          </div>

          <div className="wizard-nav">
            {step > 0 ? (
              <button type="button" className="btn btn-ghost" onClick={goBack}>
                <FaArrowLeft size={12} /> Back
              </button>
            ) : (
              <span />
            )}

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={goNext}
                disabled={step === 0 && !form.inquiryType}
              >
                {step === 1 && form.products.length === 0 ? "Skip" : "Continue"} <FaArrowRight size={12} />
              </button>
            ) : (
              <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
