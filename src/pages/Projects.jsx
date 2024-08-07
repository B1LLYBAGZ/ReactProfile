import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here's some recent projects I've worked on.
        </p>
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
              imgPath={project}
              isBlog={false}
              title="Just.Another.Text.Editor"
              description="A simple test editor to create notes or code snippets with or without an internet connection."
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
