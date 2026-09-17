import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import Seo from "../components/Seo.jsx";
import SectionBlock from "../components/SectionBlock.jsx";
import { Loading, ErrorMessage } from "../components/StateMessage.jsx";
import { getBlog } from "../lib/api.js";
import "./BlogDetail.css";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setBlog(null);
    setError(false);
    getBlog(slug).then(setBlog).catch(() => setError(true));
  }, [slug]);

  if (error) {
    return (
      <div className="page">
        <ErrorMessage message="This blog post could not be found." />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="page">
        <Loading label="Loading post..." />
      </div>
    );
  }

  const paragraphs = (blog.text || "").split("\n").filter(Boolean);

  return (
    <div className="page blog-detail">
      <Seo title={blog.title} description={blog.excerpt} />

      <div className="container breadcrumb">
        <Link to="/blogs" className="breadcrumb-back">
          <FaChevronLeft size={12} /> Back to Blog
        </Link>
      </div>

      <section className="container blog-detail-header">
        <span className="blog-card-date">
          {new Date(blog.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </span>
        <h1>{blog.title}</h1>
      </section>

      {blog.photo && (
        <div className="container blog-detail-cover">
          <img src={blog.photo} alt={blog.title} />
        </div>
      )}

      <section className="container blog-detail-text">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      {blog.sections?.length > 0 && (
        <section className="container blog-detail-sections">
          {blog.sections.map((s, i) => (
            <SectionBlock
              key={i}
              title={s.title}
              description={s.text}
              image={s.photo}
              imagePosition={i % 2 === 0 ? "right" : "left"}
            />
          ))}
        </section>
      )}

      <div className="container blog-detail-footer">
        <Link to="/blogs" className="btn btn-ghost">
          ← Back to All Posts
        </Link>
      </div>
    </div>
  );
}
