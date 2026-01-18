import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import trophy from "../../assets/a1.PNG";
import trophy2 from "../../assets/aptech.jpeg";
import hackathon from "../../assets/hackaton.jpeg";

const Achievement = () => {
  return (
    <Container fluid className="achievement-page">
      {/* ===== CENTER HEADING ===== */}
      <div className="achievement-header">
        <h1>Achievements</h1>
        <div className="center-line"></div>
      </div>

      {/* ===== Section 1 ===== */}
      <Row className="achieve-row">
        <Col md={8} className="achieve-discription">
          <h1 style={{ fontSize: "2.6em" }}>
            APTECH <span className="purple">VISION 2023</span>
          </h1>

          <p className="home-about-body">
            I proudly achieved the <b className="purple">Winner position</b> in
            the
            <b className="purple"> Web Designing category</b> at Aptech Vision
            Projects Display 2023. This achievement reflects my strong
            understanding of modern web design principles and my ability to
            create visually appealing, user-friendly interfaces.
            <br />
            <br />
            Through this competition, I demonstrated my skills in
            <i>
              <b className="purple">
                {" "}
                HTML, CSS, JavaScript, Bootstrap, and responsive UI design{" "}
              </b>
            </i>
            while focusing on clean layouts, usability, and real-world
            application needs.
            <br />
            <br />
            Winning this award boosted my confidence and motivated me to
            continue building high-quality web applications with a strong focus
            on frontend excellence.
          </p>
        </Col>

        <Col md={6} className="text-center">
          <img src={trophy} className="achievement-img" alt="Trophy" />
        </Col>
      </Row>
      <Row className="achieve-row">
        <Col md={8} className="achieve-discription">
          <h1 style={{ fontSize: "2.6em" }}>
            APTECH <span className="purple">VISION PARTICIPATION</span>
          </h1>

          <p className="home-about-body">
            I actively participated in{" "}
            <b className="purple">Aptech Vision 2023</b>, where I showcased my
            web project <b className="purple">“Famazone”</b>. This experience
            allowed me to present my ideas, explain technical decisions, and
            receive valuable feedback from industry professionals.
            <br />
            <br />
            The project focused on creating a clean and functional web interface
            with an emphasis on
            <i>
              <b className="purple">
                {" "}
                usability, responsiveness, and structured UI components{" "}
              </b>
            </i>
            .
            <br />
            <br />
            This participation helped me enhance my communication skills,
            confidence, and ability to work on real-world inspired projects in a
            competitive environment.
          </p>
        </Col>

        <Col md={6} className="text-center">
          <img src={trophy2} className="achievement-img" alt="Trophy" />
        </Col>
      </Row>
      <Row className="achieve-row">
        <Col md={8} className="achieve-discription">
          <h1 style={{ fontSize: "2.6em" }}>
            HACKATHON <span className="purple">EXPERIENCE</span>
          </h1>

          <p className="home-about-body">
            I participated in the <b className="purple">DECTHON 2025</b>, an
            online hackathon organized by{" "}
            <b className="purple">Central Developers</b>, where I worked on app
            development under time constraints.
            <br />
            <br />
            This experience strengthened my skills in
            <i>
              <b className="purple">
                {" "}
                problem-solving, logical thinking, and rapid development{" "}
              </b>
            </i>
            while collaborating and adapting to challenges efficiently.
            <br />
            <br />
            Hackathons like these have helped me grow as a developer by
            improving my ability to build functional solutions, manage pressure,
            and apply my technical knowledge in real scenarios.
          </p>
        </Col>

        <Col md={6} className="text-center">
          <img src={hackathon} className="achievement-img" alt="Trophy" />
        </Col>
      </Row>
    </Container>
  );
};

export default Achievement;
