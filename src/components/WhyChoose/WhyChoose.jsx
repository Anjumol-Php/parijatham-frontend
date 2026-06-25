import "./WhyChoose.css";
import {
  FaGem,
  FaHeart,
  FaGift,
  FaShippingFast,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaGem />,
      title: "Premium Quality",
      text: "Every product is carefully selected and crafted with quality in mind.",
    },
    {
      icon: <FaHeart />,
      title: "Handmade With Love",
      text: "Unique handmade creations made with passion and attention to detail.",
    },
    {
      icon: <FaGift />,
      title: "Perfect For Gifting",
      text: "Beautiful jewellery and handmade gifts for every special occasion.",
    },
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      text: "Safe packaging and quick delivery across India.",
    },
  ];

  return (
    <section className="whychoose">
      <div className="container">

        <div className="section-header">
          <h2>Why Choose Parijatham</h2>
          <p>
            Crafted with passion, designed to make every moment special.
          </p>
        </div>

        <div className="row">

          {features.map((item, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>

              <div className="why-card">

                <div className="icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;