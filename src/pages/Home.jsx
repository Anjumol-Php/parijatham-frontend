import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Collections from "../components/Collections/Collections";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Footer from "../components/Footer/Footer";
import Categories from "../components/Categories/Categories";
import WhyChoose from "../components/WhyChoose/WhyChoose";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChoose />
      <Collections />
      <Footer />
    </>
  );
}

export default Home;