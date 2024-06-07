import "./Reminderpage.scss";
import Button from "../components/button";

function Createdpage() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <img className="done" src={require("../icons/done.png")} alt="" />
      <div className="flower">
        <img
          className="flowerimg"
          src={require("../media/flowers.png")}
          alt=""
        />
      </div>
      <div className="rectangle"></div>
      <p className="Tittle"> Send documents to City Hall</p>
      <p className="parag">
        I should send the important documents to City Hall:
      </p>
      <ul className="list">
        <li>Marriage license</li>
        <li>Birth certificates</li>
      </ul>
      <p className="Thisweek"> Reminders</p>
      <p className="reminder">1 day before</p>
      <div className="contain">
        <p className="reminders">Add reminders</p>
        <img
          className="arrow-down"
          src={require("../icons/arrow-down.png")}
          alt="arrow-right"
        />
      </div>
      <p className="Thisweek"> Assigned members</p>
      <p className="reminder">You</p>
      <div className="contain">
        <p className="reminders">Add reminders</p>
        <img
          className="arrow-down"
          src={require("../icons/arrow-down.png")}
          alt="arrow-right"
        />
      </div>
      <Button text="Finish task" />;
    </div>
  );
}

export default Createdpage;
