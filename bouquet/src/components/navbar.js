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
import mediaOff from '../icons/media.png';
import { useSelector } from 'react-redux';

function Navbar() {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  const ChangeIcon = (paths, onIcon, offIcon) => {
    return paths.includes(location.pathname) ? onIcon : offIcon;
  };
  
  return (
    <div className="navbar">
      <div className="icon">
        <Link to="/home">
          <img className="iconImg home" src={ChangeIcon("/home", homeOn, homeOff)} alt="overview" />
          <p className={`navTag ${location.pathname === "/home" ? "active" : ""}`}> Overview </p>
        </Link>
      </div>
      <div className="organizerNav">
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
      <div className="guestNav">
        <div className="icon">
          <Link to="/media">
            <img className="iconImg media" src={ChangeIcon("/media", mediaOff, mediaOff)} alt="media" />
            <p className={`navTag ${location.pathname === "/media" ? "active" : ""}`}> Media </p>
          </Link>
        </div>
        <div className="icon">
          <Link to="/giftlist">
            <img className="iconImg gift" src={ChangeIcon("/giftlist", giftOn, giftOff)} alt="gift" />
            <p className={`navTag ${location.pathname === "/giftlist" ? "active" : ""}`}> Giftlist </p>
          </Link>
        </div>
        <div className="icon">
          <Link to="/messages">
            <img className="iconImg messages" src={ChangeIcon("/messages", messagesOn, messagesOff)} alt="messages" />
            <p className={`navTag ${location.pathname === "/messages" ? "active" : ""}`}> Messages </p>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
