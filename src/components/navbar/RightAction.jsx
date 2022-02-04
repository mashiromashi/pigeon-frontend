import React from "react";

const RightAction = () => {
  const OpenSearchInNavbar = () => {
    document.getElementById("SearchInNavbar").style.display = "flex";
    document.getElementById("MenuItemsInNavbar").style.display = "none";
  };

  const openMobileMenu = () => {
    document.getElementById("MobileMenu").style.display = "block";
  };

  return (
    <div className="text-primary flex items-center space-x-6 h-12">
      <svg
        onClick={OpenSearchInNavbar}
        xmlns="http://www.w3.org/2000/svg"
        id="OpenSearchInNavbar"
        className="h-6 w-6 cursor-pointer hover:opacity-50 hidden lg:block"
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 cursor-pointer hover:opacity-50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 cursor-pointer hover:opacity-50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      <svg
        onClick={openMobileMenu}
        xmlns="http://www.w3.org/2000/svg"
        id="OpenMobileMenu"
        className="h-6 w-6 lg:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
};

export default RightAction;
