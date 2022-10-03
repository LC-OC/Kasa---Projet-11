import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <Header />
      <div className="text-center main_error404">
        <img className="img_404" src={"./404.png"} alt="" />
        <p className="text_error404">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="link_back_home" to="/">
          <p className="link_back_home">Retourner sur la page d’accueil</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
