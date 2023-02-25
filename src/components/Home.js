import React from "react";
import { Link } from "react-router-dom";
import About from "./About";

const Home = () => {
  return (
    <div className="home mx-auto">
      <div className="bg-slate-800 relative min-w-fit min-h-min">
        <div className="container flex flex-col items-center mx-auto justify-center p-16 gap-9">
          <p className="text-orange-500 font-semibold text-4xl">Mellow</p>
          <p className="text-orange-50">
            A JavaScript library for building user interfaces
          </p>
          <div className="flex gap-3">
            <Link
              to="docs"
              className="bg-orange-500 p-2 rounded text-slate-800 hover:bg-slate-50 duration-300"
            >
              Get Started
            </Link>
            <Link to="howtoinstall" className="text-orange-50 p-2 nav-links">
              Learn to Install
            </Link>
          </div>
        </div>
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default Home;
