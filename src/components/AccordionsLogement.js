import React from "react";

const AccordionsLogement = ({ equipements, description }) => {
  return (
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
                {description}
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
  );
};

export default AccordionsLogement;
