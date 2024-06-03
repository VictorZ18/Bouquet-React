import Cityhallguests from "../components/Cityhallguests";
import SideMenu from "../components/sideNav";
import Button from "../components/button";
import "./Guestlist.scss";
import Navbar from "../components/navbar";
import Message from "../components/Messageexcuse";
import { Link } from "react-router-dom";

function addprogram() {
  return (
    <div className="App">
      <SideMenu />
      <header className="App-header">
        <p className="tittle">Your guest lists</p>
        <div className="rectcontainer">
          <div className="rect">
            <div className="status">
              <p>RSVP status</p>
              <p>Invitation status</p>
            </div>
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />
            <Cityhallguests />

            <Link to="/cityhallguestlist">
              <p className="more">32more</p>
            </Link>
          </div>
        </div>

        <Link to="/Paymentcheckout">
          <Button text="Send invitation" />
        </Link>

        <Message />
        <Message />
        <Message />
        <img className="add" src={require("../media/Add.png")} alt="" />
      </header>
      <Navbar />
    </div>
  );
}

export default addprogram;
