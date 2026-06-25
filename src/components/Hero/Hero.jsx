import heroImage from "../../assets/images/hero1.png";
import "./Hero.css";
function Hero() {
  return (
    <section
      className="d-flex align-items-center"
      style={{
        height: "90vh",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgb(210 207 207 / 30%)"
        }}
      ></div>

      <div className="container position-relative text-white" style={{ paddingTop: "120px" }}>
        

      
      </div>
    </section>
  );
}

export default Hero;