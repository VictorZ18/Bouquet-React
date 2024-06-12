import "./Momentselection.scss";
import { Link } from "react-router-dom";
import EventCard from "../components/eventCard";

function checklistpage() {
  const eventName = ["City Hall", "Reception"];
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="leftarrow">
        <Link to="/program">
          <img
            className="back-arrow"
            src={require("../icons/arrow-left.png")}
            alt="arrow-right"
          />
        </Link>
      </div>

      <div className="wrapper">
        <h1 className="titlePage titleMargin"> Choose a moment to add to your program</h1>
        <div className="programgroup">
          {eventName.map((name, index) => (
            <Link key={index} to={`/Momentcreation/${name}`}>
              <EventCard key={index} eventName={name} />
            </Link>
          ))}
        </div>
        <p className="more">Create your own</p>
      </div>
    </div>
  );
}

export default checklistpage;
