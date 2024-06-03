import "./Addnewguest.scss";
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
      <Link to="/Cityhallguestlist">
        <img
          className="arrow-left"
          src={require("../icons/arrow-left.png")}
          alt="arrow-right"
        />
      </Link>
      <p className="Tittle"> New guest</p>

      <div className="Inputs">
        <p className="Inputtext">First name</p>
        <p className="Inputtext">Last name</p>
        <p className="Inputtext">Email Adresses</p>
        <div className="Inputnumber">
          <img
            className="arrow-down"
            src={require("../icons/arrow-down.png")}
            alt="arrow-right"
          />
          <p className="reminders">Phone number</p>
        </div>
      </div>
      <p className="text">Select guest or guest list from another list</p>
      {isPopupOpen && (
        <div id="popup" class="popup">
          <div className="popup-content">
            <Link to="/Guestlist">
              <p className="header">You just added a new guest!</p>
              <img
                className="cheersimg"
                src={require("../media/cheers.png")}
                alt=""
              />
            </Link>
          </div>
        </div>
      )}

      <div className="">
        <button className="click" onClick={openPopup}>
          Add guest{" "}
        </button>
      </div>
    </div>
  );
}

export default Createdpage;
