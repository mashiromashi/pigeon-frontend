import React from "react";
import homeProduct from "assets/img/home-product.jpg";
import quotation from "assets/img/quotation-mark.png";

const ProductSection = () => {
  return (
    <section className="bg-green-50 py-20 px-6 md:px-10 xl:px-0">
      <div
        className="
    max-w-screen-lg
    mx-auto
    lg:flex
    items-center
    space-y-6
    lg:space-y-0
  "
      >
        <div className="w-full lg:w-1/2 lg:ml-6">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={homeProduct}
              alt="homeProduct1"
              className="aspect-square"
            />
            <div
              className="
          absolute
          inset-0
          w-full
          h-full
          flex
          items-center
          justify-center
          bg-white bg-opacity-25
        "
            >
              <button
                className="
            px-6
            py-3
            rounded-full
            bg-primary
            text-white text-sm
            font-bold
            hover:bg-white hover:text-primary
            transition-color
            duration-500
          "
              >
                See Product
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:-ml-12 relative">
          <div className="bg-green-100 p-10 rounded-xl shadow-md">
            <img src={quotation} alt="quotation" />
            <p className="ml-8 mt-2 mb-20">
              I have started to use the go mini pump and like it alot, I fount
              it really efficient!
            </p>
            <h5 className="text-2xl font-bold text-primary mb-10">Hazel</h5>
            <div className="flex space-x-2 items-center justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="
            h-12
            w-12
            text-primary
            hover:opacity-50
            transition-color
            duration-500
            cursor-pointer
          "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="
            h-12
            w-12
            text-primary
            hover:opacity-50
            transition-color
            duration-500
            cursor-pointer
          "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
