import React from "react";
import Navbar from "components/navbar/Navbar";
import Hero from "components/landing-page/hero/Hero";
import Video from "components/landing-page/video/Video";
import VerticalSlider from "components/landing-page/vertical/VerticalSlider";
import BodyCrousel from "components/landing-page/body-crousel/BodyCrousel";
import Seminars from "components/landing-page/seminars/Seminars";
import FootStep from "components/landing-page/foot-step/FootStep";
import TipAndBlog from "components/tip&blog/TipAndBlog";
import ProductSection from "components/product-section/ProductSection";
import Gallery from "components/landing-page/gallery/Gallery";
import Footer from "components/footer/Footer";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Video />
      <VerticalSlider />
      <BodyCrousel />
      <Seminars />
      <FootStep />
      <TipAndBlog />
      <ProductSection />
      <Gallery />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
