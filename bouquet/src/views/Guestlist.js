import Cityhallguests from "../components/Cityhallguests";
import SideMenu from "../components/sideNav";
import Button from "../components/button";
import "./Guestlist.scss";
import Navbar from "../components/navbar";
import Message from "../components/Messageexcuse";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

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
      <SideMenu />
      <header className="App-header">
        <h1 className="titlePage titleMargin">Your guest lists</h1>
        <div className="rect">
          <div className="status">
            <p>Name</p>
            <p>RSVP status</p>
            <p>Invitation status</p>
          </div>
          {guests.map((guest) => (
            <Cityhallguests
              key={guest._id}
              firstName={guest.firstName}
              lastName={guest.lastName}
            />
          ))}

          <Link to="/cityhallguestlist">
            <p className="more">32 more</p>
          </Link>
        </div>

        <Link to="/Paymentcheckout">
          <Button text="Send invitation" />
        </Link>

        <Message />
        <Link to="/Addnewguest">
          <img className="add" src={require("../media/Add.png")} alt="" />
        </Link>
      </header>
      <Navbar />
    </div>
  );
}

export default Addprogram;
