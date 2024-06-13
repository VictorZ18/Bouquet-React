import "./Checklist.scss";
import "./App.scss";
import Navbar from "../components/navbar";
import SideMenu from "../components/sideNav";
import Checklist from "../components/Checklist";
import { Link } from "react-router-dom";
import Clock from "../components/clock";
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Checklistpage() {
  const user = useSelector((state) => state.user);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [days, setDays] = useState(0);

  axios.get(`${apiBaseUrl}/weddings`)
    .then(res => {
      const wedding = res.data.find(wedding => wedding.user_id === user.user._id);
      const weddingDate = new Date(wedding.wedding_date); // Convert string to Date object
      const today = new Date();
      const timeDiff = weddingDate - today;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      setDays(days);
    });
  const deadline = new Date(Date.parse(new Date()) + days * 24 * 60 * 60 * 1000);
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
        <Clock countdown={deadline} onComplete={() => alert('Countdown complete')}/>
      </div>
      <div className="rectangle">
        <div className="wrapper">
          <h1 className="titlePage titleMargin"> Activities</h1>
          <div className="todoContainer">
            <h2 className="urgent"> Today/Overdue</h2>
            <Link to="/CreatedPage">
              <div className="smallrect">
                <p className="urgentTodo">Create a guest list</p>
              </div>
            </Link>
          </div>
          <div className="todoContainer">
            <p className="Thisweek"> This week</p>
            <Checklist />
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

export default Checklistpage;
