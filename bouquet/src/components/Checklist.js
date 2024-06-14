import React from "react";
import "../views/Checklist.scss";
import "../views/App.scss";

function Checklist(props) {
  return (
    <div className="smallrect">
        <p>{props.name}</p>
        <p>{props.deadline}</p>
    </div>
  );
}

export default Checklist;
