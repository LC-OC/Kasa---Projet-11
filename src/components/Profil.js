import React from "react";

const Profil = ({ host }) => {
  return (
    <div>
      <div className="profil">
        <span className="name-host">{host.name}</span>
        <img
          className="profil-picture rounded-circle"
          src={host.picture}
          alt={host.name}
        />
      </div>
    </div>
  );
};

export default Profil;
