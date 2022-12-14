import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import logo_white from "../assets/logo_white.png";

const Footer = () => {
  return (
    <Container fluid className="footer text-center text-light">
      <Row>
        <Col>
          <img className="logo-footer pb-3" src={logo_white} alt="" />
          <p>© 2020 Kasa. All rights reserved</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
