import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/Screenshot 2024-08-07 at 10.11.19 PM.png";
import lift from "../assets/projects/Screenshot 2024-08-07 at 10.31.19 PM.png";
import krypto from "../assets/projects/19-pwa-homework-demo-01.gif";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="yellow">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>Here's some recent work of mine.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="React Profile"
              description="A simple React profile page with a responsive design. It's a simple project to showcase my skills in React and CSS."
              ghLink="https://github.com/B1LLYBAGZ/ReactProfile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="J.A.T.E"
              description="A simple text editor to create notes or code snippets with or without an internet connection."
              ghLink="https://github.com/B1LLYBAGZ/JATE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Intro Webpage"
              description="A short introduction webpage. Showcasing my projects and contact information as well as a profile picture and a short bio."
              ghLink="https://github.com/B1LLYBAGZ/B1LLY-INTRO-WEBPAGE-02"
            />
          </Col>

          <Col md={4} className="project-card"></Col>

          <Col md={4} className="project-card"></Col>

          <Col md={4} className="project-card"></Col>

          <Col md={4} className="project-card"></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
