import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A LITTLE ABOUT<span className="yellow"> MYSELF</span>
            </h1>
            <p className="home-about-body">
              Hi, I'm <span className="yellow">William Hogan </span>
              From <span className="yellow"> Denver, Colorado.</span>
              <br />
              <br />
              I hold a Certificate in Full Stack Development.
              <br />
              <br />
              As a<b className="yellow"> Full-Stack </b>developer, I thrive on
              tackling new challenges while continuously learning valuable
              skills.
              <br />
              <br />I am proficient in
              <b className="yellow"> Javascript, </b>
              as well as have knowledge in programming languages such as
              <b className="yellow"> HTML, CSS, GraphQL, and SQL.</b>
              <br />
              <br />I have a passion for working with{" "}
              <b className="yellow">Node.js, MongoDB,</b> and
              <i>
                <b className="yellow">
                  {" "}
                  modern Javascript libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="yellow"> React.js and Bootstrap.</b>
              </i>
              <br />
              <br />
              My interest is in developing cutting-edge
              <i>
                <b className="yellow"> Web Technologies and Products, </b>
                as well as exploring areas related to
                <b className="yellow"> Cybersecurity.</b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME @</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/B1LLYBAGZ"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/B1LLYBAGZ"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/william-hogan-771825310/?trk=public-profile-join-page"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/B1LLYBAGZ/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
