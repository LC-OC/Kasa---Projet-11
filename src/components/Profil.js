import React from "react";

const Profil = ({ host }) => {
  return (
    <div>
      <div className="profil">
        <p className="name-host">{host.name}</p>
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
