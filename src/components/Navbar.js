import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-bg  bg-gray-600 text-gray-50 h-20 border-b-1 border-gray-100 flex justify-center items-center">
      <div className="navbar container mx-auto flex items-center justify-evenly">
        <div className="left">
          <Link to="/">
            <span className="logo text-orange-500 font-medium text-2xl">
              Mellow
            </span>
          </Link>
          .JS
        </div>
        <div className="right flex gap-5">
          <Link to="/" className="nav-links hover:text-orange-500 duration-300">
            Home
          </Link>
          <Link
            to="docs"
            className="nav-links hover:text-orange-500 duration-300"
          >
            Docs
          </Link>
          <Link
            to="howtoinstall"
            className="nav-links hover:text-orange-500 duration-300"
          >
            How To Install
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
