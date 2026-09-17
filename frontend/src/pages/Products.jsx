import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { Loading, ErrorMessage } from "../components/StateMessage.jsx";
import { getProducts } from "../lib/api.js";
import { NAV_CATEGORIES } from "../data/company.js";
import "./Products.css";

const TABS = [{ key: "all", label: "All Products" }, ...NAV_CATEGORIES];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeKey = searchParams.get("category") || "all";
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setProducts(null);
    setError(false);
    const tab = TABS.find((t) => t.key === activeKey);
    const category = tab?.category || "all";
    getProducts(category)
      .then(setProducts)
      .catch(() => setError(true));
  }, [activeKey]);

  return (
    <div className="page products-page">
      <Seo
        title="Products"
        description="Explore Robox Industries' full range of delivery, advertising, service, and educational robots."
      />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Products</span>
          <h1 className="section-title">Robots engineered for every operation</h1>
          <p className="section-description">
            From last-mile delivery to interactive advertising and classroom robotics — find the platform built for
            your use case.
          </p>
        </div>
      </section>

      <section className="section products-body">
        <div className="container">
          <div className="products-tabs">
            {TABS.map((t) => (
              <button
                key={t.key}
                className={`products-tab ${activeKey === t.key ? "active" : ""}`}
                onClick={() => setSearchParams(t.key === "all" ? {} : { category: t.key })}
              >
                {t.label}
              </button>
            ))}
          </div>

          {!products && !error && <Loading label="Loading products..." />}
          {error && <ErrorMessage message="Could not load products right now." />}
          {products && products.length === 0 && <ErrorMessage message="No products found in this category yet." />}
          {products?.length > 0 && (
            <div className="products-grid">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
