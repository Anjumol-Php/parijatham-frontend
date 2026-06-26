import "./FilterSidebar.css";

function FilterSidebar({ search, setSearch, category, setCategory }) {
  return (
    <div className="filter-sidebar">

      <h4>Filters</h4>

      <input type="text" placeholder="Search Product..." className="form-control mb-4" value={search} onChange={(e) => setSearch(e.target.value)}/>

      <h5>Category</h5>
      <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="category"
            checked={category === "All"}
            onChange={() => setCategory("All")}
          />
          <label className="form-check-label">
            All
          </label>
        </div>
      <div className="form-check">
  <input
    className="form-check-input"
    type="radio"
    name="category"
    checked={category === "Necklaces"}
    onChange={() => setCategory("Necklaces")}
  />
  <label className="form-check-label">
    Necklaces
  </label>
</div>
<div className="form-check">
  <input
    className="form-check-input"
    type="radio"
    name="category"
    checked={category === "Earrings"}
    onChange={() => setCategory("Earrings")}
  />
  <label className="form-check-label">
    Earrings
  </label>
</div>

     <div className="form-check">
  <input
    className="form-check-input"
    type="radio"
    name="category"
    checked={category === "Bangles"}
    onChange={() => setCategory("Bangles")}
  />
  <label className="form-check-label">
    Bangles
  </label>
</div>

<div className="form-check">
  <input
    className="form-check-input"
    type="radio"
    name="category"
    checked={category === "Rings"}
    onChange={() => setCategory("Rings")}
  />
  <label className="form-check-label">
    Rings
  </label>
</div>

    </div>
  );
}

export default FilterSidebar;