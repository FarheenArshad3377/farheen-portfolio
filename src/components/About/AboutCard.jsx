import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Farheen Arshad</span> from{" "}
            <span className="purple">Karachi, Pakistan</span>.
            <br />
            I’m an undergraduate{" "}
            <span className="purple">Software Engineering</span> student at{" "}
            <span className="purple">UBIT, University of Karachi</span>.
            <br />
            I’m actively seeking opportunities as a{" "}
            <span className="purple">Frontend / React / MERN Developer</span>,
            where I can build modern, responsive, and user-friendly web
            applications.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy doing:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Web & Mobile Apps 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> UI Design & Problem Solving 🎨
            </li>
          </ul>

          <p style={{ color: "rgb(243, 27, 27)" }}>
            "Focused on learning, building, and growing as a software engineer."
          </p>
          <footer className="blockquote-footer">Farheen Arshad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;

