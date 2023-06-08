import { useEffect, useState } from "react";
import "./index.scss";
import Loader from "../../Loader";
import tarif from "./tarif.jpeg";
import "./index.scss";

const Reservation = () => {
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
    <>
      {" "}
      <br />
      <div className="container-fluid tarif-container">
        <div
          className="row justify-content-between"
          style={{ marginTop: "50px" }}
        >
          <div className="col-lg-5">
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "35px",
                marginTop: "20px",
              }}
            >
              HOME OF GAMING C'EST QUOI ?
            </h3>{" "}
            <br /> <br />
            <p style={{ marginBottom: "25px", fontSize: "30px" }}>
              Home of Gaming, c’est le meilleur E-Sport Center de Oujda ! <br />
              C’est aussi :
            </p>
            <ul>
              <li style={{ marginBottom: "25px", fontSize: "20px" }}>
                10 PC Hautes performances avec tous les jeux du moment
              </li>
              <li style={{ marginBottom: "25px", fontSize: "20px" }}>
                2 Coins salon (TV 55″, PS5)
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <center>
              <img
                src={tarif}
                className="img-thumbnail"
                alt="house of gaming"
                style={{ width: "450px", marginTop: "50px" }}
              />
            </center>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <center>
              <h1
                style={{
                  marginTop: "130px",
                  marginBottom: "120px",
                  fontSize: "40px",
                  fontWeight: "bold",
                  fontFamily: "-moz-initial",
                }}
              >
                T A R I F S{" "}
              </h1>
            </center>
          </div>
        </div>

        <div class="row" style={{ marginBottom: "300px" }}>
          <div class="col-md-4 col-sm-6">
            <div class="pricing-table-3 basic">
              <div class="pricing-table-header">
                <h4>
                  <strong>BASIC</strong>
                </h4>
                <p>home of gaming</p>
              </div>
              <div class="price">
                <strong>Time</strong>
              </div>
              <div class="pricing-body">
                <ul class="pricing-table-ul">
                  <li style={{ fontSize: "30px", color: "#28b6f6" }}>
                    <b>230 DH </b>{" "}
                  </li>
                  <li style={{ fontSize: "30px", color: "#28b6f6" }}>
                    {" "}
                    <b>16 H </b>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="pricing-table-3 premium">
              <div class="pricing-table-header">
                <h4>
                  <strong>STANDART</strong>
                </h4>
                <p>home of gaming</p>
              </div>
              <div class="price">
                <strong>Time</strong>
              </div>
              <div class="pricing-body">
                <ul class="pricing-table-ul">
                  <li style={{ fontSize: "30px", color: "orange" }}>
                    <b>330 DH </b>{" "}
                  </li>
                  <li style={{ fontSize: "30px", color: "orange" }}>
                    <b>24 H </b>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="pricing-table-3 business">
              <div class="pricing-table-header">
                <h4>
                  <strong>PREMIUM</strong>
                </h4>
                <p>home of gaming</p>
              </div>
              <div class="price">
                <strong>Time</strong>
              </div>
              <div class="pricing-body">
                <ul class="pricing-table-ul">
                  <li style={{ fontSize: "30px", color: "#c3185c" }}>
                    <b>250 DH </b>{" "}
                  </li>
                  <li style={{ fontSize: "30px", color: "#c3185c" }}>
                    <b>
                      15 H{" "}
                      <span style={{ color: "black", fontSize: "20px" }}>
                        {" "}
                        (PC + PS5)
                      </span>
                    </b>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
