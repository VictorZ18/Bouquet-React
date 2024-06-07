import "./Momentselection.scss";
import { Link } from "react-router-dom";

function checklistpage() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="leftarrow">
        <Link to="/Program">
          <img
            className="back-arrow"
            src={require("../icons/arrow-left.png")}
            alt="arrow-right"
          />
        </Link>
      </div>

      <div className="wrapper">
        <h1 className="titlePage titleMargin"> Choose a moment to add to your program</h1>
        <div className="programgroup">
          <Link to="/Momentcreation">
            <p className="event">City hall</p>
            <p className="event">Religious Ceremony</p>
            <p className="event">Reception</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default checklistpage;
