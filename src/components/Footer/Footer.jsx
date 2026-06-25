function Footer() {
  return <div>Footer</div>;
}

export default Footer;import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row">

          <div className="col-lg-4 mb-4">
            <h2>Parijatham</h2>

            <p>
              Handmade jewellery, gifts and beautiful creations crafted with
              love for every special moment.
            </p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Quick Links</h5>

            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Collections</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Contact</h5>

            <p><FaPhone /> +91 9876543210</p>

            <p><FaEnvelope /> hello@parijatham.com</p>

            <p><FaMapMarkerAlt /> Kerala, India</p>
          </div>

          <div className="col-lg-3">
            <h5>Follow Us</h5>

            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaWhatsapp />
            </div>
          </div>

        </div>

        <hr />

        <div className="copyright">
          © 2026 Parijatham. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;