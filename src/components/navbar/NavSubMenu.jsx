import React from "react";

const NavSubMenu = (props) => {
  return (
    <div className="lg:absolute left-0 w-full mt-2 pt-1 submenu-container">
      <div
        className="
          lg:pt-16 lg:pb-10 lg:bg-gray-50
          px-4
          md:px-6
          lg:px-10
          xl:px-0
        "
      >
        <div className="max-w-screen-xl mx-auto">
          <h6 className="text-2xl font-bold text-primary py-2 hidden lg:block">
            {props.subTitle}
          </h6>
          <div className="lg:flex lg:space-x-2 lg:mt-4">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default NavSubMenu;
