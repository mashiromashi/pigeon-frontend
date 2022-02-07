import React from "react";
import slide1 from "assets/img/home-slide1.jpg";
import slide2 from "assets/img/home-slide2.jpg";
import slide3 from "assets/img/home-slide3.jpg";

const Gallery = () => {
  return (
    <section className="bg-amber-50 py-20 px-6 md:px-10 xl:px-0">
      <div className="max-w-screen-lg mx-auto text-center">
        <h3 className="text-4xl font-bold text-primary mb-6">
          Celebrate Babies The Way They Are
        </h3>
        <p className="text-gray-700">
          Follow us on instagram, which babies in action.
        </p>
        <div className="md:flex items-center space-y-6 md:space-y-0 md:space-x-6 mt-10">
          <div className="w-full md:w-1/4">
            <img
              src={slide1}
              alt="slide1"
              className="aspect-square object-cover object-center rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/4">
            <img
              src={slide2}
              alt="slide2"
              className="aspect-square object-cover object-center rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/4">
            <img
              src={slide3}
              alt="slide3"
              className="aspect-square object-cover object-center rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/4">
            <img
              src={slide1}
              alt="slide4"
              className="aspect-square object-cover object-center rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
