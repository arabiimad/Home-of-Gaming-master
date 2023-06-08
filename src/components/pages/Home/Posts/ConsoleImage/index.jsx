//home/Posts/ConsoleImage/index.jsx
import reservedConsole from "/img/console-reserved.png";
import freeConsole from "/img/console-free.svg";

const ConsoleImage = ({ reserved }) => {
  return (
    <div>
      {reserved ? (
        <img className="img-fluid" src={reservedConsole} alt="reserved" />
      ) : (
        <img className="img-fluid" src={freeConsole} alt="free" />
      )}
    </div>
  );
};

export default ConsoleImage;
