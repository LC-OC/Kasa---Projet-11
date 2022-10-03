import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Nav as="ul">
      <Nav.Item as="li">
        <Nav.Link>
          <Link className="nav_link" to="/">
            Accueil
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link>
          <Link className="nav_link" to="/a-propos">
            A Propos
          </Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
