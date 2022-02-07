import BlogCard from "components/blog-articles/BlogCard";
import Feature from "components/blog-articles/Feature";
import Footer from "components/footer/Footer";
import Hero from "components/landing-page/hero/Hero";
import Navbar from "components/navbar/Navbar";
import React from "react";

const TipAndHelps = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <div className="px-6 md:px-10 xl:px-0">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex space-x-12 mt-20">
            <BlogCard />
            <Feature />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default TipAndHelps;
