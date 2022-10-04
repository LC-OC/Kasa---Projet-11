import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import img_about from "../assets/img_about.png";
import AccordionsAbout from "../components/AccordionsAbout";

const About = () => {
  return (
    <div>
      <Header />
      <div className="text-center ">
        <img className="banner-about w-75 mt-3 mb-3" src={img_about} alt="" />
        <AccordionsAbout />
      </div>
      <Footer />
    </div>
  );
};

export default About;
