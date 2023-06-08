import reservedConsole from "/img/console-reserved.png";
import freeConsole from "/img/console-free.svg";

const ConsoleImage = ({ reserved }) => {
  return (
    <div>
      {reserved ? (
        <img src={reservedConsole} alt="reserved" />
      ) : (
        <img src={freeConsole} alt="free" />
      )}
    </div>
  );
};

export default ConsoleImage;
