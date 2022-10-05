import React from "react";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="text-center">
        <div className="banner_home mt-3 mb-3">
          <div className="w-100 background-dark"></div>
          <p className="banner-p">Chez vous, partout et ailleurs</p>
        </div>
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
