import './Book.scss';
import Img1 from "/img/img1.jpeg";
import Img3 from "/img/img3.jpeg";

const Book = () => {
  return (
    <section className="book mt-5" id="book">
      <div className="container">
        <div className="main-text">
          <h1>Home of Gaming</h1>
        </div>
        <br />
        <div className="row justify-content-between">
          <div className="col-lg-5 py-3 py-md-0">
            <h2>la référence Gaming à Oujda</h2><br />
            <p>
              Viens seul ou avec les amis et profites de jouer aux jeux du moment dans un cadre convivial et vis une expérience unique dans la région !
            </p> <br />
            <p>
              Tu t'ennuies chez toi, t'as du temps de libre ? Passe
              faire un tour !
            </p>
          </div>

          <div className="col-lg-5  py-3 py-md-0">
            <div className="cardphoto">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="scrol carousel-inner">
                  <div className=" carousel-item active">
                    <img
                      src={Img1}
                      height="600"
                      className="d-block w-100 object-fit-cover"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item ">
                    <img
                      src={Img3}
                      height="600"
                      className="d-block w-100 object-fit-cover"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
