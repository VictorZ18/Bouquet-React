import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import '../views/App.scss';
import homeOn from '../icons/home_on.png';
import homeOff from '../icons/home_off.png';
import suppliersOn from '../icons/suppliers_on.png';
import suppliersOff from '../icons/suppliers_off.png';
import guestsOn from '../icons/guests_on.png';
import guestOff from '../icons/guests_off.png';
import checklistOn from '../icons/checklist_on.png';
import checklistOff from '../icons/checklist_off.png';
import programOn from '../icons/program_on.png';
import programOff from '../icons/program_off.png';
import giftOff from '../icons/gift.png';
import giftOn from '../icons/gift_on.png';
import messagesOff from '../icons/messages.png';
import messagesOn from '../icons/messages_on.png';
import mediaOn from '../icons/media_on.png';
import mediaOff from '../icons/media_off.png';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Navbar() {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  const ChangeIcon = (paths, onIcon, offIcon) => {
    return paths.includes(location.pathname) ? onIcon : offIcon;
  };

  const navChange = () => {
    const nav = document.querySelector(".organizerNav");
    const navGuest = document.querySelector(".guestNav");
    if (nav && navGuest) {
      if (user.user.role === "guest") {
        nav.classList.add("none");
        navGuest.classList.remove("none");
      } else if (user.user.role === "organizer") {
        nav.classList.remove("none");
        navGuest.classList.add("none");
      }
    }
  };

  useEffect(() => {
    navChange();
  }, [location, user]);

  return (
    <div className="navbar">
      <div className="organizerNav">
        <div className="icon">
          <Link to="/home">
            <img className="iconImg home" src={ChangeIcon("/home", homeOn, homeOff)} alt="overview" />
            <p className={`navTag ${location.pathname === "/home" ? "active" : ""}`}> Overview </p>
          </Link>
        </div>
        <div className="icon">
          <Link to="/suppliers">
            <img className="iconImg suppliers" src={ChangeIcon(["/suppliers", "/suppliersCategories", "/SuppliersCategories"], suppliersOn, suppliersOff)} alt="suppliers" />
            <p className={`navTag ${["/suppliers", "/suppliersCategories", "/SuppliersCategories"].includes(location.pathname) ? "active" : ""}`}> Suppliers </p>
          </Link>
        </div>
        <div className="icon">
          <Link to="/guests">
            <img className="iconImg guests" src={ChangeIcon(["/guests", "/Guestlist"], guestsOn, guestOff)} alt="guests" />
            <p className={`navTag ${["/guests", "/Guestlist"].includes(location.pathname) ? "active" : ""}`}> Guests </p>
          </Link>
        </div>
        <div className="icon">
          <Link to="/checklist">
            <img className="iconImg checklist" src={ChangeIcon("/checklist", checklistOn, checklistOff)} alt="checklist" />
            <p className={`navTag ${location.pathname === "/checklist" ? "active" : ""}`}> Checklist </p>
          </Link>
        </div>
        <div className="icon">
          <Link to="/program">
            <img className="iconImg program" src={ChangeIcon(["/program", "/Addprogram"], programOn, programOff)} alt="program" />
            <p className={`navTag ${["/program", "/Addprogram"].includes(location.pathname) ? "active" : ""}`}> Program </p>
          </Link>
        </div>
      </div>
      <div className="guestNav none">
        <div className="icon">
          <Link to={`/homeguest`}>
            <img className="iconImg home" src={ChangeIcon("/homeguest", homeOn, homeOff)} alt="overview" />
            <p className={`navTag ${location.pathname === "/homeguest" ? "active" : ""}`}> Overview </p>
          </Link>
        </div>
        <div className="icon">
          <Link to="/mediaguest">
            <img className="iconImg media" src={ChangeIcon("/mediaguest", mediaOn, mediaOff)} alt="media" />
            <p className={`navTag ${location.pathname === "/mediaguest" ? "active" : ""}`}> Media </p>
          </Link>
        </div>
        <div className="icon">
          <Link to="/giftlist">
            <img className="iconImg gift" src={ChangeIcon("/giftlist", giftOn, giftOff)} alt="gift" />
            <p className={`navTag ${location.pathname === "/giftlist" ? "active" : ""}`}> Giftlist </p>
          </Link>
        </div>
        <div className="icon">
          <Link to="/messagesguest">
            <img className="iconImg messages" src={ChangeIcon("/messagesguest", messagesOn, messagesOff)} alt="messages" />
            <p className={`navTag ${location.pathname === "/messagesguest" ? "active" : ""}`}> Messages </p>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
