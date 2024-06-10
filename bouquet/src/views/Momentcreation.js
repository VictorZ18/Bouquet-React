import "./Momentcreation.scss";
import Button from "../components/button";
import { Link } from "react-router-dom";

function checklistpage() {
  return (
    <div className="App ">
      <div className="leftarrow">
        <Link to="/Momentselection">
          <img
            className="back-arrow"
            src={require("../icons/arrow-white.png")}
            alt="arrow-right"
          />
        </Link>

      </div>
      <div className="cover">
        <img
          className="coverimg"
          src={require("../media/cityhall.png")}
          alt="event-cover"
        />
      </div>
      <div className="rectangle"></div>

      <div className="wrapper">
        <p className="Tittle"> City Hall</p>
        <div className="group">
          <p className="reminders">City*</p>
        </div>
        <div className="group">
          <p className="reminders">Address*</p>
        </div>
        <div className="grp">
          <div className="box">
            <p className="reminders">Start hour*</p>
            <img
              className="arrow-down"
              src={require("../icons/arrow-down.png")}
              alt="arrow-right"
            />
          </div>

          <div className="box">
            <p className="reminders">End hour*</p>
            <img
              className="arrow-down"
              src={require("../icons/arrow-down.png")}
              alt="arrow-right"
            />
          </div>
        </div>
        <div className="group">
          <p className="Description">Description</p>
        </div>
        <p className="Subtittle"> Practical information</p>
        <div className="group">
          <p className="reminders">Parking</p>
        </div>
        <p className="text">
          If there is no official parking address, you can add a description on
          where to park for your guests.{" "}
        </p>
        <div className="group">
          <p className="reminders">Extra info (dress code,...)</p>
        </div>
        <div className="contain">
          <p className="reminders">Assign supplier</p>
          <img
            className="arrow-down"
            src={require("../icons/arrow-down.png")}
            alt="arrow-right"
          />
        </div>
        <p className="text">
          Assigned supplier’s information will automatically be added to the
          practical information.
        </p>
        <Link to="/Momentpage">
          <Button text="Confirm" />
        </Link>
      </div>
    </div>
  );
}

export default checklistpage;
