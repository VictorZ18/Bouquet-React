import "./Addpage.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function Createdpage() {
  let { guestId } = useParams();
  const navigate = useNavigate();
  const [guest, setGuest] = useState([]);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
  axios.get(`${apiBaseUrl}/guests/${guestId}`)
    .then(res => {
      setGuest(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, [apiBaseUrl, guestId]);
  return (
    <div className="App">
      <div className="leftarrow">
          <img
            className="back-arrow"
            src={require("../icons/arrow-white.png")}
            alt="arrow"
            onClick={() => navigate(-1)}
          />
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
          <h1 className="titlePage subtitlePage"> {guest.firstName} {guest.lastName}</h1>

          <div className="guestInfo">
            <h2 className="guestInfoDetail">Information</h2>
            <p className="guestInfoDetail">{guest.email}</p>
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
