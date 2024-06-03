import "./Createdpage.scss";
import Countdown from "../components/countdown";
import Button from "../components/button";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Createdpage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <Countdown />
      <div className="flower">
        <img
          className="flowerimg"
          src={require("../media/flowers.png")}
          alt=""
        />
      </div>
      <div className="rectangle"></div>
      <p className="Tittle"> Send documents to City Hall</p>
      <p className="parag">
        I should send the important documents to City Hall:
      </p>
      <ul className="list">
        <li>Marriage license</li>
        <li>Birth certificates</li>
      </ul>
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
        <div id="popup" class="popup">
          <div className="popup-content">
            <p className="header">You finished this to-do!</p>
            <p className="text">
              Would you like to add its price to your budget?
            </p>
            <p className="pop">Price</p>
            <p className="modify">This had no cost</p>

            <Link to="/Addpage">
              <button className="comfirm" onClick={closePopup}>
                Confirm
              </button>
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

      <div className="">
        <button className="click" onClick={openPopup}>
          Finish task
        </button>
      </div>
    </div>
  );
}

export default Createdpage;
