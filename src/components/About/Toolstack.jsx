import { Col, Row } from "react-bootstrap";
import figma from "../../assets/TechIcons/figma (2).png";
import chrome from "../../assets/TechIcons/Google Chrome.svg";
import vsCode from "../../assets/TechIcons/vscode.svg";
import andriod from "../../assets/TechIcons/andriod (2).png";

const Toolstack = () => {
  return (
       <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
        <Col xs={4} md={2} className="tech-icons ">
        <img src={andriod} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Andriod</div>
      </Col>  
      <Col xs={4} md={2} className="tech-icons ">
        <img src={figma} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Figma</div>
      </Col>
    </Row>
  )
}

export default Toolstack

