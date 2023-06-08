import React from 'react';
import Logo from "/img/logo.png";
import './index.scss'; // import the SCSS file
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; // import Bootstrap components
import {FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-primary text-white py-3">
      <Container>
        <Row>
          <Col md={4}>
            <div className="subscription">
              <h2>Reste connecté !</h2>
              <h6>Pour ne pas rater de promos, de nouvelles sorties de jeux, ou encore d’événements exclusifs, le plus simple, c’est de s’inscrire.<br/>Ne t’en fais pas, nous ne spammons pas !
              </h6>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <br />
                  <Form.Control type="email" placeholder="Enter your email address" required />
                </Form.Group>
                <Button className="btn btn-danger text-light" type="submit">Subscribe</Button>
              </Form>
            </div>
          </Col>
          <Col md={4} className="ms-auto">
            <div className="social-media ms-auto d-block">
              <h3>SUIS-NOUS:</h3>
              <ul className="list-unstyled">
                <li><a href="https://www.instagram.com/home_of_gaming_48/"><FaInstagram /> Home of Gaming</a></li>
              </ul>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="align-items-center d-flex justify-content-center">
          <Col md={1} className="text-center align-self-center">
            <img src={Logo} alt="" width="50" />
          </Col>
          <Col md={4} className="text-center align-self-center">
            <p id='footerr' style={{fontSize: '14px', lineHeight: '1.5'}}>&copy; {new Date().getFullYear()} Home of Gaming. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
