import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/m.png";
import Tilt from "react-parallax-tilt";
const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an undergraduate{" "}
              <span className="purple">Software Engineering</span> student who
              loves turning ideas into clean, responsive, and user-friendly web
              applications. I enjoy building interfaces that are both visually
              appealing and functionally efficient.
              <br />
              <br />I have hands-on experience with
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Express.js, PostgreSQL and MongoDB{" "}
                </b>
              </i>
              and I’m continuously improving my skills across the full{" "}
              <span className="purple">MERN stack</span>.
              <br />
              <br />
              My main interests include developing
              <i>
                <b className="purple">
                  {" "}
                  modern web applications, frontend-focused projects,{" "}
                </b>
              </i>
              and creating smooth user experiences using clean UI design
              principles.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> React.js </b> and exploring modern tools
              and frameworks that help create scalable and maintainable
              applications.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home2;

