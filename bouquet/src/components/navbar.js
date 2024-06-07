import "../views/App.scss";
import { Outlet, Link } from "react-router-dom";
import homeOn from "../icons/home_on.png";
import homeOff from "../icons/home_off.png";
import suppliersOn from "../icons/suppliers_on.png";
import suppliersOff from "../icons/suppliers_off.png";
import guestsOn from "../icons/guests_on.png";
import guestOff from "../icons/guests_off.png";
import checklistOn from "../icons/checklist_on.png";
import checklistOff from "../icons/checklist_off.png";
import programOn from "../icons/program_on.png";
import programOff from "../icons/program_off.png";
import { useLocation } from "react-router-dom";

let homeIcon = document.querySelector(".iconImg.home");
let suppliersIcon = document.querySelector(".iconImg.suppliers");

function Navbar() {
  return (
    <div className="navbar">
      <div className="icon" /*onClick={ChangeIcon()}*/>
        <Link to="/">
          <img className="iconImg home" src={homeOn} alt="overview" />
          <p className="navTag active"> Overview </p>
        </Link>
      </div>
      <div className="icon">
        <Link to="/suppliers">
          <img
            className="iconImg suppliers"
            src={suppliersOff}
            alt="suppliers"
          />
          <p className="navTag"> Suppliers </p>
        </Link>
      </div>

      <div className="icon">
        <Link to="/guests">
          <img className="iconImg guests" src={guestOff} alt="guests" />
          <p className="navTag"> Guests </p>
        </Link>
      </div>
      <div className="icon">
        <Link to="/checklistpage">
          <img
            className="iconImg checklist"
            src={checklistOff}
            alt="checklist"
          />
          <p className="navTag"> Checklist </p>
        </Link>
      </div>
      <div className="icon">
        <Link to="/program">
          <img className="iconImg program" src={programOff} alt="program" />
          <p className="navTag"> Program </p>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

/*function ChangeIcon() {
    let location = useLocation();
    console.log(location);
    if (location.pathname === "/") {
        console.log(homeIcon.src);
    } else if (location.pathname === "/suppliers") {
        console.log(suppliersIcon.src);
        suppliersIcon.src = suppliersOn;
    } 
}*/

export default Navbar;
