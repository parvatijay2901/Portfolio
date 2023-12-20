import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section style={{ height: "100vh", flexDirection: "column", justifyContent: "center" }}>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content text-center">
          <h1 style={{ paddingBottom: 5, paddingTop: 120 }} className="heading">
            Hello, I am Parvati.
          </h1>

          {/* Add padding before and after the Type component */}
          <div style={{ textAlign: "center", paddingTop: 5, paddingBottom: 210 }}>
            <Type />
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
