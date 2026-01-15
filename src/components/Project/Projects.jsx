import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards"; // fix: name match kiya
import Particle from "../Particle";

// Project images
import resturant from "../../assets/Projects/r1.PNG";
import weather from "../../assets/Projects/w5.PNG";
import travelAppImg from "../../assets/Projects/travel-project.PNG";
import gpa from "../../assets/Projects/project1.PNG";
import music from "../../assets/Projects/m2.PNG";
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
              imgPath={gpa}
              isBlog={false}
              title="GPA Calculator"
              description="A simple GPA Calculator built with HTML, CSS, and JavaScript."
              ghLink="https://github.com/FarheenArshad3377/GPA-Calculator"
              demoLink="https://gpa-calculator-snowy-sigma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="A Netflix-style streaming platform clone built with React.js."
              ghLink="https://github.com/FarheenArshad3377/Netflix-Clone"
              demoLink="https://netflix-clone-mm2f.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={music}
              isBlog={false}
              title="Music App"
              description="Flutter-based music player app with dark/light theme and controls.                                 "
              demoLink="https://music-clone.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={travelAppImg}
              isBlog={false}
              title="Travel App"
              description="A modern travel app with animations and clean UI."
              demoLink="https://travel-aee36.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Weather forecasting app using live API data."
              demoLink="https://weather-b399f.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={resturant}
              isBlog={false}
              title="Restaurant App"
              description="Food & recipe app with categories and responsive design."
              demoLink="https://recipesfood-b61ec.web.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;

