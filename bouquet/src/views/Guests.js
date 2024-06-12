import Navbar from "../components/navbar";
import SideMenu from "../components/sideNav";
import { Link } from "react-router-dom";
import "./App.scss";
import "./Guests.scss"
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
  const [wedding, setWedding] = useState([]);
  const [event, setEvent] = useState([]);
  const [guestlist, setGuestlist] = useState([]);


  async function fetchData() {
    try {
      const [guestsResponse, weddingsResponse] = await Promise.all([
        axios.get(`${apiBaseUrl}/guests`),
        axios.get(`${apiBaseUrl}/weddings`),
      ]);

      const guests = guestsResponse.data.filter(guest => guest.userId === user.user._id);
      const weddingsData = weddingsResponse.data;
      const wedding = weddingsData.find(wedding => wedding.user_id === user.user._id);

      if (wedding) {
        try {
          const eventResponse = await axios.get(`${apiBaseUrl}/events?wedding_id=${wedding._id}`);
          const events = eventResponse.data.filter(event => event.wedding_id === wedding._id);

          if (events.length > 0) {
            const guestlistPromises = events.map(event =>
              axios.get(`${apiBaseUrl}/guestlist?event_id=${event._id}`)
            );

            const guestlistResponses = await Promise.all(guestlistPromises);
            const guestlists = guestlistResponses.flatMap(response => response.data);
            const uniqueGuestlists = Array.from(new Map(guestlists.map(guest => [guest._id, guest])).values());
            setGuestlist(uniqueGuestlists);
          }
        } catch (error) {
          console.error('Error fetching guest lists:', error);
        }
      }


      setGuest(guests);
    } catch (err) {
      console.error(err);
      // Handle errors appropriately (display message, etc.)
    }
  }

  fetchData();

  return (
    <div className="App">
      <SideMenu />
      {guests.length > 0 && (
        <>
          <h1 className="titlePage titleMargin">Your guest lists</h1>
          <div className="rect">
            <div className="guestlists">
              {guestlist.map((guestlist) => (
                <div className="list" key={guestlist._id}>
                  <div className="status">
                    <p>Name</p>
                    <p>RSVP status</p>
                    <p>Invitation status</p>
                  </div>
                  <h2 className="listName">{guestlist.list_name}</h2>
                  {guests.filter(guest => guest.guestlistId === guestlist._id).map(guest => (
                    <Link key={guest._id} to={`/GuestPage/${guest._id}`}>
                      <Cityhallguests
                        key={guest._id}
                        firstName={guest.firstName}
                        lastName={guest.lastName}
                      />
                    </Link>
                  ))}
                  <Link to={`/Cityhallguestlist/${guestlist._id}`}>
                    <p className="more">32 more</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <Link to="/Paymentcheckout">
            <Button text="Send invitation" />
          </Link>

          <div className="messageList">
            <Message />
          </div>

          <Link to="/Guestlistcreation">
            <img className="add" src={require("../media/Add.png")} alt="" />
          </Link>
        </>
      )
      }

      {
        guests.length === 0 && (
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
        )
      }

      <Navbar />
    </div >
  );
}



export default Guests;
