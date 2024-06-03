import "./Todo.scss";
import Countdownonenumber from "../components/countdownonenumber";
import Button from "../components/button";
import { Link } from "react-router-dom";

function todo() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Countdownonenumber />
      <div className="flower">
        <img
          className="flowerimg"
          src={require("../media/flowers.png")}
          alt=""
        />
      </div>
      <div className="rectangle"></div>
      <p className="Tit"> Create your guest list</p>
      <div className="wrapper">
        <p className="paragraph">
          You can create your guest list by going to the ‘Guest’ section of the
          app. <br></br>The Guest list is one of the starting points of a
          wedding. There you will find all the needed information to help you
          along. <br></br>We suggest you create your program first, in the
          ‘Program’ section. This task will automatically be checked as done.
        </p>
      </div>

      <Link to="/checklistpage">
        <Button text="Finish task" />;
      </Link>
    </div>
  );
}

export default todo;
