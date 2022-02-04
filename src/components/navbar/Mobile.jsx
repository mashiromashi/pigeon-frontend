import React from "react";

const Mobile = (props) => {
  const closeMobileMenu = () => {
    document.getElementById("MobileMenu").style.display = "none";
  };

  return (
    <div
      id="MobileMenu"
      className="
    hidden
    lg:block
    fixed
    inset-0
    w-full
    h-full
    bg-white
    p-6
    md:p-10
    lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:p-0
  "
    >
      <div className="flex lg:hidden justify-end text-primary mb-10">
        <svg
          onClick={closeMobileMenu}
          xmlns="http://www.w3.org/2000/svg"
          id="CloseMobileMenu"
          className="h-6 w-6 cursor-pointer hover:opacity-50"
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
      {props.children}
    </div>
  );
};

export default Mobile;
