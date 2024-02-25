import './App.css';
import Countdown from './components/countdown';
import Navbar from './components/navbar';
import SideMenu from './components/sideNav';
import WeddingHeader from './components/weddingHeader';
import CouplePic from './media/hannah-olinger-eNZayb-kkvE-unsplash.jpg';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Home() {

  return (
      <div className="App">
        <img src={CouplePic} alt="couple" className="couplePic"/>
        <SideMenu />
        <header className="App-header">
          <WeddingHeader />
        </header>
        <Countdown /> 
        <Navbar />
      </div>
  );
}

export default Home;
