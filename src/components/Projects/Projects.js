import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import Project1 from "../../Assets/Projects/pro.png";
import Project2 from "../../Assets/Projects/pro2.png";
import Project3 from "../../Assets/Projects/pro3.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project1}
              isBlog={false}
              title="Mr-tutor"
              description="Used: React, JavaScript, BootstrapCSS, Firebase Authentication"
              link="https://mr-tutor-e4f3b.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project2}
              isBlog={false}
              title="fresh-fruits"
              description="Used: React, JavaScript, BootstrapCSS, Firebase Authentication, Heroku, MongoDB, Node.js, Express.js"
              link="https://fresh-fruits-f5235.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project3}
              isBlog={false}
              title="Drill-machine-tools"
              description="Used: React, JavaScript, TailWind CSS, Firebase Authentication, Heroku, MongoDB, Node.js, Express.js"
              link="https://drill-machine-tools.web.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
