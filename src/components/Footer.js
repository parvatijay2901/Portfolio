import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>© Parvati-Jayakumar</h3>
        </Col> 
        <Col>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/parvati-jayakumar"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/parvatijay2901"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://parvatijay2901.medium.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMedium />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
