import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Collections from "../components/Collections/Collections";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Footer from "../components/Footer/Footer";
import Categories from "../components/Categories/Categories";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <Navbar />

<Hero />

<Collections />

<WhyChoose />

<FeaturedProducts />

<Categories />
<Testimonials />

<Footer />
    </>
  );
}

export default Home;