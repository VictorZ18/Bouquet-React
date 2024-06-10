import "./Addnewguest.scss";
import Button from "../components/button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Createdpage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const submitted = async (e) => {
    console.log(user.user._id);
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;


    axios.get(`${apiBaseUrl}/users/${user.user._id}`)
      .then(res => {
        const data = res.data;
        console.log(data._id);
        if (data) {
          axios.post(`${apiBaseUrl}/guests/create`,
            { firstName: firstName, lastName: lastName, email: email, userId: data._id })
            .then(res => {
              if (res) {
                const guest = res.data;
                console.log('Registering successful');
                navigate('/Guestlist');
              } else {
                console.log('Registering failed');
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log('User not found');
        }
      }
      )
  };

  return (
    <div className="App">
      <Link to="/Cityhallguestlist">
        <img
          className="back-arrow"
          src={require("../icons/arrow-left.png")}
          alt="arrow-right"
        />
      </Link>
      <h1 className="titlePage"> New guest</h1>

      <form className="registerForm">
        <label htmlFor="firstName">First name</label>
        <input type="text" id="firstName" className="firstName" name="firstName" placeholder='First name' />
        <label htmlFor="lastName">Last name</label>
        <input type="text" id="lastName" className="lastName" name="lastName" placeholder='Last name' />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" />
        <div className="Inputnumber">
          <img
            className="arrow-down"
            src={require("../icons/arrow-down.png")}
            alt="arrow-right"
          />
          <p className="reminders">Phone number</p>
        </div>
        <button type="submit" text="Register" onClick={submitted} className='button'><p className='buttonText'>Register</p></button>
      </form>

      <p className="text">Select guest or guest list from another list</p>
      {isPopupOpen && (
        <div id="popup" class="popup">
          <div className="popup-content">
            <Link to="/Guestlist">
              <p className="header">You just added a new guest!</p>
              <img
                className="cheersimg"
                src={require("../media/cheers.png")}
                alt=""
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Createdpage;
