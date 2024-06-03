import "./Program.scss";
import Navbar from "../components/navbar";
import SideMenu from "../components/sideNav";
import { Link } from "react-router-dom";

function Program() {
  return (
    <div className="App">
      <SideMenu />
      <header className="App-header">
        <div className="addguests">
          <p className="parah">
            Hey, it seems you haven’t planned
            <br></br>
            any moments yet.
          </p>
          <img
            className="flowerimg"
            src={require("../media/addguests.png")}
            alt=""
          />
        </div>
        <p className="get">
          Click on the ‘plus’ right here to get
          <br></br>
          started!
        </p>

        <Link to="/Momentselection">
          <img
            className="addbutton"
            src={require("../media/addbutton.png")}
            alt=""
          />
        </Link>
      </header>
      <Navbar />
    </div>
  );
}

export default Program;
