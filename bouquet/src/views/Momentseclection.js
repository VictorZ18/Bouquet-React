import "./Momentselection.scss";
import { Link } from "react-router-dom";

function checklistpage() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="leftarrow">
        <Link to="/Program">
          <img
            className="arrow-left"
            src={require("../icons/arrow-left.png")}
            alt="arrow-right"
          />
        </Link>
        <p className="reminders">Back</p>
      </div>

      <div className="wrapper">
        <p className="tittle"> Choose a moment to add to your program</p>
        <div className="programgroup">
          <Link to="/Addprogram">
            <p className="program">City hall</p>
            <p className="program">Religious Ceremony</p>
            <p className="program">City hall</p>
            <p className="program">Reception</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default checklistpage;
