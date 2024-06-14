import "./App.scss";
import Navbar from "../components/navbar";
import SideMenu from "../components/sideNav";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Programdetails from "../components/programinfo";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Program() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get(`${apiBaseUrl}/weddings`)
      .then(res => {
        const wedding = res.data.find(wedding => wedding.user_id === user.user._id);
        axios.get(`${apiBaseUrl}/events`)
          .then(res => {
            const events = res.data;
            const filteredEvents = events.filter(event => event.wedding_id === wedding._id);
            setEvents(filteredEvents);
          })
          .catch(err => {
            console.log(err);
          });
      })
  }, [apiBaseUrl, user.user._id, navigate]);


  const ToEvent = (event) => {
    navigate(`/Momentpage/${event._id}`);
  };

  return (
    <div className="App">
      <SideMenu />
      {events.length > 0 && (
        <>
          <div className="wrapper">
            <h1 className="titlePage titleMargin"> Your program</h1>
            {events && (
              <div className="events-list">
                {events.map((event) => (
                  <div
                    key={event._id}
                    onClick={() => ToEvent(event)}
                  >
                    <Programdetails
                      name={event.event_name}
                      address={event.event_address}
                      start={event.start_hour}
                      end={event.end_hour}
                    />
                  </div>
                ))}
              </div>
            )}
            <Link to="/Momentselection">
              <img className="add" src={require("../media/Add.png")} alt="" />
            </Link>
          </div>
        </>)}
      {events.length === 0 && (
        <>
          <div className="addguests">
            <p className="guidelines">
              Hey, it seems you haven’t planned
              <br></br>
              any moments yet.
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

          <Link to="/Momentselection">
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

export default Program;
