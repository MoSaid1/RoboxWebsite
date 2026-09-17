import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaArrowRight } from "react-icons/fa";
import { NAV_CATEGORIES } from "../data/company.js";
import { getProducts } from "../lib/api.js";
import ThemeToggle from "./ThemeToggle.jsx";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(NAV_CATEGORIES[0].key);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setProductsOpen(false);
    setOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => {});
  }, []);

  const productsByCategory = useMemo(() => {
    const map = {};
    NAV_CATEGORIES.forEach((c) => {
      map[c.key] = products.filter((p) => p.category === c.category).slice(0, 4);
    });
    return map;
  }, [products]);

  const goTo = (path) => {
    setOpen(false);
    setProductsOpen(false);
    navigate(path);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <img src="/LogoIcon.png" alt="" />
          <span>Robox</span>
        </Link>

        <nav className="navbar-links">
          <NavLink to="/" className="nav-link" end>
            Home
          </NavLink>
          <div
            className="nav-dropdown"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="nav-link dropdown-trigger">
              Products <FaChevronDown size={11} className={productsOpen ? "rotated" : ""} />
            </button>

            <div className={`mega-menu ${productsOpen ? "open" : ""}`}>
              <div className="mega-menu-inner">
                <div className="mega-sidebar">
                  {NAV_CATEGORIES.map((c) => (
                    <button
                      key={c.key}
                      className={`mega-sidebar-item ${activeCategory === c.key ? "active" : ""}`}
                      onMouseEnter={() => setActiveCategory(c.key)}
                      onClick={() => goTo(`/products?category=${c.key}`)}
                    >
                      {c.label}
                      <FaArrowRight size={11} />
                    </button>
                  ))}
                  <button className="mega-sidebar-item all" onClick={() => goTo("/products")}>
                    All Products
                    <FaArrowRight size={11} />
                  </button>
                </div>
                <div className="mega-products">
                  {(productsByCategory[activeCategory] || []).map((p) => (
                    <button key={p.id} className="mega-product-card" onClick={() => goTo(`/products/${p.slug}`)}>
                      <span className="mega-product-image">
                        <img src={p.thumbnail} alt={p.name} />
                      </span>
                      <span className="mega-product-name">{p.name}</span>
                    </button>
                  ))}
                  {productsByCategory[activeCategory]?.length === 0 && (
                    <div className="mega-products-empty">No products yet in this category.</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/company" className="nav-link">
            Our Company
          </NavLink>
          <NavLink to="/blogs" className="nav-link">
            Blog
          </NavLink>
        </nav>

        <div className="navbar-cta">
          <ThemeToggle />
          <button className="btn btn-primary btn-sm" onClick={() => goTo("/contact")}>
            Get in Touch
          </button>
        </div>

        <ThemeToggle className="navbar-burger-theme-toggle" />
        <button className="navbar-burger" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <button className="mobile-link" onClick={() => goTo("/")}>
          Home
        </button>
        <div className="mobile-group">
          <button className="mobile-link" onClick={() => setProductsOpen((v) => !v)}>
            Products <FaChevronDown className={productsOpen ? "rotated" : ""} size={12} />
          </button>
          {productsOpen && (
            <div className="mobile-submenu">
              {NAV_CATEGORIES.map((c) => (
                <button key={c.key} onClick={() => goTo(`/products?category=${c.key}`)}>
                  {c.label}
                </button>
              ))}
              <button onClick={() => goTo("/products")}>All Products</button>
            </div>
          )}
        </div>
        <button className="mobile-link" onClick={() => goTo("/company")}>
          Our Company
        </button>
        <button className="mobile-link" onClick={() => goTo("/blogs")}>
          Blog
        </button>
        <button className="btn btn-primary" onClick={() => goTo("/contact")}>
          Get in Touch
        </button>
      </div>
    </header>
  );
}
