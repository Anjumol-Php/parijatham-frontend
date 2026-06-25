import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../layouts/AdminLayout";

function Categories() {

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);
  

  const loadCategories = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/categories"
    );

    setCategories(res.data);
  };

  const saveCategory = async (e) => {

    e.preventDefault();

    if(editId){

      await axios.put(
        `http://localhost:5000/api/categories/${editId}`,
        {
          name,
          slug: name.toLowerCase().replaceAll(" ","-")
        }
      );

      setEditId(null);

    }else{

      await axios.post(
        "http://localhost:5000/api/categories",
        {
          name,
          slug: name.toLowerCase().replaceAll(" ","-")
        }
      );

    }

    setName("");
    loadCategories();
  };
const deleteCategory = async (id) => {

  if (!window.confirm("Delete this category?"))
    return;

  await axios.delete(
    `http://localhost:5000/api/categories/${id}`
  );

  loadCategories();
};

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <AdminLayout>
      <div className="form-card">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Categories</h4>

          <span className="badge bg-warning text-dark">
            {categories.length} Categories
          </span>
        </div>
        <form onSubmit={saveCategory}>
          <div className="row">
            <div className="col-md-10">
              <input className="form-control" placeholder="Category Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="col-md-2">
              <button className="btn btn-orange w-100" type="submit">{editId ? "Update Category" : "Add Category"}</button>
            </div>
          </div>
        </form>
      </div>
      <div className="card border-0 shadow-sm">
        <div className="table-card">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>{cat.slug}</td>
                <td>
                    <button className="btn btn-sm btn-outline-primary"  onClick={() => {setEditId(cat.id);setName(cat.name);}}>Edit</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => deleteCategory(cat.id)}>Delete</button>
                </td>
               
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Categories;