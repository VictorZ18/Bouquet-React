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
import { useEffect } from 'react';

function Checklistpage() {
  const user = useSelector((state) => state.user);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [days, setDays] = useState(0);
  const [checklist, setChecklist] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [taskDeadline, setTaskDeadline] = useState([]);

  useEffect(() => {
    axios.get(`${apiBaseUrl}/weddings`)
      .then(res => {
        const wedding = res.data.find(wedding => wedding.user_id === user.user._id);
        const weddingDate = new Date(wedding.wedding_date); // Convert string to Date object
        const today = new Date();
        const timeDiff = weddingDate - today;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        setDays(days);
      });
  }, []);

  useEffect(() => {
    axios.get(`${apiBaseUrl}/checklist`)
      .then(res => {
        const checklist = res.data;
        setChecklist(checklist);
      });
  }, []);

  useEffect(() => {
    axios.get(`${apiBaseUrl}/tasks`)
      .then(res => {
        const tasks = res.data.map(task => {
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

  const deadline = new Date(Date.parse(new Date()) + days * 24 * 60 * 60 * 1000);

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
        <Clock countdown={deadline} onComplete={() => alert('Countdown complete')} />
      </div>
      <div className="rectangle">
        <div className="wrapper">
          <h1 className="titlePage titleMargin">Activities</h1>
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
      <Link to="/Addpage">
        <img className="add" src={require("../media/Add.png")} alt="" />
      </Link>
      <Navbar />
    </div>
  );
}

export default Checklistpage;
