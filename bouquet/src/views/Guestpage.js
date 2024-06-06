import "./Addpage.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Createdpage() {
  return (
    <div className="App">
      <div className="leftarrow">
        <Link to="/Guestlist">
          <img
            className="back-arrow"
            src={require("../icons/arrow-white.png")}
            alt="arrow"
          />
        </Link>
      </div>

      <div className="cover">
        <img
          className="coverimg"
          src={require("../media/cheers.png")}
          alt="cheers"
        />
      </div>

      <div className="rectangle">
        <div className="wrapper">
          <h1 className="titlePage guestName">Bob Van Aerschot </h1>

          <div className="guestInfo">
            <h2 className="guestInfoDetail">Information</h2>
            <p className="guestInfoDetail">bobvanaerschot@gmail.com</p>
            <p className="guestInfoDetail">+32 425 00 00 00</p>
          </div>

          <div className="statusForGuest">
            <div className="statusContainer">
              <h2 className="statusName">RSVP</h2>
              <p className="statusAnswer">Yes</p>
            </div>
            <div className="statusContainer">
              <h2 className="statusName">Invitation</h2>
              <p className="statusAnswer">Sent</p>
            </div>
          </div>

          <p className="more">Modify guest information</p>
        </div>
      </div>
    </div>
  );
}

export default Createdpage;
