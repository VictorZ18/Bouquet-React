import Navbar from "../components/navbar";
import SideMenu from "../components/sideNav";
import { Link } from "react-router-dom";
import "./App.scss";
import Cityhallguests from "../components/Cityhallguests";
import Button from "../components/button";
import "./Guestlist.scss";
import Message from "../components/Messageexcuse";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Guests() {
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
      {guests.length > 0 && (
        <>
          <h1 className="titlePage titleMargin">Your guest lists</h1>
          <div className="rect">
            <div className="status">
              <p>Name</p>
              <p>RSVP status</p>
              <p>Invitation status</p>
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
        </>
      )}

      {guests.length === 0 && (
        <>
          <div className="addguests">
            <p className="guidelines">
              Hey, looks like you haven’t set any guests in yet.
            </p>
            <img
              className="flowerimg"
              src={require("../media/addguests.png")}
              alt=""
            />
          </div>
          <p className="getstarted">
            Click on the ‘plus’ right here to get
            <br></br>
            started!
          </p>

          <Link to="/Guestlistcreation">
            <img
              className="addbutton"
              src={require("../media/addbutton.png")}
              alt=""
            />
          </Link>
        </>
      )}

      <Navbar />
    </div>
  );
}



export default Guests;
