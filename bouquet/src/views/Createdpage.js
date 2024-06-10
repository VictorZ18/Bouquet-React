import "./Createdpage.scss";
import Countdown from "../components/countdown";
import Clock from "../components/clock";
import Button from "../components/button";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Createdpage() {
  const deadline = new Date(Date.parse(new Date()) + 120 * 24 * 60 * 60 * 1000);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

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
      <div className="countdownChecklist">
        <Clock countdown={deadline} onComplete={() => alert('Countdown complete')}/>
      </div>
      <div className="rectangle">
        <div className="wrapper">
          <div className="taskInfo">
            <h1 className="titlePage titleMargin"> Send documents to City Hall</h1>
            <p className="explanation">
              I should send the important documents to City Hall:
            </p>
            <ul className="list">
              <li>Marriage license</li>
              <li>Birth certificates</li>
            </ul>
          </div>
          <p className="Thisweek"> Reminders</p>
          <p className="reminder">1 day before</p>
          <div className="contain">
            <p className="reminders">Add reminders</p>
            <img
              className="arrow-down"
              src={require("../icons/arrow-down.png")}
              alt="arrow-right"
            />
          </div>
          <p className="Thisweek"> Assigned members</p>
          <p className="reminder">You</p>
          {isPopupOpen && (
            <div id="popup" className="popup">
              <div className="popup-content">
                <p className="header">You finished this to-do!</p>
                <p className="text">
                  Would you like to add its price to your budget?
                </p>
                <p className="pop">Price</p>
                <Link to="/checklistpage">
                  <p className="modify">This had no cost</p>
                </Link>
                <Link to="/checklistpage">
                  <Button text="Finish task" />
                </Link>
              </div>
            </div>
          )}
          <div className="contain">
            <p className="reminders">Price</p>
            <img
              className="arrow-down"
              src={require("../icons/arrow-down.png")}
              alt="arrow-right"
            />
          </div>
          <div onClick={openPopup}>
            <Button text="Finish task" />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Createdpage;
