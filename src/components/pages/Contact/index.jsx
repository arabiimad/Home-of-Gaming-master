import { useEffect, useState } from "react";
import "./index.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import Loader from "../../Loader";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container className="mt-3 contact-container">
      <h1 className="m-5 text-center fw-bold">CONTACT</h1>
      <Row className="mb-5 contact-row">
        <Col xs={12} sm={6} md={6} lg={3} className="contact-col">
          <Card className="p-3 bg-secondary contact-card">
            <h2>RENDS-NOUS VISITE</h2>
            <p>
              <FaMapMarkerAlt /> Immeuble café Rihab, 6eme étage - 60000 Oujda
            </p>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="contact-col">
          <Card className="p-3 bg-secondary contact-card">
            <h2>APPELEZ-NOUS</h2>
            <a href="tel: +212 704-338109">
            <p> <br />
              <FaPhone /> +212 704-338109
            </p></a>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="contact-col">
          <Card className="p-3 bg-secondary contact-card">
            <h2>SUIS-NOUS</h2>
            <p> <br />
              <a href="https://www.instagram.com/home_of_gaming_48/">
                <FaInstagram /> home_of_gaming_48
              </a>
            </p>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="contact-col">
          <Card className="p-3 bg-secondary contact-card">
            <h2>CONTACTEZ-NOUS</h2>
            <p>
              <FaEnvelope /> <a href="mailto:homeofgamiing@gmail.com">homeofgamiing@gmail.com</a> 
            </p>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={12}>
          <br /><br /><br />
          <h2 className="local">Trouvez Nous :</h2> 
          <Card>
            <iframe
              title="Our Location"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.060996493095!2d-1.9212659843297897!3d34.6784099804402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7865f32f74d8c3%3A0x98cffbbb7881d50!2sHome%20of%20gaming!5e0!3m2!1sen!2sma!4v1679681892271!5m2!1sen!2sma`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Card>
        </Col>
      </Row> <br /><br /><br />
    </Container>
  );
};

export default Contact;