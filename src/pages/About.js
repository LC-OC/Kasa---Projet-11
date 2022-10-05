import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AccordionsAbout from "../components/AccordionsAbout";

const About = () => {
  return (
    <div>
      <Header />
      <div className="text-center ">
        <div className="banner-about" />

        <AccordionsAbout />
      </div>
      <Footer />
    </div>
  );
};

export default About;
