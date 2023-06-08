import pht from "/games-images/Apex.svg";
import pht1 from "/games-images/BUBG.svg";
import pht2 from "/games-images/CS.svg";
import pht3 from "/games-images/Fortnite.svg";
import pht4 from "/games-images/Rocket League.svg";
import pht5 from "/games-images/Rainbow 6 Siege.svg";
import pht6 from "/games-images/Rectangle 17.svg";
import pht7 from "/games-images/Rectangle 18.svg";
import pht8 from "/games-images/Rectangle 19.svg";
import pht9 from "/games-images/Rectangle 21.svg";
import pht10 from "/games-images/Rectangle 22.svg";
import "./index.scss";

const Photogames = () => {
  const myImages = [
    pht,
    pht1,
    pht2,
    pht3,
    pht4,
    pht5,
    pht6,
    pht7,
    pht8,
    pht9,
    pht10,
  ];

  return (
    <section className="servicess" id="servicess">
      <div className="container-lg">
        <div className="main-txt ic-text">
          <h1> Jouer à tous les meilleurs jeux multi-joueus du moment</h1>
        </div>

        <div className="row text-center">
          {myImages.map((image, index) => (
            <div className="col-12 col-lg-4 py-3 " key={index}>
              <div className="cardd">
                <img src={image} width="300" alt="" />
              </div>
            </div>
          ))}

          <div className="col-12 col-lg-4 py-3">
            <div className="cardd h-100">
              <div className="card-body h-100">
                <h5 className="card-title fs-6 p-5 h-100 img-placeholder mx-auto">
                  <span>Et pleins de nouveautés prochainement…</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Photogames;
