import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiRedux, SiBootstrap } from "react-icons/si";

import Html from "../../assets/TechIcons/html.png";
import Css from "../../assets/TechIcons/c.png";
import Javascript from "../../assets/TechIcons/Javascript.svg";
import ReactIcon from "../../assets/TechIcons/React.svg";
import Node from "../../assets/TechIcons/Node.svg";
import Mongo from "../../assets/TechIcons/Mongo.svg";
import Git from "../../assets/TechIcons/Git.svg";
import Firebase from "../../assets/TechIcons/Firebase.svg";
import Tailwind from "../../assets/TechIcons/Tailwind.svg";
import MUI from "../../assets/TechIcons/MUI.svg";
import Postman from "../../assets/TechIcons/Postman.svg";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Html} alt="HTML5" width={"3px"} />
        <div className="tech-icons-text">HTML5</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Css} alt="CSS3" width={"3px"}/>
        <div className="tech-icons-text">CSS3</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React.js" />
        <div className="tech-icons-text">React.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs size={40} />
        <div className="tech-icons-text">Next.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRedux size={40} />
        <div className="tech-icons-text">Redux Toolkit</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap size={40} />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind CSS" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI} alt="Material UI" />
        <div className="tech-icons-text">Material UI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="Firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

    </Row>
  );
};

export default Techstack;

