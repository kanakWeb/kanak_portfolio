import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Project0 from "../../Assets/Projects/global info ltd.png";
import Project1 from "../../Assets/Projects/pro.png";
import Project2 from "../../Assets/Projects/pro2.png";
import Project3 from "../../Assets/Projects/pro3.png";
import Project4 from "../../Assets/Projects/Penguin Fashion.png";
import Project5 from "../../Assets/Projects/panda.png";


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
              imgPath={Project0}
              isBlog={false}
              title="Global Informatics limited"
              description="Used:Html,CSS, React, JavaScript, Tailwind css,AOS Animation"
              link="https://global-informatics-ltd.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project4}
              isBlog={false}
              title="Penguin Fashion"
              description="Used: React, JavaScript, Bootstrap CSS, React router"
              link="https://nostalgic-bhabha-0e56a6.netlify.app"
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
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project5}
              isBlog={false}
              title="Panda Shoes"
              description="Used: React, JavaScript, Bootstrap CSS, React router"
              link="https://brave-euler-kanak.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project1}
              isBlog={false}
              title="Mr-tutor"
              description="Used: React, JavaScript, BootstrapCSS, Firebase Authentication"
              link="https://mr-tutor-e4f3b.web.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
