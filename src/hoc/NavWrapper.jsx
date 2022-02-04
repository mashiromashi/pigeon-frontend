import React from "react";
import logo from "assets/img/logo.svg";
import { Link } from "react-router-dom";

const NavWrapper = (props) => {
  return (
    <nav className="bg-slate-50 py-4 fixed w-full top-0 z-40 px-6 md:px-10 xl:px-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="h-8" />
            </Link>
          </div>
          {props.children}
        </div>
      </div>
    </nav>
  );
};

export default NavWrapper;
