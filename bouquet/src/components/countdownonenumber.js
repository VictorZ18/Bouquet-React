import "../views/App.scss";
import "./countdown.scss";

function Countdownonenumber() {
  return (
    <div className="countdownAll">
      <div className="countdownBack">
        <p className="rectangleTop"></p>
      </div>
      <div className="countdownGradient">
        <hr className="gradientLine"></hr>
      </div>
      <div className="countdownBackBottom">
        <p className="rectangleBottom"></p>
      </div>
      <div className="countdown">
        <h1 className="number"> 0 </h1>
      </div>
    </div>
  );
}

export default Countdownonenumber;
