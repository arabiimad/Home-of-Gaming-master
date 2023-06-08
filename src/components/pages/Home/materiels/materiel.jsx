import ic from "/icons/noun-curved-monitor-5563940.svg";
import ic1 from "/icons/Mouse black00.svg";
import ic2 from "/icons/noun-playstation-controller-5563934.svg";
import ic3 from "/icons/clavier.svg";
import ic4 from "/icons/graphic card00.svg";
import ic5 from "/icons/CPU00.svg";
import ic6 from "/icons/noun-astro-headset-5563932.svg";
import ic7 from "/icons/chair.svg";
import "./materiels.scss";

const Materiels = () => {
  return (
    <section className="services" id="packages">
      <div className="container">
        <div className="main-txt ic-text">
          <h1 style={{ color: "white" }}>
            Du matériel ProGamer accessible pour tous
          </h1>
        </div>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-6 col-lg-3 py-3">
            <div className="card">
              <div className="card-body">
                <img src={ic} alt="" />
                <p className="materiel">
                  {" "}
                  <br />
                  Moniteur gaming ViewSonic 27 Curved FHD (1920X1080), 240 Hz ,
                  1ms
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py-3 ">
            <div className="card">
              <div className="card-body">
                <img src={ic1} alt="" />
                <p className="materiel">
                  {" "}
                  <br />
                  Souris Mars Gaming
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py-3 ">
            <div className="card">
              <div className="card-body">
                <img src={ic2} alt="" />
                <p className="materiel">
                  {" "}
                  <br />
                  Manette type PlayStation
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py-3 ">
            <div className="card">
              <div className="card-body">
                <img src={ic3} alt="" className="img-clv" />
                <p className="materiel">
                  {" "}
                  <br />
                  Clavier Mars Gaming
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py-3 ">
            <div className="card">
              <div className="card-body">
                <img src={ic4} alt="" />
                <p className="materiel">
                  <br />
                  GeForce RTX 3050
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py-3 ">
            <div className="card">
              <div className="card-body">
                <img src={ic5} alt="" />
                <p className="materiel">
                  {" "}
                  <br />
                  Ryzen 5 5500
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py-3 ">
            <div className="card">
              <div className="card-body">
                <img src={ic6} alt="" />
                <p className="materiel">
                  {" "}
                  <br />
                  Casque Mars Gaming
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py-3 ">
            <div className="card">
              <div className="card-body">
                <img src={ic7} alt="" />
                <p className="materiel">
                  {" "}
                  <br />
                  Fauteuil Gaming Spirit of Gamer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materiels;
