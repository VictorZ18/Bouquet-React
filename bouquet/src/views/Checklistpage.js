import "./Checklist.scss";
import Navbar from "../components/navbar";
import SideMenu from "../components/sideNav";
import Checklist from "../components/Checklist";
import Countdown from "../components/countdown";
import { Link } from "react-router-dom";

function checklistpage() {
  return (
    <div className="App">
      <SideMenu />
      <header className="App-header"></header>
      <Countdown />
      <div className="flower">
        <img
          className="flowerimg"
          src={require("../media/flowers.png")}
          alt=""
        />
      </div>

      <div className="rectangle">
        <div className="wrapper">
          <p className="Tittle"> Activities</p>
          <p className="minitittle"> Today/Overdue</p>

          <Link to="/Todo">
            <div className="smallrect">
              <p className="Create">Create a guest list</p>
            </div>
          </Link>

          <p className="Thisweek"> This week</p>

          <Checklist />
          <Checklist />
          <Checklist />
          <Checklist />
          <p className="Thisweek"> This Month</p>
          <Checklist />
          <Checklist />
          <Checklist />
          <Checklist />
        </div>
        <p className="twomonth"> In 2 Month</p>
      </div>

      <Link to="/Addpage">
        <img className="add" src={require("../media/Add.png")} alt="" />
      </Link>
      <Navbar />
    </div>
  );
}

export default checklistpage;
