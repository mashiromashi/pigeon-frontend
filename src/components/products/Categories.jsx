import React from "react";

const Categories = () => {
  return (
    <div className="w-full lg:w-1/4 space-y-4">
      <div className="w-full flex space-x-4 items-center bg-gray-200 px-6 py-4 rounded-full">
        <input
          type="search"
          placeholder="Search Products"
          className="appearance-none w-full flex-grow bg-transparent outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div
        id="OpenCategoryMenu"
        className="flex lg:hidden items-center justify-between px-6 py-4 bg-primary text-white rounded-full text-bold"
      >
        <span>View all categories</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div
        id="CategoryMenu"
        className="hidden lg:block fixed inset-0 bg-white space-y-2 z-50 p-6 md:p-10 lg:static lg:bg-transparent lg:p-0"
      >
        <div className="lg:hidden flex justify-end mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="CloseCategoryMenu"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex items-center justify-between px-6 py-4 bg-primary text-white rounded-full text-bold">
          <span>All</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        </div>
        <div className="px-6 py-4 rounded-full bg-primary bg-opacity-0 text-gray-500 hover:bg-opacity-10 hover:font-bold cursor-pointer">
          New Products
        </div>
        <div className="px-6 py-4 rounded-full bg-primary bg-opacity-0 text-gray-500 hover:bg-opacity-10 hover:font-bold cursor-pointer">
          Best Seller
        </div>
        <div className="px-6 py-4 rounded-full bg-primary bg-opacity-0 text-gray-500 hover:bg-opacity-10 hover:font-bold cursor-pointer">
          Courier
        </div>
        <div className="px-6 py-4 rounded-full bg-primary bg-opacity-0 text-gray-500 hover:bg-opacity-10 hover:font-bold cursor-pointer">
          Anti-Bacterial
        </div>
        <div className="has-subcat text-gray-500">
          <div className="px-6 py-4 rounded-full bg-primary bg-opacity-0 hover:bg-opacity-10 hover:font-bold cursor-pointer">
            Baby Food
          </div>
          <div className="subcat space-y-2 p-4">
            <div className="px-6 py-2 hover:text-primary hover:font-bold cursor-pointer">
              Drinks
            </div>
            <div className="px-6 py-2 hover:text-primary hover:font-bold cursor-pointer">
              Snacks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
