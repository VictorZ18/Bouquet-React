import "./Addpage.scss";
import Checklist from "../components/Checklist";
import Button from "../components/button";
import { Link } from "react-router-dom";

function Hide() {
  if (document.querySelector(".hide").innerHTML === "Hide") {
    document.querySelector(".hide").innerHTML = "Show";
    document.querySelector(".preMades").style.display = "none";
  } else {
    document.querySelector(".hide").innerHTML = "Hide";
    document.querySelector(".preMades").style.display = "block";
  }
}

function Addpage() {

  return (
    <div className="App">
      <div className="leftarrow">
        <Link to="/checklist">
          <img
            className="back-arrow"
            src={require("../icons/arrow-left.png")}
            alt="arrow-right"
          />
        </Link>
      </div>
      <div className="cover">
        <img
          className="coverimg"
          src={require("../media/flowers.png")}
          alt=""
        />
      </div>
      <div className="rectangle">
        <h1 className="titlePage subtitlePage">Pre-made to-dos</h1>
        <div className="wrapper">
          <div className="container">
            <div className="circlewrapper selectTodo">
              <div className="selectAllCircle"></div>
              Select all
            </div>
            <p className="hide" onClick={Hide}>Hide</p>
          </div>
          <div className="preMades">
            <Checklist />
            <Checklist />
          </div>
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
          <p className="explanation">
            You can add a description, and set manual reminders later.
          </p>
        </div>

        <Link to="/checklistpage">
          <Button text="Confirm" />;
        </Link>
      </div>
    </div>
  );
}

export default Addpage;
