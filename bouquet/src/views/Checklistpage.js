import "./Checklist.scss";
import "./App.scss";
import Navbar from "../components/navbar";
import SideMenu from "../components/sideNav";
import Checklist from "../components/Checklist";
import Countdown from "../components/countdown";
import { Link } from "react-router-dom";

function checklistpage() {
  return (
    <div className="App">
      <SideMenu />
      <div className="cover">
        <img
          className="coverimg"
          src={require("../media/flowers.png")}
          alt=""
        />
      </div>
      <div className="countdownChecklist">
      </div>
      <Countdown />
      <div className="rectangle">
        <div className="wrapper">
          <h1 className="titlePage titleMargin"> Activities</h1>
          <div className="todoContainer">
            <h2 className="urgent"> Today/Overdue</h2>
            <Link to="/Todo">
              <div className="smallrect">
                <p className="urgentTodo">Create a guest list</p>
              </div>
            </Link>
          </div>
          <div className="todoContainer">
            <p className="Thisweek"> This week</p>
            <Checklist />
          </div>
          <div className="todoContainer">
            <p className="Thisweek"> This Month</p>
            <Checklist />
          </div>

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
