import products from "../../data/products";
import ProductCard from "../ProductCard";

function ProductGrid({  search, category }) {

  // Search filter
  const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "All" || product.category === category;

  return matchesSearch && matchesCategory;
});

  return (
    <>
      <h5 className="mb-4">
        Showing {filteredProducts.length} Products
      </h5>

      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductGrid;