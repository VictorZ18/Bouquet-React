import "./Guestlistcreation.scss";
import Programdetails from "../components/programinfo";
import { Link } from "react-router-dom";

function Addpage() {
  return (
    <div className="App">
      <header className="App-header"></header>
        <Link to="/guests">
          <img
            className="back-arrow"
            src={require("../icons/arrow-left.png")}
            alt="arrow-right"
          />
        </Link>
      <h1 className="titlePage"> Choose an event:</h1>

      <div className="">
        <img className="cheers" src={require("../media/cheers.png")} alt="" />
      </div>
      <div className="wrapper">
        <p className="explanation">
          The guest list will be created for the chosen event. Click ‘Select
          all’ to create a general guest list.
        </p>

        <div className="circlewrapper">
          <div className="selectAllCircle"></div>
          Select all
        </div>

        <Link to="/Guestlist">
          <Programdetails />
        </Link>

        <p className="text">
          If you would like to create a guest list for more than one event but
          not all, you can add the guest list you’ve created for one event to another event
          later on.
        </p>
      </div>
    </div>
  );
}

export default Addpage;
