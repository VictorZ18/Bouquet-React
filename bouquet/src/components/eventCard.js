import React from 'react';
import '../views/App.scss';
import "../views/Momentselection.scss";

function EventCard(props) {
  
  return (
    <p className="event">{props.eventName}</p>
  );
}

export default EventCard;
