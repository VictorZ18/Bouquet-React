import './App.scss';
import Clock from "../components/clock";
import Navbar from '../components/navbar';
import SideMenu from '../components/sideNav';
import WeddingHeader from '../components/weddingHeader';
import CouplePic from '../media/hannah-olinger-eNZayb-kkvE-unsplash.jpg';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Home() {
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
      <img src={CouplePic} alt="couple" className="couplePic" />
      <SideMenu />
      <header className="App-header">
        <WeddingHeader />
      </header>
      <Clock countdown={deadline} />
      <Navbar />
    </div>
  );
}

export default Home;


