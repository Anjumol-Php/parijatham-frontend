import { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import products from "../data/products";
import { CartContext } from "../context/CartContext";


function ProductDetails() {
  const { id } = useParams();
  const product = products.find(
    (item) => item.id === Number(id)
  );
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container text-center py-5">
          <h2>Product Not Found</h2>
          <Link to="/shop" className="btn btn-dark mt-3">
            Back to Shop
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="container py-5">

        <Link
          to="/shop"
          className="btn btn-outline-secondary mb-4"
        >
          ← Back to Shop
        </Link>

        <div className="row align-items-center">

          <div className="col-md-6 text-center">

            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded shadow"
              style={{
                maxHeight: "550px",
                objectFit: "cover"
              }}
            />

          </div>

          <div className="col-md-6">

            <span className="badge bg-warning text-dark mb-3">
              {product.badge}
            </span>

            <h1 className="mb-3">
              {product.name}
            </h1>

            <p className="text-muted fs-5">
              Category : {product.category}
            </p>

            <h2 className="text-danger mb-3">
              ₹{product.price}
            </h2>

            <hr />

            <h4>Description</h4>

            <p className="text-muted">
              Beautiful handcrafted jewellery made with love and care.
              Perfect for weddings, festivals and special occasions.
            </p>

            <p>
              <strong>Availability :</strong>{" "}
              <span className="text-success">
                In Stock
              </span>
            </p>

            <div className="d-flex align-items-center gap-3 mt-4">

              <div className="d-flex align-items-center border rounded">

                <button
                  className="btn btn-light"
                  onClick={() =>
                    quantity > 1 && setQuantity(quantity - 1)
                  }
                >
                  -
                </button>

                <span className="px-3 fw-bold">
                  {quantity}
                </span>

                <button
                  className="btn btn-light"
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                >
                  +
                </button>

              </div>

              <button
  className="btn btn-danger px-4"
  onClick={() => addToCart(product)}
>
  Add To Cart
</button>

              <button className="btn btn-dark px-4">
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;