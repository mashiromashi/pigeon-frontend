import Footer from "components/footer/Footer";
import Hero from "components/landing-page/hero/Hero";
import Navbar from "components/navbar/Navbar";
import Categories from "components/products/Categories";
import ProductCard from "components/products/ProductCard";
import React from "react";

const Products = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <div className="bg-gray-50 px-6 md:px-10 xl:px-0">
        <div className="max-w-screen-2xl mx-auto lg:flex space-y-12 lg:space-y-0 lg:space-x-12 pt-20">
          <Categories />
          <ProductCard />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Products;
