import React from "react";

const SearchContainer = () => {
  const CloseSearchInNavbar = () => {
    document.getElementById("SearchInNavbar").style.display = "none";
    document.getElementById("MenuItemsInNavbar").style.display = "flex";
  };

  return (
    <div
      id="SearchInNavbar"
      className="
    md:flex
    space-y-4
    md:space-y-0 md:space-x-4
    items-center
    lg:hidden
  "
    >
      <div className="h-12 px-4 bg-white border rounded">
        <select className="h-full w-full bg-transparent outline-none">
          <option value>All</option>
          <option value>Shop Products</option>
          <option value>Tips &amp; Guides</option>
          <option value>Blogs &amp; Articles</option>
          <option value>Events &amp; Seminars</option>
          <option value>FAQ</option>
        </select>
      </div>
      <div className="relative flex-grow">
        <div className="h-12 px-4 bg-white border rounded flex items-center">
          <input
            type="text"
            placeholder="Search products"
            className="h-full w-full bg-transparent outline-none flex-grow"
          />
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div
          className="
        p-4
        bg-white
        border
        rounded
        absolute
        mt-2
        w-full
        text-gray-500 text-sm
        hidden
        lg:block
      "
        >
          <p>QUICK LINKS</p>
          <div className="px-2 mt-2 divide-y">
            <p className="p-2 hover:bg-gray-50">Shop all products online</p>
            <p className="p-2 hover:bg-gray-50">Online warranty registration</p>
            <p className="p-2 hover:bg-gray-50">Tips &amp; Help Guides</p>
            <p className="p-2 hover:bg-gray-50">Contact our customer care</p>
          </div>
        </div>
      </div>
      <svg
        onClick={CloseSearchInNavbar}
        xmlns="http://www.w3.org/2000/svg"
        id="CloseSearchInNavbar"
        className="h-6 w-6 cursor-pointer hover:opacity-50 hidden lg:block"
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
  );
};

export default SearchContainer;
