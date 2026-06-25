import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {

    const res = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );

    setProduct(res.data);
  };

  if (!product)
    return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container py-5">

      <div className="row">

        <div className="col-md-6">

          <img
            src={`http://localhost:5000/uploads/products/${product.thumbnail}`}
            className="img-fluid rounded shadow"
            alt=""
          />

        </div>

        <div className="col-md-6">

          <h2>{product.name}</h2>

          <p className="text-muted">
            {product.category_name}
          </p>

          <h3 className="text-success">
            ₹{product.sale_price}
          </h3>

          <h5 className="text-decoration-line-through text-muted">
            ₹{product.price}
          </h5>

          <p>
            Stock: {product.stock}
          </p>

          <hr />

          <h5>Description</h5>

          <p>
            {product.description}
          </p>

          <button className="btn btn-warning me-2">
            Add To Cart
          </button>

          <button className="btn btn-success">
            Buy Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;