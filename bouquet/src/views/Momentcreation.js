import "./Momentcreation.scss";
import "./App.scss";
import Button from "../components/button";
import { Link } from "react-router-dom";

function checklistpage() {
  return (
    <div className="App ">
      <div className="leftarrow">
        <Link to="/Momentselection">
          <img
            className="back-arrow"
            src={require("../icons/arrow-white.png")}
            alt="arrow-right"
          />
        </Link>

      </div>
      <div className="cover">
        <img
          className="coverimg"
          src={require("../media/cityhall.png")}
          alt="event-cover"
        />
      </div>
      <div className="rectangle"></div>

      <div className="wrapper">
        <h1 className="titlePage eventInfo">City Hall</h1>
        <h2 className="eventInfo">General information</h2>
        <form className="eventForm">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" className="location" name="location" placeholder='Location' />
          <div className="grp">
            <select className="startHour" name="startHour" id="startHour">
              <option value="startHour">Start hour</option>
              <option value="startHour">12:00</option>
              <option value="startHour">13:00</option>
              <option value="startHour">14:00</option>
              <option value="startHour">15:00</option>
              <option value="startHour">16:00</option>
              <option value="startHour">17:00</option>
              <option value="startHour">18:00</option>
              <option value="startHour">19:00</option>
              <option value="startHour">20:00</option>
              <option value="startHour">21:00</option>
              <option value="startHour">22:00</option>
            </select>
            <select className="endHour" name="endHour" id="endHour">
              <option value="endHour">End hour</option>
              <option value="endHour">12:00</option>
              <option value="endHour">13:00</option>
              <option value="endHour">14:00</option>
              <option value="endHour">15:00</option>
              <option value="endHour">16:00</option>
              <option value="endHour">17:00</option>
              <option value="endHour">18:00</option>
              <option value="endHour">19:00</option>
              <option value="endHour">20:00</option>
              <option value="endHour">21:00</option>
              <option value="endHour">22:00</option>
            </select>
          </div>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" className="description" name="description" placeholder='Description' />
        </form>

        <h2 className="eventInfo"> Practical information</h2>
        <form className="eventForm">
          <label htmlFor="parking">Parking address</label>
          <input type="text" id="parking" className="parking" name="parking" placeholder='Parking address' />
          <p className="alternative">
            If there is no official parking address, you can add a description on
            where to park for your guests.{" "}
          </p>
          <label htmlFor="extra">Extra info (dress code,...)</label>
          <input type="text" id="extra" className="extra" name="extra" placeholder='Extra info' />
        </form>
        <div className="contain">
          <p className="reminders">Assign supplier</p>
          <img
            className="arrow-down"
            src={require("../icons/arrow-down.png")}
            alt="arrow-right"
          />
        </div>
        <p className="text">
          Assigned supplier’s information will automatically be added to the
          practical information.
        </p>
        <Link to="/Momentpage">
          <Button text="Confirm" />
        </Link>
      </div>
    </div>
  );
}

export default checklistpage;
