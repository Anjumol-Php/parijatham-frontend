import "./WhyChoose.css";
import { FaGem, FaHandsHelping, FaGift, FaTruck } from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaGem />,
      title: "Premium Quality",
      desc: "Carefully crafted with high-quality materials.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Handmade with Love",
      desc: "Every product is handcrafted with attention to detail.",
    },
    {
      icon: <FaGift />,
      title: "Perfect for Gifting",
      desc: "Beautiful gifts for every special occasion.",
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      desc: "Safe and reliable delivery across India.",
    },
  ];

  return (
    <section className="why-section">
      <div className="container">
        <h2>Why Choose Parijatham</h2>

        <div className="row">
          {features.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="why-card">
                <div className="icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;