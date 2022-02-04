import React from "react";
import Navbar from "components/navbar/Navbar";
import Hero from "components/hero/Hero";
import Video from "components/video/Video";
import VerticalSlider from "components/vertical/VerticalSlider";
import BodyCrousel from "components/body-crousel/BodyCrousel";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Video />
      <VerticalSlider />
      <BodyCrousel />
    </React.Fragment>
  );
};

export default LandingPage;
