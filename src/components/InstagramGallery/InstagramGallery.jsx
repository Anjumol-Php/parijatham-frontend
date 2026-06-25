import "./InstagramGallery.css";

import insta1 from "../../assets/images/instagram/insta1.jpg";
import insta2 from "../../assets/images/instagram/insta2.jpg";
import insta3 from "../../assets/images/instagram/insta3.jpg";
import insta4 from "../../assets/images/instagram/insta4.AVIF";
import insta5 from "../../assets/images/instagram/insta5.jpg";
import insta6 from "../../assets/images/instagram/insta6.jpg";

const images = [
  insta1,
  insta2,
  insta3,
  insta4,
  insta5,
  insta6,
];

function InstagramGallery() {
  return (
    <section className="instagram-gallery">
      <div className="container">

        <div className="section-header">
          <h2>Follow Us On Instagram</h2>
          <p>@parijatham_jewellery</p>
        </div>

        <div className="row">
          {images.map((image, index) => (
            <div className="col-lg-2 col-md-4 col-6 mb-4" key={index}>
              <div className="insta-card">
                <img src={image} alt={`Instagram ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default InstagramGallery;