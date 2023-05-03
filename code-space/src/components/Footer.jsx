import React from "react";
import smarklas from "../images/SmartKlas C2_Websit Header Logo 1.svg";
import facebook from "../images/facebook.svg";
import tiktok from "../images/tik_tok.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";

const Footer = () => {
  return (
    <footer className="flex justify-center sm:justify-start flex-col m-10 text-center sm:text-left items-center sm:items-start sm:w-96 md:ms-20 lg:ms-24">
      <p className="mb-4" id="at">
        © 2023 Code Space Africa.
      </p>
      <p className="mb-6">
        Code Space Africa is a registered non-profit organization dedicated to
        empowering and celebrating genz in technology across Africa
      </p>
      <img className="h-6 mb-10" src={smarklas} alt="logo" />
      <div className="flex justify-between w-9/12 mb-12">
        <img className="h-10" src={facebook} alt="facebook" />
        <img className="h-10" src={twitter} alt="twitter" />
        <img className="h-10" src={instagram} alt="instagram" />
        <img className="h-10" src={tiktok} alt="tiktok" />
      </div>
    </footer>
  );
};

export default Footer;
