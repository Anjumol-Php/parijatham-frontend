import "./Collections.css";

import bridal from "../../assets/images/collections/bridal.jpg";
import everyday from "../../assets/images/collections/everyday.jpg";
import handmade from "../../assets/images/collections/handmade.jpg";
import crochet from "../../assets/images/collections/crochet.jpg";

const collections = [
  {
    title: "Bridal Collection",
    image: bridal,
  },
  {
    title: "Everyday Elegance",
    image: everyday,
  },
  {
    title: "Handmade Gifts",
    image: handmade,
  },
  {
    title: "Crochet Collection",
    image: crochet,
  },
];

function Collections() {
  return (
    <section className="collections">
      <div className="container">

        <div className="section-header">
          <h2>Explore Our Collections</h2>
          <p>
            Discover timeless jewellery and handcrafted creations made with love.
          </p>
        </div>

        <div className="row">

          {collections.map((item, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>

              <div className="collection-card">

                <img src={item.image} alt={item.title} />

                <div className="collection-content">
                  <h4>{item.title}</h4>

                  <button>Explore</button>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Collections;