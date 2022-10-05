import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="d-flex justify-content-center mt-3 mb-3">
      <div className="header-container d-flex justify-content-between align-items-center ">
        <img className="logo" src={logo} alt="" />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
