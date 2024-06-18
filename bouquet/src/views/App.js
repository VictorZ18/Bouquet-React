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
import Checklist from '../components/Checklist';

function Home() {
  const user = useSelector((state) => state.user);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [days, setDays] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [taskDeadline, setTaskDeadline] = useState([]);

  axios.get(`${apiBaseUrl}/weddings`)
    .then(res => {
      const wedding = res.data.find(wedding => wedding.user_id === user.user._id);
      const weddingDate = new Date(wedding.wedding_date); // Convert string to Date object
      const today = new Date();
      const timeDiff = weddingDate - today;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      setDays(days);
    });

  useEffect(() => {
    axios.get(`${apiBaseUrl}/tasks`)
      .then(res => {
        const tasks = res.data.map(task => {
          console.log(task);
          const deadline = new Date(task.deadline);
          const today = new Date();
          const timeDiff = deadline - today;
          const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          return { ...task, daysLeft };
        });

        tasks.sort((a, b) => a.daysLeft - b.daysLeft);

        setTasks(tasks);
      });
  }, [apiBaseUrl]);

  const getTimescaleLabel = (daysLeft) => {
    if (daysLeft <= 0) {
      return "Today/Overdue";
    } else if (daysLeft === 1) {
      return "Tomorrow";
    } else if (daysLeft < 7) {
      return "This week";
    } else if (daysLeft < 30) {
      return "This month";
    } else {
      return "Later";
    }
  };

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
      <SideMenu />
      <header className="App-header">
        <WeddingHeader />
      </header>
      <Clock countdown={deadline} />
      <div className="rectangle lower">
        <img src={require("../icons/arrow-down.png")} alt="arrow-down" className="arrow-down arrow-up" onClick={closeRectangle} />
        <div className="wrapper pageBottom">
          <h1 className="titlePage titleMargin titleLowMargin">Activities</h1>
          <div className="todoContainer">
            {tasks.map((task, index) => {
              const timescale = getTimescaleLabel(task.daysLeft);
              const showTimescale = index === 0 || getTimescaleLabel(tasks[index - 1].daysLeft) !== timescale;
              return (
                <div key={index}>
                  {showTimescale && <h2 className="timescale">{timescale}</h2>}
                  <Link to={`/Createdpage/${task._id}`}>
                    <Checklist
                      name={task.name}
                      deadline={
                        task.daysLeft <= 0
                          ? "Overdue"
                          : task.daysLeft === 1
                            ? "Due tomorrow"
                            : `${task.daysLeft} days left`
                      }
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Home;


