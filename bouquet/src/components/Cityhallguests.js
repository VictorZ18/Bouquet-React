import React from "react";
import "../views/Guestlist.scss";
import "../views/App.scss";

function Cityhallguests() {
  return (
    <div className="wrapper">
      <div className="reply">
        <p className="guestName">
          Bob Van
          <br></br>Aerschot
        </p>
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
