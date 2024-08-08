import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          "service_bmsbech",
          "template_91bdryf",
          form.current,
          "V8kW2gXwt-7B0Yg20"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-page-container">
        <Container fluid className="contact-section">
          <Row>
            <Col md={6} className="c-left">
              <h1>Let's get in Touch</h1>
              <h1 className="yellow">Reach out</h1>
            </Col>
            <Col md={6} className="c-right">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="from_name"
                  className="user"
                  placeholder="Name"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="reply_to"
                  className="user"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  className="user"
                  placeholder="Message"
                  onChange={handleChange}
                />
                <span className="not-done">
                  {notDone && "Please, fill all the input fields :)"}
                </span>
                <Button type="submit" className="button" disabled={done}>
                  Send
                </Button>
                <span className="done">
                  {done &&
                    "Thank you for contacting me! I will reply you as soon as possible, your message is important to me!"}
                </span>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
