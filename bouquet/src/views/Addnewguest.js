import "./Addnewguest.scss";
import Button from "../components/button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

function Createdpage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [guestlist, setGuestlist] = useState([]);
  const { guestListid } = useParams();
  console.log(guestListid);

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
    const phone = document.getElementById('phone').value;

    axios.get(`${apiBaseUrl}/users/${user.user._id}`)
      .then(res => {
        const data = res.data;
        console.log(data._id);
        if (data) {
          axios.post(`${apiBaseUrl}/guests/create`,
            { firstName: firstName, lastName: lastName, email: email, userId: data._id, phone: phone, guestlistId: guestListid})
            .then(res => {
              if (res) {
                const guest = res.data;
                console.log('Registering successful');
                console.log(guest);
                navigate('/guests');
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
      <img
        className="back-arrow"
        src={require("../icons/arrow-left.png")}
        alt="arrow-right"
        onClick={() => navigate(-1)}
      />
      <h1 className="titlePage"> New guest</h1>

      <form className="registerForm">
        <label htmlFor="firstName">First name</label>
        <input type="text" id="firstName" className="firstName" name="firstName" placeholder='First name' />
        <label htmlFor="lastName">Last name</label>
        <input type="text" id="lastName" className="lastName" name="lastName" placeholder='Last name' />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" />
        <label htmlFor="phone">Phone number</label>
        <input type="phone" id="phone" name="phone" placeholder="Phone" />
        <button type="submit" text="Register" onClick={submitted} className='button'><p className='buttonText'>Register</p></button>
      </form>

      <p className="text">Select guest or guest list from another list</p>
      {isPopupOpen && (
        <div id="popup" class="popup">
          <div className="popup-content">
            <Link to="/guests">
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
