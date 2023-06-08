import React from 'react';
import './Book.scss';
import Img1 from '/img/img1.jpeg';
import Img3 from '/img/img3.jpeg';
import img4 from '/img/img4.jpeg';
import img5 from '/img/img5.jpeg';
import img6 from '/img/img6.jpeg';
import { Carousel } from 'react-bootstrap';

const Book = () => {
  return (
    <section className="bookk mt-5" id="book">
      <div className="container">
        <div className="main-text">
          <h1>Home of Gaming</h1>
        </div>
        <br />
        <div className="row justify-content-between">
          <div className="col-lg-5 py-3 py-md-0">
            <h2>la Référence Gaming à Oujda</h2>
            <br />
            <p>
              Viens seul ou avec les amis et profites de jouer aux jeux du moment dans un cadre convivial et vis une
              expérience unique dans la région !
            </p>
            <br />
            <p>Tu t'ennuies chez toi, t'as du temps de libre ? Passe faire un tour !</p>
          </div>

          <div className="col-lg-5 py-3 py-md-0">
            <div className="cardphoto">
              <Carousel interval={3000}>
                <Carousel.Item>
                  <img
                    src={Img1}
                    height="600"
                    className="d-block w-100 object-fit-cover"
                    alt="..."
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={Img3}
                    height="600"
                    className="d-block w-100 object-fit-cover"
                    alt="..."
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={img4}
                    height="600"
                    className="d-block w-100 object-fit-cover"
                    alt="..."
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={img5}
                    height="600"
                    className="d-block w-100 object-fit-cover"
                    alt="..."
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={img6}
                    height="600"
                    className="d-block w-100 object-fit-cover"
                    alt="..."
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
