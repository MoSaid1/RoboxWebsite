import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.slug}`} className="product-card">
      <div className="product-card-image">
        <img src={product.thumbnail} alt={product.name} loading="lazy" />
        <span className="badge product-card-badge">{product.category}</span>
      </div>
      <div className="product-card-body">
        <h3>{product.name}</h3>
        <p>{product.short_description}</p>
        <span className="product-card-link">
          View Details <FaArrowRight size={12} />
        </span>
      </div>
    </Link>
  );
}
