import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cards = () => {
  const [logements, setLogements] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("/logementsData.json");
        setLogements(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <div className="cards-home w-75">
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
              <img className="card-img" src={logement.cover} alt="" />
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
