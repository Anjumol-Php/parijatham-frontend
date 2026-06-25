import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../layouts/AdminLayout";

function Products() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    category_id: "",
    name: "",
    description: "",
    price: "",
    sale_price: "",
    stock: ""
  });

  const loadProducts = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/products"
    );

    setProducts(res.data);
  };

  const loadCategories = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/categories"
    );

    setCategories(res.data);
  };

const saveProduct = async (e) => {

  e.preventDefault();

  let productId;

  if(editId){

    await axios.put(
      `http://localhost:5000/api/products/${editId}`,
      formData
    );

    productId = editId;

  } else {

    const productRes = await axios.post(
      "http://localhost:5000/api/products",
      formData
    );

    productId = productRes.data.product_id;
  }

  // Upload images
  for (const image of images) {

    const form = new FormData();

    form.append("image", image);

    const uploadRes = await axios.post(
      "http://localhost:5000/api/products/upload",
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );

    await axios.post(
      "http://localhost:5000/api/products/save-image",
      {
        product_id: productId,
        image: uploadRes.data.image
      }
    );

  }

  alert(
    editId
      ? "Product Updated"
      : "Product Saved"
  );

  setFormData({
    category_id: "",
    name: "",
    description: "",
    price: "",
    sale_price: "",
    stock: ""
  });

  setEditId(null);
  setImages([]);

  loadProducts();
};


const deleteProduct = async (id) => {

  if (!window.confirm("Are you sure?")) {
    return;
  }

  try {

    await axios.delete(
      `http://localhost:5000/api/products/delete/${id}`
    );

    alert("Product Deleted");

    loadProducts();

  } catch (err) {

    alert("Error deleting product");

  }

};

useEffect(() => {

    loadProducts();
    loadCategories();

  }, []);

  return (
    <AdminLayout>

      <div className="form-card">

        <h4 className="mb-3">
          Add Product
        </h4>

        <form onSubmit={saveProduct}>

          <div className="row">

            <div className="col-md-6 mb-3">

              <select
                className="form-control"
                value={formData.category_id}
                onChange={(e)=>
                  setFormData({
                    ...formData,
                    category_id:e.target.value
                  })
                }
              >

                <option value="">
                  Select Category
                </option>

                {categories.map(cat => (

                  <option
                    key={cat.id}
                    value={cat.id}
                  >
                    {cat.name}
                  </option>

                ))}

              </select>

            </div>

            <div className="col-md-6 mb-3">

              <input
                className="form-control"
                placeholder="Product Name"
                value={formData.name}
                onChange={(e)=>
                  setFormData({
                    ...formData,
                    name:e.target.value
                  })
                }
              />

            </div>

            <div className="col-md-12 mb-3">

              <textarea
                className="form-control"
                placeholder="Description"
                value={formData.description}
                onChange={(e)=>
                  setFormData({
                    ...formData,
                    description:e.target.value
                  })
                }
              />

            </div>

            <div className="col-md-4">

              <input
                className="form-control"
                placeholder="Price"
                value={formData.price}
                onChange={(e)=>
                  setFormData({
                    ...formData,
                    price:e.target.value
                  })
                }
              />

            </div>

            <div className="col-md-4">

              <input
                className="form-control"
                placeholder="Offer Price"
                value={formData.sale_price}
                onChange={(e)=>
                  setFormData({
                    ...formData,
                    sale_price:e.target.value
                  })
                }
              />

            </div>

            <div className="col-md-4">

              <input
                className="form-control"
                placeholder="Stock"
                value={formData.stock}
                onChange={(e)=>
                  setFormData({
                    ...formData,
                    stock:e.target.value
                  })
                }
              />

            </div>

            <div className="col-md-12 mt-3">

              <input
                type="file"
                multiple
                className="form-control"
                onChange={(e) =>
                  setImages([...e.target.files])
                }
              />

            </div>
            

            <div className="col-md-12 mt-3">

              <button
                className="btn btn-orange"
              >
                 {editId
    ? "Update Product"
    : "Save Product"}
              </button>

            </div>

          </div>

        </form>

      </div>

      <div className="table-card">

        <h4>
          Products
        </h4>

        <table className="table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Image</th>
              <th>Price</th>
              <th>Offer</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {products.map(product => (

              <tr key={product.id}>

                <td>{product.id}</td>

                <td>{product.name}</td>

                <td>{product.category_name}</td>
                <td>

                    {product.thumbnail ? (

                      <img
                        src={`http://localhost:5000/uploads/products/${product.thumbnail}`}
                        alt=""
                        width="60"
                        height="60"
                        style={{
                          objectFit: "cover",
                          borderRadius: "10px"
                        }}
                      />

                    ) : (

                      "No Image"

                    )}

                </td>

                <td>₹{product.price}</td>

                <td>₹{product.sale_price}</td>

                <td>{product.stock}</td>
                <td>

                  <button
                    className="btn btn-sm btn-outline-primary me-2" onClick={() => {

    setEditId(product.id);
    setFormData({
      category_id: product.category_id,
      name: product.name,
      description: product.description,
      price: product.price,
      sale_price: product.sale_price,
      stock: product.stock
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm btn-outline-danger" onclick={() => deleteProduct(product.id)} 
                  >
                    Delete
                  </button>

                </td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}

export default Products;