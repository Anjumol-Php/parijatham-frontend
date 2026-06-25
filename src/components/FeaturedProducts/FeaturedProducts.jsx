import "./FeaturedProducts.css";

import product1 from "../../assets/images/products/product1.jpg";
import product2 from "../../assets/images/products/product2.jpg";
import product3 from "../../assets/images/products/product3.jpg";
import product4 from "../../assets/images/products/product4.jpg";

const products = [
  {
    id: 1,
    name: "Temple Necklace",
    price: "₹1,499",
    image: product1,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Pearl Earrings",
    price: "₹799",
    image: product2,
    badge: "New",
  },
  {
    id: 3,
    name: "Gold Bangles",
    price: "₹1,299",
    image: product3,
    badge: "Trending",
  },
  {
    id: 4,
    name: "Elegant Ring",
    price: "₹599",
    image: product4,
    badge: "New",
  },
];

function FeaturedProducts() {
  return (
    <section className="featured-section">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>

        <div className="row">
          {products.map((product) => (
            <div className="col-lg-3 col-md-6 mb-4" key={product.id}>
              <div className="product-card">

                <span className="badge">{product.badge}</span>

                <img src={product.image} alt={product.name} />

                <h5>{product.name}</h5>

                <div className="stars">★★★★★</div>

                <h4>{product.price}</h4>

                <button>Add to Cart</button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;