import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logementsData from "../data/logementsData.json";
import StarRating from "../components/StarRating";
import Carousel from "../components/Carousel";
import AccordionsLogement from "../components/AccordionsLogement";
import Profil from "../components/Profil";
import Tags from "../components/Tags";

const Logements = () => {
  const { id } = useParams();
  const logement = logementsData.find((lgmt) => lgmt.id === id);

  return (
    <div>
      <Header />
      <div className="body">
        <Carousel
          pictures={logement.pictures}
          title={logement.title}
        ></Carousel>

        <div className="informations w-75">
          <div className="left-part">
            <h1 className="title">{logement.title}</h1>
            <p className="location">{logement.location}</p>
            <Tags tags={logement.tags} />
          </div>
          <div className="right-part">
            <Profil host={logement.host} />
            <StarRating rating={logement.rating}></StarRating>
          </div>
        </div>
        <AccordionsLogement
          equipements={logement.equipments}
          description={logement.description}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Logements;
