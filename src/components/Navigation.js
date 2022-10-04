import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Nav as="ul" className="nav_link">
      <Nav.Item as="li">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/"
          end
        >
          Accueil
        </NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/a-propos"
        >
          A Propos
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
