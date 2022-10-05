import React, { useState } from "react";
import { Link } from "react-router-dom";
import black_radient from "../assets/black_radient.png";
import logementsData from "../data/logementsData.json";

const Cards = () => {
  const [logements] = useState(logementsData);

  return (
    <div className="cards-home">
      {logements.map((logement) => {
        return (
          <Link
            key={logement.id}
            to={{
              pathname: `/logements/${logement.id}`,
              state: { logements: logement },
            }}
          >
            <div key={logement.id} className="card text-white card-home">
              <img
                style={{
                  backgroundImage: `url(${logement.cover})`,
                }}
                className="card-img"
                src={black_radient}
                alt=""
              />
              <div className="card-img-overlay">
                <h5 className="card-title">{logement.title}</h5>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
