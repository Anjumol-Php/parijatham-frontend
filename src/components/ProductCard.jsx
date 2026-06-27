import "./ProductCard.css";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  return (
    
  <Link to={`/product/${product.id}`} className="text-decoration-none">
    <div className="product-card">

     <div className="product-image">

  <img src={product.image} alt={product.name} />

  <button
    className="wishlist-btn"
    onClick={(e) => {
      e.preventDefault();
      setLiked(!liked);
    }}
  >
    {liked ? "❤️" : "🤍"}
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
        <h5>
  <FaHeart />
</h5>

        <h4>₹{product.price}</h4>

        <button className="cart-btn">
          Add to Cart
        </button>

      </div>
    </div>
  
  </Link>
  );
}

export default ProductCard;