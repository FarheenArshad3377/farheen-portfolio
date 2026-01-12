import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards"; // fix: name match kiya
import Particle from "../Particle";

// Project images
import leaf from "../../assets/Projects/leaf.png";
import emotion from "../../assets/Projects/emotion.png";
import travelAppImg from "../../assets/Projects/travel.PNG";
import gpa from "../../assets/Projects/project1.PNG";
import music from "../../assets/Projects/m1.PNG";
import netflix from "../../assets/Projects/2.PNG";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={gpa} // gpa ka image import karna zaruri hai
              isBlog={false}
              title="GPA Calculator"
              description="A simple GPA Calculator built with HTML, CSS, and JavaScript. Calculate your GPA easily for different subjects and semesters."
              ghLink="https://github.com/FarheenArshad3377/GPA-Calculator" // tumhara GitHub repo
              demoLink="https://farheenarshad3377.github.io/GPA-Calculator/"
              className="project-card-img" // live demo
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={netflix} // Make sure you import your Netflix clone screenshot like import netflixCloneImg from "../../assets/netflix.png";
              isBlog={false}
              title="Netflix Clone"
              description="A Netflix-style streaming platform clone built with React.js, React-Bootstrap, and CSS. Fully responsive with movie previews, carousel, and hover effects."
              ghLink="https://github.com/FarheenArshad3377/Netflix-Clone"
              demoLink="https://farheenarshad3377.github.io/Netflix-Clone/"
              className="project-card-img"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={music} // Make sure you import your Netflix clone screenshot like import netflixCloneImg from "../../assets/netflix.png";
              isBlog={false} title="Music App" description="A Flutter-based music player app with song playback, pause/play controls, previous/next track, and dark/light theme support. Currently under development."
              className="project-card-img"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={travelAppImg} // import your Travel App screenshot: import travelAppImg from "../../assets/travelApp.png";
              isBlog={false}
              title="Travel App"
              description="A Flutter-based Travel app showcasing destinations, bookings, and travel guides with an interactive UI. Fully responsive and visually appealing."
              ghLink="https://github.com/FarheenArshad3377/Travel_Project"
              // No demoLink if not live yet
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
