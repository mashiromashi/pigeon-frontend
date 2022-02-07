import React from "react";

const BodyCrousel = () => {
  return (
    <section className="relative">
      <div className="w-full carousel-2">
        <div className="overlay w-full px-6 md:px-10 xl:px-0">
          <div className="absolute bottom-0 left-0 w-full block md:hidden">
            <svg width="100%" viewBox="0 0 1279.953 287.989">
              <path
                fill="#E1D7D7"
                d="M1280.452,288.489c-426.65,0-853.301,0-1279.952,0   c0-12.333,0-24.666,0-36.999c1.347,0.138,1.792-1.065,2.482-1.785c11.366-11.865,23.349-23.065,36.008-33.54   c43.81-36.246,93.213-62.097,147.318-79.184c16.824-5.313,33.836-9.819,51.477-11.53c3.363-0.326,6.682-1.148,10.047-1.388   c8.472-0.603,16.954-1.254,25.441-1.437c19.918-0.429,39.729,1.154,59.453,3.862c4.808,0.66,9.613,1.359,14.402,2.145   c4.8,0.788,9.597,1.617,14.364,2.586c8.796,1.788,17.589,3.599,26.346,5.565c26.324,5.911,52.346,13.01,78.398,19.99   c23.721,6.354,47.455,12.656,71.441,17.955c5.492,1.214,11.015,2.287,16.525,3.417c3.799,0.779,7.583,1.653,11.407,2.286   c3.158,0.523,6.365,0.751,9.549,1.118c6.01,0.693,11.969,1.773,18.029,2.098c9.563,0.511,19.111,1.524,28.677,1.688   c11.821,0.202,23.661-0.023,35.476-0.487c9.524-0.374,19.045-1.133,28.5-2.47c4.593-0.65,9.201-1.203,13.775-1.961   c6.648-1.1,13.302-2.208,19.903-3.554c18.412-3.754,36.448-8.922,54.317-14.704c20.35-6.585,40.391-13.992,60.162-22.154   c18.16-7.497,36.045-15.593,53.7-24.197c28.39-13.835,56.077-28.975,83.345-44.895c38.036-22.207,77.974-40.029,120.378-52.154   c14.652-4.19,29.461-7.717,44.481-10.305c5.615-0.968,11.278-1.665,16.92-2.484c4.487-0.652,8.956-1.518,13.466-1.909   c10.203-0.885,20.419-1.708,30.645-2.239c14.072-0.73,28.151-0.501,42.209,0.529c3.891,0.285,7.766,0.77,11.65,1.13   c3.133,0.291,6.283,0.426,9.401,0.818c5.399,0.678,10.783,1.479,16.166,2.278c1.389,0.206,2.75,0.595,4.124,0.899   c-0.011,1.166-0.029,2.331-0.029,3.497C1280.452,103.481,1280.452,195.985,1280.452,288.489z"
              />
            </svg>
            <div className="h-[35vh] bg-[#E1D7D7]" />
          </div>
          <div
            className="
          max-w-screen-xl
          min-h-screen
          mx-auto
          flex
          items-end
          lg:items-center
          relative
        "
          >
            <div className="text-primary w-full lg:w-96 mb-32 lg:mb-0">
              <p className="text-xl font-bold">Subtainability</p>
              <span className="inline-block my-4 w-12 border-b-2 border-primary" />
              <h3 className="text-3xl">
                Pigeon commits to 'Love Our Babies, Love Our Planet'
              </h3>
              <button
                className="
              px-6
              py-3
              rounded-full
              bg-primary
              text-white text-sm
              font-bold
              mt-6
              hover:bg-white hover:text-primary
              transition-color
              duration-500
            "
              >
                Learn More
              </button>
            </div>
            <div
              className="
            absolute
            bottom-10
            w-full
            flex
            items-center
            justify-between
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="
              h-12
              w-12
              text-primary
              lg:text-white
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
              <div className="flex space-x-4 items-center">
                <div
                  className="
                flex
                items-center
                justify-center
                w-6
                h-6
                rounded-full
                border border-primary
                lg:border-white
                cursor-pointer
              "
                >
                  <span
                    className="
                  inline-block
                  w-4
                  h-4
                  bg-primary
                  lg:bg-white
                  rounded-full
                "
                  />
                </div>
                <div
                  className="
                flex
                items-center
                justify-center
                w-6
                h-6
                rounded-full
                border border-primary
                lg:border-white
                cursor-pointer
              "
                >
                  <span className="inline-block w-4 h-4 bg-transparent rounded-full" />
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="
              h-12
              w-12
              text-primary
              lg:text-white
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

export default BodyCrousel;
