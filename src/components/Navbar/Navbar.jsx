import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);
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

            <Link className="nav-link" to="/shop">
              Shop
            </Link>

            <li className="nav-item">
              <a className="nav-link" href="/">
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
            <li className="nav-item ms-3">
              <Link to="/cart" className="nav-link position-relative">
                <FaShoppingCart size={22} />

                {cartItems.length > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;