import Navbar from "../components/navbar";
import SideMenu from "../components/sideNav";
import { Link } from "react-router-dom";
import "./App.scss";
import "./Guests.scss"
import Cityhallguests from "../components/Cityhallguests";
import Button from "../components/button";
import "./Guestlist.scss";
import Message from "../components/Messageexcuse";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Guests() {
  const user = useSelector((state) => state.user);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [guests, setGuest] = useState([]);
  const [wedding, setWedding] = useState([]);
  const [event, setEvent] = useState([]);
  const [guestlist, setGuestlist] = useState([]);

  useEffect(() => {
    axios.get(`${apiBaseUrl}/weddings`)
      .then(res => {
        const wedding = res.data.find(wedding => wedding.user_id === user.user._id);
        setWedding(wedding);
        axios.get(`${apiBaseUrl}/events`)
          .then(res => {
            const events = res.data;
            const filteredEvents = events.filter(event => event.wedding_id === wedding._id);
            setEvent(filteredEvents);
            if (filteredEvents) {
              const promises = filteredEvents.map(event => 
                axios.get(`${apiBaseUrl}/guestlist`)
                  .then(res => {
                    const guestlist = res.data;
                    const filteredGuestlist = guestlist.filter(guest => guest.event_id === event._id);
                    return filteredGuestlist; 
                  })
                  .catch(err => {
                    console.error('Error fetching guest lists:', err);
                    return []; 
                  })
              );
            
              Promise.all(promises)
                .then(results => {
                  const allFilteredGuestlists = results.flat();
                  console.log(allFilteredGuestlists);
                  setGuestlist(allFilteredGuestlists); 
                });
            }
          })
          .catch(err => {
            console.error('Error fetching events:', err);
          });
      })
    axios.get(`${apiBaseUrl}/guests`)
      .then(res => {
        const guests = res.data.filter(guest => guest.userId === user.user._id);
        setGuest(guests);
      })
      .catch(err => {
        console.error('Error fetching guests:', err);
      });
  }, [apiBaseUrl, user.user._id, wedding._id, event._id, guestlist._id]);

  async function sendInvitations() {
    try {
      const eventDetails = { name: 'Your Event Name', date: 'Event Date' }; // Replace with actual event details
      await axios.post(`${apiBaseUrl}/send-invitations`, { guests, eventDetails });
      alert('Invitations sent successfully');
    } catch (error) {
      console.error('Error sending invitations:', error);
      alert('Failed to send invitations');
    }
  }

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

          <div className="send" onClick={sendInvitations}>
            <Link to="/Paymentcheckout">
              <Button text="Send invitation" />
            </Link>
          </div>

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
