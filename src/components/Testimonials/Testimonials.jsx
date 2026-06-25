import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "Anjali",
    place: "Kochi",
    review:
      "Absolutely loved the quality. The jewellery is elegant and beautifully crafted.",
  },
  {
    id: 2,
    name: "Meera",
    place: "Trivandrum",
    review:
      "Beautiful packaging and quick delivery. Perfect gift for my sister.",
  },
  {
    id: 3,
    name: "Arya",
    place: "Kottayam",
    review:
      "Amazing handmade collection. Will definitely purchase again.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">

        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Trusted by our happy customers across Kerala.</p>
        </div>

        <div className="row">

          {reviews.map((item) => (

            <div className="col-lg-4 mb-4" key={item.id}>

              <div className="testimonial-card">

                <div className="stars">
                  ★★★★★
                </div>

                <p className="review">
                  "{item.review}"
                </p>

                <h5>{item.name}</h5>

                <span>{item.place}</span>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;