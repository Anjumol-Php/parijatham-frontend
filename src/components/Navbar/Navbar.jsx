import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <a
  className="navbar-brand fw-bold fs-2"
  style={{ color: "#C8A45D" }}
>
  Parijatham
</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Collections
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;