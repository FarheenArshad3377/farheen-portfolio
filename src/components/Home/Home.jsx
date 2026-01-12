import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/me.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// ✅ CV Download URL
const handleDownloadCV = () => {
  const fileUrl = new URL("../../assets/Farheen.pdf", import.meta.url).href;
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "Farheen_Arshad_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* Particle background */}
        <Particle />

        <Container className="home-content">
          <Row>
            {/* Left Column: Text + Type + Button */}
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M <strong className="main-name">FARHEEN ARSHAD</strong>
              </h1>

              {/* Type Effect + Button */}
              <div
                style={{
                  padding: 50,
                  textAlign: "left",
                  position: "relative", // important for z-index
                  zIndex: 10,          // ensures button is clickable
                }}
              >
                <Type />

               
              </div>
            </Col>

            {/* Right Column: Image */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  objectFit: "fill",
                  marginLeft: "45px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Home2 section */}
      <Home2 />

      {/* Social Links */}
      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span>connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FarheenArshad3377"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/farheen-arshad-ubit"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/flutterhive37"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
