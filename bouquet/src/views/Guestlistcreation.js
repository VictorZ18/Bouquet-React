import "./Addpage.scss";
import "./Guestlistcreation.scss";
import Programdetails from "../components/programinfo";
import { Link } from "react-router-dom";

function Addpage() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="leftarrow">
        <Link to="/guests">
          <img
            className="arrow-left"
            src={require("../icons/arrow-left.png")}
            alt="arrow-right"
          />
        </Link>
        <p className="reminders">Back</p>
      </div>
      <p className="Tittle"> Choose an event:</p>

      <div className="">
        <img className="cheers" src={require("../media/cheers.png")} alt="" />
      </div>
      <div className="wrapper">
        <p className="text">
          The guest list will be created for the chosen event. Click ‘Select
          all’ to create a general guest list.
        </p>

        <div className="circlewrapper">
          <div class="circle"></div>
          Select all
        </div>

        <Link to="/Guestlist">
          <Programdetails />
          <Programdetails />
          <Programdetails />
        </Link>

        <p className="text">
          If you would like to create a guest list for more than one event but
          not all, you can add the guest list you’ve created to another event
          later on.
        </p>
      </div>
    </div>
  );
}

export default Addpage;
