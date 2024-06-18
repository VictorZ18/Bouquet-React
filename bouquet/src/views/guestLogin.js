import React from "react";
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../userSlice.js';
import Button from "../components/button.js";

export default function GuestLogin() {
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loggedIn = (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        axios.get(`${apiBaseUrl}/users`)
            .then(res => {
                const data = res.data;
                const user = data.find(user => user.email === email);
                if (user) {
                    bcrypt.compare(password, user.password)
                        .then((result) => {
                            if (result) {
                                console.log('Login successful');
                                const userId = user._id;
                                axios.get(`${apiBaseUrl}/users/${userId}`)
                                    .then(response => {
                                        console.log(response.data);
                                        const fetchedUser = response.data;
                                        console.log(fetchedUser);
                                        dispatch(setUser(fetchedUser));
                                        navigate('/homeguest');
                                    });
                            } else {
                                console.log('Login failed');
                            }
                        });
                } else {
                    console.log('User not found');
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <div>
            <h1 className="pageTitle titleMargin">Guest Login</h1>
            <form onSubmit={loggedIn}>
                <label htmlFor="email">Email address</label>
                <input type="text" id="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
                <div onClick={loggedIn}>
                    <Button text="Login" />
                </div>
            </form>
        </div>
    );
}

