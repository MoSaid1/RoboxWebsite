import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="page not-found">
      <Seo title="Page Not Found" />
      <div className="container not-found-inner">
        <span className="not-found-code gradient-text">404</span>
        <h1 className="section-title">Page not found</h1>
        <p className="section-description">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
