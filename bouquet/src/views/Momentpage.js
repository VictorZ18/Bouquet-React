import { Link } from "react-router-dom";
import "./Momentpage.scss";

function checklistpage() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="leftarrow">
        <Link to="/Addprogram">
          <img
            className="arrow-left"
            src={require("../icons/arrow-left.png")}
            alt="arrow-right"
          />
        </Link>

        <p className="reminders">Back</p>
      </div>
      <div className="flower">
        <img
          className="flowerimg"
          src={require("../media/cityhall.png")}
          alt=""
        />
      </div>
      <div className="rectangle"></div>

      <div className="wrapper">
        <p className="Head"> City Hall</p>
        <p className="Location"> Location</p>
        <p className="adresses"> Kerkplein 17, Heist-o/d-Berg</p>

        <div className="map">
          <img className="mapimg" src={require("../media/map.png")} alt="" />
        </div>

        <div className="grp">
          <div className="box">
            <p className="reminders">End time</p>
            <p className="reminders">10h30</p>
          </div>

          <div className="box">
            <p className="reminders">Start time</p>
            <p className="reminders">10h00</p>
          </div>
        </div>
        <p className="paragraph">
          This is the official ceremony! When we get out of city hall, we will
          be officially married. Don’t forget to check out the practical
          information below!
        </p>

        <p className="Location"> Practical information</p>
        <p className="adresses"> Parking: Around the square.</p>

        <div className="map">
          <img className="mapimg" src={require("../media/map.png")} alt="" />
        </div>

        <p className="adresses"> Extra info:</p>
        <p className="Location"> Blue dress code</p>

        <p className="modify">Modify event</p>
      </div>
    </div>
  );
}

export default checklistpage;
