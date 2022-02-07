import React from "react";
import tip from "assets/img/card-img1.jpg";
import blog from "assets/img/card-img2.jpg";

const TipAndBlog = () => {
  return (
    <section className="bg-wave relative py-20 px-6 md:px-10 xl:px-0">
      <div
        className="
    max-w-screen-lg
    mx-auto
    lg:flex
    items-stretch
    relative
    space-y-6
    lg:space-y-0 lg:space-x-6
    xl:space-x-12
  "
      >
        <div className="w-full lg:w-1/2 rounded-xl bg-blue-200 overflow-hidden">
          <div className="relative">
            <img
              src={tip}
              alt="tip"
              className="aspect-[4/3] object-cover object-center"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              className="text-blue-200 absolute bottom-0"
              x="0px"
              y="0px"
              width="100%"
              viewBox="0 0 487 165"
              enableBackground="new 0 0 487 165"
              xmlSpace="preserve"
            >
              <path
                fill="currentColor"
                d="M15.413,0.81c53.283,2.917,96.534,20.555,139.168,40.117c41.204,18.896,82.188,38.799,124.883,51.982  c48.136,14.852,98.65,16.323,149.827,13.839c70.526-3.423,141.838-28.575,212.94-49.353C704.95,39.49,767.043,35.94,826.625,46.852  c56.738,9.841,111.428,29.593,160.504,68.929c61.512,49.532,108.271,122.73,142.151,218.325  c32.641,92.121,49.8,195.886,55.19,308.443c3.87,82.901,2.14,168.112-5.16,254.235c-6.74,81.313-15.75,162.655-30.27,243.625  c-21.58,120.2-50.08,237.83-100.2,344.771c-57.694,123.08-130.32,207.09-217.103,250.47c-42.759,21.15-83.525,19.43-123.486,8.23  c-43.027-12.061-83.645-33.16-126.286-46.38c-51.198-15.811-106.931-8.75-161.859,20.51c-58.362,30.37-114.328,74.56-169.179,124.97  c-53.283,48.89-108.332,81.78-164.655,91.78c-81.155,14.43-147.288-21.221-198.922-104.86  c-48.064-78.13-107.032-131.63-178.657-152.59c-23.962-7.021-48.967-9.92-73.785-13.271c-43.777-5.96-88.887-5.689-128.916-29.77  c-79.207-47.41-128.021-136.22-130.371-284.76c-1.097-69.91,11.464-140.61,33.784-209.91  c26.898-83.69,64.981-153.381,108.914-217.229c52.487-76.381,101.048-158.105,133.46-259.313  c13.579-42.329,25.246-85.859,32.244-130.389c12.777-81.257,26.023-162.173,50.183-240.925  c22.523-73.166,52.108-139.015,92.228-191.99c40.117-52.976,85.415-83.701,133.04-93.233C-19.396,1.842,1.625-1.628,15.413,0.81z"
              />
            </svg>
          </div>
          <div className="px-10 lg:px-4 pb-10 text-center text-gray-700">
            <p className="text-lg font-bold mb-2">Tips &amp; Guides</p>
            <p>
              Parenthood is constant learning and searching for the best way
              that works for you and your little one! It's never a linear
              journey so we've put together some tips to help you!
            </p>
            <button
              className="
          px-6
          py-3
          rounded-full
          bg-white
          text-primary text-sm
          font-bold
          mt-6
          hover:bg-primary hover:text-white
          transition-color
          duration-500
        "
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 rounded-xl bg-amber-200 overflow-hidden">
          <div className="relative">
            <img
              src={blog}
              alt="blog"
              className="aspect-[4/3] object-cover object-center"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              className="text-amber-200 absolute bottom-0"
              x="0px"
              y="0px"
              width="100%"
              viewBox="0 0 487 105.5"
              enableBackground="new 0 0 487 105.5"
              xmlSpace="preserve"
            >
              <path
                fill="currentColor"
                d="M62.271,22.746c68.721-1.478,126.988,12.828,184.778,29.139c55.854,15.754,111.587,32.547,168.417,42.376  c64.069,11.069,129.009,8.356,194.15,1.57c89.772-9.351,177.01-40.827,264.693-67.845c77.413-23.404,156.36-32.182,234.45-26.064  c74.27,5.265,147.54,20.764,216.8,56.614c86.85,45.167,158.66,115.591,217.63,209.826c56.8,90.813,95.69,194.736,120.92,308.567  c18.46,83.849,30.12,170.508,34.811,258.558c4.6,83.118,6.31,166.462,0.899,249.872c-8.05,123.84-25.39,245.65-72.18,358.391  c-53.84,129.779-133.18,221.119-237.26,272.39c-51.32,25.04-103.82,26.689-156.82,18.649c-57.07-8.67-112.53-26.699-169.3-36.569  c-68.15-11.8-138.381,0.02-203.967,34.3c-69.804,35.689-134.285,85.23-196.327,140.98c-60.282,54.069-125.432,92.06-195.94,106.899  c-101.592,21.41-192.101-9.28-271.856-89.899c-74.285-75.32-158.525-124.73-253.675-140.041c-31.835-5.14-64.332-6-96.665-7.329  c-57.04-2.41-114.771,1.62-169.963-19.49c-109.169-41.53-186.155-127.64-213.358-278.25c-12.793-70.9-8.22-143.72,9.081-215.94  c20.818-87.22,58.244-161.149,104.113-229.631c54.783-81.922,103.668-168.941,128.696-274.398  c10.499-44.109,18.352-89.277,20.061-135.071c3.132-83.564,6.917-166.823,25.032-248.794c16.931-76.161,44.098-145.48,86.853-202.61  C-120.901,81.817-67.89,46.848-8.445,33.203C17.857,26.694,44.215,21.419,62.271,22.746z"
              />
            </svg>
          </div>
          <div className="px-10 lg:px-4 pb-10 text-center text-gray-700">
            <p className="text-lg font-bold mb-2">Blogs &amp; Articles</p>
            <p>
              Parents who've gone down the same path can point out the bumps or
              help to buckle your seat belt and embrace what's to come! Read on
              more for some real-life parenting stories!
            </p>
            <button
              className="
          px-6
          py-3
          rounded-full
          bg-white
          text-primary text-sm
          font-bold
          mt-6
          hover:bg-primary hover:text-white
          transition-color
          duration-500
        "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipAndBlog;
