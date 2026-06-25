import "./FilterSidebar.css";

function FilterSidebar({ search, setSearch }) {
  return (
    <div className="filter-sidebar">

      <h4>Filters</h4>

      <input type="text" placeholder="Search Product..." className="form-control mb-4" value={search} onChange={(e) => setSearch(e.target.value)}/>

      <h5>Category</h5>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" />
        <label className="form-check-label">
          Necklaces
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" />
        <label className="form-check-label">
          Earrings
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" />
        <label className="form-check-label">
          Bangles
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" />
        <label className="form-check-label">
          Rings
        </label>
      </div>

    </div>
  );
}

export default FilterSidebar;