import { useState } from "react";
import reservedPc from "/img/pc-reserved.svg";
import freePc from "/img/pc-free.svg";
import reservedPc2 from "/img/pc-reserved2.svg";
import freePc2 from "/img/pc-free2.svg";
import "./index.scss";

const PcImage = ({ pcId, reserved, isLeftColumn, games }) => {
  const [showGames, setShowGames] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(timerId);
    setShowGames(true);
  };

  const handleMouseLeave = () => {
    let timer = setTimeout(() => setShowGames(false), 1000);
    setTimerId(timer);
  };

  return (
    <div
      className={`pc-image ${reserved ? "reserved" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-center d-block">{pcId}</span>
      <img
        className={`img-fluid ${isLeftColumn ? "left" : "right"}`}
        src={
          reserved
            ? isLeftColumn
              ? reservedPc
              : reservedPc2
            : isLeftColumn
            ? freePc2
            : freePc
        }
        alt={reserved ? "reserved" : "free"}
      />
      {showGames && (
        <div className="games">
          {games.map((game, index) => (
            <p key={index}>{game}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PcImage;