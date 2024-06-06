import './App.scss';
import Clock from "../components/clock";
import Navbar from '../components/navbar';
import SideMenu from '../components/sideNav';
import WeddingHeader from '../components/weddingHeader';
import CouplePic from '../media/hannah-olinger-eNZayb-kkvE-unsplash.jpg';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Home() {
  const deadline = new Date(Date.parse(new Date()) + 120 * 24 * 60 * 60 * 1000);
  return (
      <div className="App">
        <img src={CouplePic} alt="couple" className="couplePic"/>
        <SideMenu />
        <header className="App-header">
          <WeddingHeader />
        </header>
        <Clock countdown={deadline}/> 
        <Navbar />
      </div>
  );
}

export default Home;


