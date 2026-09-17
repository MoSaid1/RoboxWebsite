import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Seo from "../components/Seo.jsx";
import { Loading, ErrorMessage } from "../components/StateMessage.jsx";
import { getBlogs } from "../lib/api.js";
import "./Blogs.css";

export default function Blogs() {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getBlogs().then(setBlogs).catch(() => setError(true));
  }, []);

  return (
    <div className="page blogs-page">
      <Seo title="Blog" description="News, insights, and stories from Robox Industries." />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Insights</span>
          <h1 className="section-title">Robox Blog</h1>
          <p className="section-description">Latest news, partnerships, and stories from the world of Robox robotics.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {!blogs && !error && <Loading label="Loading posts..." />}
          {error && <ErrorMessage message="Could not load blog posts right now." />}
          {blogs?.length === 0 && <ErrorMessage message="No blog posts yet — check back soon." />}
          {blogs?.length > 0 && (
            <div className="blog-grid">
              {blogs.map((b) => (
                <Link to={`/blogs/${b.slug}`} key={b.id} className="blog-card">
                  <div className="blog-card-image">
                    <img src={b.photo} alt={b.title} loading="lazy" />
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-card-date">
                      {new Date(b.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <h3>{b.title}</h3>
                    <p>{b.excerpt}</p>
                    <span className="blog-card-link">
                      Read More <FaArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
