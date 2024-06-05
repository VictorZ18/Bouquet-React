import Navbar from "../components/navbar";
import SideMenu from "../components/sideNav";
import { Link } from "react-router-dom";
import "./App.scss";

function Guests() {
  return (
    <div className="App">
      <SideMenu />
      <header className="App-header">
        <div className="App">
          <SideMenu />
          <header className="App-header">
            <div className="addguests">
              <p className="guidelines">
                Hey, looks like you haven’t set any guests in yet.
              </p>
              <img
                className="flowerimg"
                src={require("../media/addguests.png")}
                alt=""
              />
            </div>
            <p className="getstarted">
              Click on the ‘plus’ right here to get
              <br></br>
              started!
            </p>

            <Link to="/Guestlistcreation">
              <img
                className="addbutton"
                src={require("../media/addbutton.png")}
                alt=""
              />
            </Link>
          </header>
          <Navbar />
        </div>
      </header>
      <Navbar />
    </div>
  );
}

export default Guests;
