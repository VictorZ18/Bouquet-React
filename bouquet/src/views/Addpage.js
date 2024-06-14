import "./Addpage.scss";
import Checklist from "../components/Checklist";
import Button from "../components/button";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Hide() {
  if (document.querySelector(".hide").innerHTML === "Hide") {
    document.querySelector(".hide").innerHTML = "Show";
    document.querySelector(".preMades").style.display = "none";
  } else {
    document.querySelector(".hide").innerHTML = "Hide";
    document.querySelector(".preMades").style.display = "block";
  }
}

function Addpage() {
  const [checklist, setChecklist] = useState([]);
  const user = useSelector((state) => state.user);
  const [deadline, setDeadline] = useState('');
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();

  const handleDeadline = (e) => {
    setDeadline(e.target.value);
  };

  const CreateTask = () => {
      axios.get(`${apiBaseUrl}/checklist`)
        .then(res => {
          const checklist = res.data.find(checklist => checklist.user_id === user.user._id);
          setChecklist(checklist);     
          axios.post(`${apiBaseUrl}/tasks/create`, {
            name: document.querySelector('.name').value,
            deadline: deadline,
            description: document.querySelector('.description').value,
            checklistId: checklist._id,
          })
            .then(res => {
              navigate('/checklist');
            });
        });
  }

  return (
    <div className="App">
      <div className="leftarrow">
        <Link to="/checklist">
          <img
            className="back-arrow"
            src={require("../icons/arrow-left.png")}
            alt="arrow-right"
          />
        </Link>
      </div>
      <div className="cover">
        <img
          className="coverimg"
          src={require("../media/flowers.png")}
          alt=""
        />
      </div>
      <div className="rectangle">
        <h1 className="titlePage subtitlePage">Pre-made to-dos</h1>
        <div className="wrapper">
          <div className="container">
            <div className="circlewrapper selectTodo">
              <div className="selectAllCircle"></div>
              Select all
            </div>
            <p className="hide" onClick={Hide}>Hide</p>
          </div>
          <div className="preMades">
            <Checklist />
          </div>
          <h1 className="pageTitle"> Create your own</h1>
          <form className="eventForm">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="name" name="name" placeholder='Name' />
            <label htmlFor="deadline">Deadline</label>
            <input type="date" id="deadline" name="deadline" onChange={handleDeadline} />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" className="description" name="description" placeholder='Description' />
          </form>
          <p className="explanation">
            You can add a description, and set manual reminders later.
          </p>
          <div onClick={CreateTask}>
            <Button text="Confirm" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Addpage;
