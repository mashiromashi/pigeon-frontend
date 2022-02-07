import React from "react";

const VerticalSlider = () => {
  return (
    <section className="relative">
      <div className="w-full vslide-1">
        <div
          className="
  bg-gray-900 bg-opacity-20
  w-full
  min-h-screen
  flex
  items-center
  justify-between
  px-6
  md:px-10
  xl:px-0
"
        >
          <div className="max-w-screen-sm mx-auto text-center text-white">
            <h3 className="text-4xl font-bold">Lovingly Designed</h3>
            <p className="text-2xl my-6">
              Breastfeeding is a natural way of Giving the best to your baby. It
              is the most unique ability of a mom and an admirable strength.
              We're here to support that in every way you need to give you the
              best experience.
            </p>
            <button
              className="
      px-6
      pt-4
      pb-3
      rounded-full
      bg-primary
      text-white text-sm
      font-bold
      hover:bg-white hover:text-primary
      transition-color
      duration-500
    "
            >
              Start your journey with us now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-6 w-6 -mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
          <div className="lg:absolute right-10 text-white space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="
      h-12
      w-12
      text-white
      hover:opacity-50
      transition-color
      duration-500
      cursor-pointer
      absolute
      top-10
      -ml-6
      left-[50%]
      lg:static lg:ml-0
    "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="
      h-12
      w-12
      text-white
      hover:opacity-50
      transition-color
      duration-500
      cursor-pointer
      absolute
      bottom-10
      -ml-6
      left-[50%]
      lg:static lg:ml-0
    "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalSlider;
