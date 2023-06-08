import "./Hbc.scss";
import vd from "/vd.mp4";
import ic from "/icons/snacks.svg";
import ic1 from "/icons/people.svg";
import ic2 from "/icons/pc.svg";
import ic3 from "/icons/meeting.svg";
import ic4 from "/icons/consoles.svg";
import ic5 from "/icons/clock.svg";

const Hbc = () => {
  return (
    <section className="book mt-5" id="book">
      <div className="container">
        <div className="main-text">
          <h2>Bootcamp</h2>
        </div>
        <div className="row">
          <div className="book col-lg-6 py-3 py-md-0"> <br /><br /> <br /><br /> <br />
            <p>
              Tu souhaites réserver la salle pour un bootcamp, un anniversaire
              ou un autre événement rien que pour toi et tes amis ?
              <br />
              Aucun problème ! Assure-toi d’être au minimum 5 personnes et
              contacte nous pour en savoir plus !
            </p>{" "}
            <br />
          </div>

          <div className="col-lg-6 py-3 py-md-0">
            <div className="cardphoto">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <video src={vd} className="video-player" autoPlay loop muted />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="servicesss" id="packages">
          <div className="container">
            <div className="main-txt ic-text"></div>
            <div
              className="row justify-content-center text-center"
              style={{ marginTop: "30px" }}
            >
              <div className="col-md-6 mx-auto col-lg-4 py-3 py-md-0">
                <div className="card">
                  <div className="card-body">
                    <img src={ic1} alt="" />
                    <p className="materiel">
                      {" "}
                      <br />
                      Min. 5 Personnes
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mx-auto col-lg-4 py-3 py-md-0">
                <div className="card">
                  <div className="card-body">
                    <img src={ic2} alt="" />
                    <p className="materiel">
                      {" "}
                      <br />
                      10 PC Ultraperformants
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mx-auto col-lg-4 py-3 py-md-0">
                <div className="card">
                  <div className="card-body">
                    <img src={ic4} alt="" />
                    <p className="materiel">
                      {" "}
                      <br />2 Salons consoles PS5
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row justify-content-center "
              style={{ marginTop: "30px" }}
            >
              <div className="col-md-6 mx-auto col-lg-4 py-3 py-md-0">
                <div className="card">
                  <div className="card-body">
                    <img src={ic5} alt="" className="img-clv" />
                    <p className="materiel">
                      {" "}
                      <br />
                      3H de plaisir
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mx-auto col-lg-4 py-3 py-md-0">
                <div className="card">
                  <div className="card-body">
                    <img src={ic3} alt="" />
                    <p className="materiel">
                      <br />
                      L'HOG privatisé !
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mx-auto col-lg-4 py-3 py-md-0">
                <div className="card">
                  <div className="card-body">
                    <img src={ic} alt="" />
                    <p className="materiel">
                      {" "}
                      <br />
                      Livraison snacks disponible
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="bc-button"> Bootcamp</button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hbc;
