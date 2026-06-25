import "./ProductCard.css";
import { FaHeart, FaStar } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image">

        <img src={product.image} alt={product.name} />

        <button className="wishlist-btn">
          <FaHeart />
        </button>

        <span className="badge">{product.badge}</span>

      </div>

      <div className="product-info">

        <h5>{product.name}</h5>

        <div className="rating">
          {[...Array(product.rating)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>

        <h4>₹{product.price}</h4>

        <button className="cart-btn">
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;