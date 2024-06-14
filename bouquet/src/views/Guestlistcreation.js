import "./Guestlistcreation.scss";
import Programdetails from "../components/programinfo";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Addpage() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [wedding, setWedding] = useState(null);
  const [events, setEvents] = useState(null);
  const [guestlist, setGuestlist] = useState([]);
  const [guestlistId, setGuestlistId] = useState(null);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeddingAndEvents = async () => {
      try {
        const weddingResponse = await axios.get(`${apiBaseUrl}/weddings`);
        const wedding = weddingResponse.data.find(
          (wedding) => wedding.user_id === user.user._id
        );

        if (wedding) {
          setWedding(wedding);

          const eventResponse = await axios.get(`${apiBaseUrl}/events`);
          const events = eventResponse.data.filter(
            (event) => event.wedding_id === wedding._id
          );
          setEvents(events);

          if (events) {
            axios.get(`${apiBaseUrl}/guestlist?event_id=${events._id}`)
              .then((response) => {
                const guestlist = response.data;
                setGuestlist(guestlist);
                if (guestlist) {
                  const filteredEvents = events.filter(event => !guestlist.find(guestlist => guestlist.event_id === event._id));
                  setEvents(filteredEvents);
                }
              });
          } 
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeddingAndEvents();
  }, []);

  const CreatedList = (event) => {
    axios.post(`${apiBaseUrl}/guestlist/create`, {
      event_id: event._id,
      list_name: event.event_name,
    })
      .then((response) => {
        const guestlistId = response.data;
        setGuestlistId(guestlistId._id);
        console.log(guestlistId._id);
        navigate(`/Addnewguest/${guestlistId._id}`);
      });
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <Link to="/guests">
        <img
          className="back-arrow"
          src={require("../icons/arrow-left.png")}
          alt="arrow-right"
        />
      </Link>
      <h1 className="titlePage"> Choose an event:</h1>

      <div className="">
        <img className="cheers" src={require("../media/cheers.png")} alt="" />
      </div>
      <div className="wrapper">
        <p className="explanation">
          The guest list will be created for the chosen event. Click ‘Select
          all’ to create a general guest list.
        </p>

        <div className="circlewrapper">
          <div className="selectAllCircle"></div>
          Select all
        </div>
        {events && (
          <div className="events-list">
            {events.map((event) => (
              <div
                key={event._id}
                className="circlewrapper"
                onClick={() => CreatedList(event)}
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
        <p className="text">
          If you would like to create a guest list for more than one event but
          not all, you can add the guest list you’ve created for one event to another event
          later on.
        </p>
      </div>
    </div>
  );
}

export default Addpage;
