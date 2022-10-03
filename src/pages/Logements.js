import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logementsData from "../data/logementsData.json";
import StarRating from "../components/StarRating";
import Carousel from "../components/Carousel";

const Logements = () => {
  const { id } = useParams();
  const logement = logementsData.find((lgmt) => lgmt.id === id);
  let equipements = logement.equipments;
  let tags = logement.tags;

  return (
    <div>
      <Header />
      <div className="body">
        <div className="img-container text-center">
          <img
            className="rounded w-75 mt-3 mb-3 banner"
            src={logement.cover}
            alt={logement.title}
          />
        </div>

        <div className="informations w-75">
          <div className="left-part">
            <h1 className="title">{logement.title}</h1>
            <p>{logement.location}</p>
            <div className="tags-list listing">
              {tags.map((tag) => {
                return (
                  <span className="badge" key={tag}>
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="right-part">
            <div className="profil">
              <p className="name-host">{logement.host.name}</p>
              <img
                className="profil-picture rounded-circle"
                src={logement.host.picture}
                alt=""
              />
            </div>
            <div>
              <StarRating rating={logement.rating}></StarRating>
            </div>
          </div>
        </div>
        <div className="accordion-container w-75">
          <div className="description-container">
            <div className="accordion  description">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Description
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse "
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body accordion-logement">
                    {logement.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="equipement-container">
            <div className="accordion Equipement">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Equipements
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse "
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body accordion-logement">
                    <ul className="equipment-list listing">
                      {equipements.map((eqpt) => {
                        return <li key={eqpt}>{eqpt}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logements;
