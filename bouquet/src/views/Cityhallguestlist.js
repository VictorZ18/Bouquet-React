import Cityhallguests from "../components/Cityhallguests";
import { Link } from "react-router-dom";

import "./Guestlist.scss";

function addprogram() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="rectcontainer">
          <div className="rect">
            <h1 className="Cityhall">City Hall</h1>
            <div className="status">
              <p>A-Z</p>
              <p>RSVP Status</p>
            </div>
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />
          </div>
        </div>

        <Link to="/Addnewguest">
          <img className="add" src={require("../media/Add.png")} alt="" />
        </Link>
      </header>
    </div>
  );
}

export default addprogram;
