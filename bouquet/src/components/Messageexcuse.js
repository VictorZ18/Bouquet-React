import React from "react";
import "../views/Guestlist.scss";
import "../views/App.scss";

function Message() {
  return (
    <div className="wrapper">
      <div className="reply">
        <p className="tittlename">Paula Holmes</p>
        <p className="messagereminder">
          Paula has answered ‘No’ to the RSVP Message: “Will be on holiday,
          sorry.”
        </p>
      </div>
    </div>
  );
}

export default Message;
