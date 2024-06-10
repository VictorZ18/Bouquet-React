import React from "react";
import "../views/Guestlist.scss";
import "../views/App.scss";

function Cityhallguests(props) {
  return (
    <div className = "wrapper" >
        <div className="reply">
          <p className="guestName">{props.firstName} {props.lastName}</p>
          <div className="signreply">
            <div className="circle"></div>
            Yes
          </div>
      
          <p className="reminders">Sent</p>
        </div>
    </div>
  );
}

export default Cityhallguests;
