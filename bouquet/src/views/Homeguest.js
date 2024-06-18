import './App.scss';
import Clock from "../components/clock";
import Navbar from '../components/navbar';
import SideMenu from '../components/sideNav';
import WeddingHeader from '../components/weddingHeader';
import CouplePic from '../media/hannah-olinger-eNZayb-kkvE-unsplash.jpg';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Homeguest() {
  const user = useSelector((state) => state.user);
  const wedding = useSelector((state) => state.wedding);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [days, setDays] = useState(0);

  axios.get(`${apiBaseUrl}/weddings/${wedding.wedding._id}`)
    .then(res => {   
      const wedding = res.data;
      const weddingDate = new Date(wedding.wedding_date); 
      const today = new Date();
      const timeDiff = weddingDate - today;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      setDays(days);
    });

  const deadline = new Date(Date.parse(new Date()) + days * 24 * 60 * 60 * 1000);

  const closeRectangle = () => {
    const rectangle = document.querySelector(".rectangle");
    const arrow = document.querySelector(".arrow-down");
    const title = document.querySelector(".titlePage");
    if (rectangle) {
      rectangle.classList.toggle("lower");
      arrow.classList.toggle("arrow-up");
      title.classList.toggle("titleLowMargin");
    }
  }

  return (
    <div className="App">
      <div className="imageContainer">
        <img src={CouplePic} alt="couple" className="couplePic" />
      </div>
      <header className="App-header">
        <WeddingHeader userName={user.user.firstName} />
      </header>
      <Clock countdown={deadline} />
      <div className="rectangle lower">
        <img src={require("../icons/arrow-down.png")} alt="arrow-down" className="arrow-down arrow-up" onClick={closeRectangle} />
        <div className="wrapper pageBottom">
          <h1 className="titlePage titleMargin titleLowMargin">Program</h1>
          <div className="todoContainer">
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Homeguest;


