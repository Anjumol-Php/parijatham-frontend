import "./Categories.css";

import necklace from "../../assets/images/categories/necklase.jpg";
import earrings from "../../assets/images/categories/earing.jpg";
import bangles from "../../assets/images/categories/bangles.jpg";
import rings from "../../assets/images/categories/ring.jpg";

const categories = [
  { name: "Necklaces", image: necklace },
  { name: "Earrings", image: earrings },
  { name: "Bangles", image: bangles },
  { name: "Rings", image: rings },
];

function Categories() {
  return (
    <section className="categories">
      <div className="container">

        <h2>Shop By Category</h2>

        <p>Discover handcrafted jewellery collections.</p>

        <div className="category-grid">

          {categories.map((item, index) => (
            <div className="category-card" key={index}>

              <img src={item.image} alt={item.name} />

              <h5>{item.name}</h5>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;