import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="d-flex justify-content-center mt-3 mb-3">
      <div className="d-flex justify-content-between align-items-center w-75">
        <img className="h-75" src={logo} alt="" />
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
