import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={5}
            style={{paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "15px",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard />
          </Col>
        </Row>
        {/* <h1 style={{ fontSize: "2.1em", paddingBottom: "10px" }}>
        <strong className="gold">Resume</strong>
        </h1> */}

      </Container>
    </Container>
  );
}

export default About;
