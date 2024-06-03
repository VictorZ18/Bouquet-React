import "./Addpage.scss";
import Checklist from "../components/Checklist";
import Button from "../components/button";
import { Link } from "react-router-dom";

function Addpage() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <Link to="/checklistpage">
        <img
          className="arrow-left"
          src={require("../icons/arrow-left.png")}
          alt="arrow-right"
        />
      </Link>

      <p className="Tittle"> Existing to-dos</p>
      <div className="flower">
        <img
          className="flowerimg"
          src={require("../media/flowers.png")}
          alt=""
        />
      </div>
      <div className="wrapper">
        <div className="container">
          <p>Select all</p>
          <p>Hide</p>
        </div>

        <Link to="/createdpage">
          <Checklist />
        </Link>
        <Link to="/createdpage">
          <Checklist />
        </Link>
        <Link to="/createdpage">
          <Checklist />
        </Link>
        <Link to="/createdpage">
          <Checklist />
        </Link>
        <p className="Tittle"> Create your own</p>
        <p className="reminder">Name</p>
        <p className="Thisweek"> Deadline</p>
        <p className="reminder">Day</p>
        <div className="contain">
          <p className="reminders">Month</p>
          <img
            className="arrow-down"
            src={require("../icons/arrow-down.png")}
            alt="arrow-right"
          />
        </div>
        <p className="paragraph">
          You can add a description, and set manual reminders later.
        </p>
      </div>

      <Link to="/checklistpage">
        <Button text="Confirm" />;
      </Link>
    </div>
  );
}

export default Addpage;
