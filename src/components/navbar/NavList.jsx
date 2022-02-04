import React from "react";

const NavList = (props) => {
  return (
    <li
      className="
    px-4
    py-2
    border-b-2 border-transparent
    lg:hover:border-primary
    cursor-pointer
  "
    >
      {props.title}
      {props.children}
    </li>
  );
};

export default NavList;
