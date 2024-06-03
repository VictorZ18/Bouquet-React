import "./Addpage.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Createdpage() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <div className="leftarrow">
        <Link to="/Guestlist">
          <img
            className="arrow-left"
            src={require("../icons/arrow-left.png")}
            alt="arrow-right"
          />
        </Link>
        <p className="reminders">Back</p>
      </div>

      <div className="flower">
        <img
          className="flowerimg"
          src={require("../media/cheers.png")}
          alt=""
        />
      </div>

      <div className="rectangle">
        <div className="wrapper">
          <p className="Tittle">Bob Van Aerschot </p>

          <p className="">Information</p>
          <p className="">bobvanaerschot@gmail.com</p>
          <p className="">+32 425 00 00 00</p>

          <p className="text">RSVP</p>
          <p className="reminder">Yes</p>

          <p className="text">Invitation</p>
          <div className="contain">sent</div>
          <p className="text">Modify guest information</p>
        </div>
      </div>
    </div>
  );
}

export default Createdpage;
