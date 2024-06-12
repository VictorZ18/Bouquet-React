import React from "react";
import "../views/Addprogram.scss";
import "../views/App.scss";

function Programdetails(props) {
  return (
    <div className="group">
      <h2 className="eventInfo">{props.name}</h2>
      <p className="eventInfo">{props.address}</p>
      <p className="eventInfo">{props.start} - {props.end}</p>
    </div>
  );
}

export default Programdetails;
