import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PageBanner from "../components/PageBanner/PageBanner";

import FilterSidebar from "../components/Shop/FilterSidebar";
import ProductGrid from "../components/Shop/ProductGrid";

function Shop() {
    const [search, setSearch] = useState("");
  return (
    <>
      <Navbar />

      <PageBanner title="Shop" />

      <section className="container py-5">

        <div className="row">

          <div className="col-lg-3">

           <FilterSidebar search={search} setSearch={setSearch}/>

          </div>

          <div className="col-lg-9">

            <ProductGrid search={search}/>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Shop;