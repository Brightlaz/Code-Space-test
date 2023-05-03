import React from "react";
import { ReactComponent as Logo } from "../images/asset.svg";
import arrow from "../images/arrow.svg";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="relative w-full bg-[url('images/hero.png')] bg-no-repeat bg-center bg-cover h-screen overflow-x-hidden">
      <div
        className="absolute sm:-top-20 -top-28 sm:-right-20 -right-28"
        id="asset"
      >
        <Logo className="animate-[spin_10s_linear_infinite]" alt="shapes" />
      </div>
      <div
        className="absolute sm:bottom-12 left-0 bottom-32 sm:translate-x-0 -translate-x-8 sm:rotate-0 -rotate-12"
        id="arrow"
      >
        <img src={arrow} alt="shapes" className="sm:h-full h-24" />
      </div>
      <div className="flex justify-center w-full h-full">
        <nav className="absolute top-0 left-0 px-6 py-10 md:px-20 lg:px-24">
          <img src={logo} alt="logo" className="h-8" />
        </nav>
        <header className="text-center self-center w-full px-6 py-6 sm:px-16 sm:py-16 mt-2 lg:max-w-3xl xl:max-w-5xl">
          <h2 className="sm:mb-8 mb-4 text-3xl sm:text-4xl">
            Connect with <span className="purple">GenZ</span>-s in tech across{" "}
            <span className="purple">Africa</span>
          </h2>
          <p className="sm:mb-10 mb-5 text-sm sm:text-1xl">
            we are coming soon 🚧🚧
          </p>
          <button className=" z-10">Join The Community</button>
        </header>
      </div>
    </div>
  );
};

export default Header;
