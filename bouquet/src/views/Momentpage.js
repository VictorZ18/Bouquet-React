import { Link } from "react-router-dom";
import "./Momentpage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Map from "../components/Map";
import { map } from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

function Checklistpage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/events/${eventId}`)
      .then((res) => {
        setEvent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [eventId]);

  if (event) {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="leftarrow">
          <Link to="/program">
            <img
              className="back-arrow"
              src={require("../icons/arrow-white.png")}
              alt="arrow-right"
            />
          </Link>
        </div>
        <div className="cover">
          <img
            className="coverimg"
            src={require("../media/cityhall.png")}
            alt="coverimg"
          />
        </div>
        <div className="rectangle"></div>

        <div className="wrapper">
          <h1 className="pageTitle"> {event.event_name}</h1>
          <h2 className="eventInfo"> General information</h2>
          
          <p className="paragraph">
            {event.event_information}
          </p>

          <p className="infoTitle"> Location</p>
          <p className="marginHalf">{event.event_address}</p>

          <Map
            keyId={event._id}
            name={event.event_name}
            address={event.event_address}
            latitude={event.address_latitude}
            longitude={event.address_longitude}
          />

          <div className="grp">
            <div className="hours">
              <p className="infoTitle">End time</p>
              <p className="reminders">{event.start_hour}</p>
            </div>

            <div className="hours">
              <p className="infoTitle">Start time</p>
              <p className="reminders">{event.end_hour}</p>
            </div>
          </div>
          <h2 className="eventInfo"> Practical information</h2>
          <p className="infoTitle"> Parking</p>
          <p className="marginHalf">{event.parking_address}</p>

          <Map
            keyId={event._id}
            name={"Parking"}
            address={event.parking_address}
            latitude={event.address_latitude}
            longitude={event.address_longitude}
          />

          <p className="infoTitle"> Extra info</p>
          <p className="marginHalf">{event.extra_info}</p>

          <p className="modify">Modify event</p>
        </div>
      </div>
    );
  }
}

export default Checklistpage;
