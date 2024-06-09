import '../views/App.scss';
import arrowDown from '../icons/arrow-down.png';
import './weddingHeader.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function WeddingHeader() {
    const [users, setUsers] = useState([]);
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    axios.get(`${apiBaseUrl}/users`)
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  } , []);
    return (
        <div className="weddingHeader">
            <div className="weddingInfo">
                <h1 className='names'> {users.length > 0 && users[0].firstName} & Mona </h1>
                <p className='date'> 15.06.2025 </p>
            </div>
            <img src={arrowDown} alt="arrow" className="arrowDown"/>
        </div>
    )
}

export default WeddingHeader;