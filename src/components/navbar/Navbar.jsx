import NavWrapper from "hoc/NavWrapper";
import React from "react";
import Mobile from "./Mobile";
import RightAction from "./RightAction";
import SearchContainer from "./SearchContainer";
import NavLists from "./NavLists";

const Navbar = () => {
  return (
    <NavWrapper>
      <Mobile>
        {/* Center search container is here */}
        <SearchContainer />
        {/* Center menu items are here */}
        <NavLists />
      </Mobile>
      {/* Right Action */}
      <RightAction />
    </NavWrapper>
  );
};

export default Navbar;
