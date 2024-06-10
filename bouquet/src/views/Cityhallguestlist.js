import Cityhallguests from "../components/Cityhallguests";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import "./Guestlist.scss";

function Addprogram() {
  const user = useSelector((state) => state.user);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [guests, setGuest] = useState([]);

  axios.get(`${apiBaseUrl}/guests`)
    .then(res => {
      const data = res.data;
      const guests = data.filter(guest => guest.userId === user.user._id);
      setGuest(guests);
    })
    .catch(err => {
      console.log(err);
    });
  return (
    <div className="App">
      <Link to="/guests">
        <img
          className="back-arrow"
          src={require("../icons/arrow-left.png")}
          alt="arrow-right"
        />
      </Link>
      <div className="rect">
        <h1 className="titlePage">City Hall</h1>
        <div className="status">
          <p>A-Z</p>
          <p>RSVP Status</p>
        </div>
        {guests.map((guest) => (
          <Link to={`/GuestPage/${guest._id}`}>
            <Cityhallguests
              key={guest._id}
              firstName={guest.firstName}
              lastName={guest.lastName}
            />
          </Link>
        ))}
      </div>

      <Link to="/Addnewguest">
        <img className="add" src={require("../media/Add.png")} alt="" />
      </Link>
    </div>
  );
}

export default Addprogram;
