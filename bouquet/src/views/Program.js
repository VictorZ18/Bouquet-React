import "./App.scss";
import Navbar from "../components/navbar";
import SideMenu from "../components/sideNav";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Programdetails from "../components/programinfo";
import { useNavigate } from "react-router-dom";

function Program() {
  const navigate = useNavigate();
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [events, setEvents] = useState([]);
  axios.get(`${apiBaseUrl}/events`)
    .then(res => {
      const events = res.data;
      setEvents(events);
    })
    .catch(err => {
      console.log(err);
    });

  const ToEvent = (event) => {
    console.log(event);
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
                    className="circlewrapper"
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
