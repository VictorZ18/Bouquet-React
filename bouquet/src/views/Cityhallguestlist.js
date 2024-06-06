import Cityhallguests from "../components/Cityhallguests";
import { Link } from "react-router-dom";

import "./Guestlist.scss";

function addprogram() {
  return (
    <div className="App">
      <Link to="/Guestlist">
        <img
          className="back-arrow"
          src={require("../icons/arrow-left.png")}
          alt="arrow-right"
        />
      </Link>
        <div className="rect">
          <h1 className="titlePage">City Hall</h1>
          <div className="status">
            <p>A-Z</p>
            <p>RSVP Status</p>
          </div>
          <Cityhallguests />
          <Cityhallguests />
          <Cityhallguests />
        </div>

        <Link to="/Addnewguest">
          <img className="add" src={require("../media/Add.png")} alt="" />
        </Link>
    </div>
  );
}

export default addprogram;
