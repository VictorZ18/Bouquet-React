import React, { useState } from 'react';
import '../views/App.scss';
import './login.scss';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../userSlice.js';


function Login() {
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const dispatch = useDispatch();
    const [buttonText, setButtonText] = useState('Register');
    const [pageName, setPageName] = useState('Welcome back!');
    const [pageText, setPageText] = useState('Login to your account');
    const [linkText, setLinkText] = useState('Don\'t have an account?');
    const [isLogin, setIsLogin] = useState(true);
    const [selectedTheme, setSelectedTheme] = useState('');
    const [weddingDate, setWeddingDate] = useState('');
    const navigate = useNavigate();

    const switchClick = () => {
        setIsLogin(!isLogin);
        setButtonText(isLogin ? 'Login' : 'Register');
        setLinkText(isLogin ? 'Already have an account?' : 'Don\'t have an account?');
        setPageName(isLogin ? 'You\'re almost ready!' : 'Welcome back!');
        setPageText(isLogin ? 'One last step, enter your details to create your account.' : 'Login to your account');
    };

    const loggedIn = (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        axios.get(`${apiBaseUrl}/users`)
            .then(res => {
                const data = res.data;
                const user = data.find(user => user.firstName === username);
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
                                        dispatch(setUser(fetchedUser)); // Dispatch action with user data
                                        navigate('/home');
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
    };

    const submitted = async (e) => {
        e.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const theme = selectedTheme;
        const date = weddingDate;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            axios.post(`${apiBaseUrl}/users/create`,
                { firstName: firstName, lastName: lastName, email: email, password: hashedPassword })
                .then(res => {
                    if (res) {
                        axios.post(`${apiBaseUrl}/weddings/create`,
                            { user_id: res.data._id, wedding_date: date, wedding_theme: theme })
                            .then(res => {
                                console.log(res.data);
                            })
                            .catch(err => {
                                console.log(err);
                            });
                        const user = res.data;
                        console.log('Registering successful');
                        const userId = user._id;
                        console.log(userId);
                        axios.get(`${apiBaseUrl}/users/${userId}`)
                            .then(response => {
                                console.log(response.data);
                                const fetchedUser = response.data;
                                dispatch(setUser(fetchedUser)); // Dispatch action with user data
                                navigate('/home');
                            });
                    } else {
                        console.log('Registering failed');
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        } catch (error) {
            console.error('Error hashing password', error);
        }

    };

    const handleTheme = (e) => {
        setSelectedTheme(e.target.value);
    }

    const handleWeddingDateChange = (e) => {
        setWeddingDate(e.target.value);
    }

    return (
        <div>
            <h1 className="titlePage titleMargin">{pageName}</h1>
            <p className="registerText">{pageText}</p>
            {isLogin ? (
                <form className="loginForm">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="username" name="username" placeholder='Username' />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" />
                    <button type="submit" text="Register" onClick={loggedIn} className='button'><p className='buttonText'>Log in</p></button>

                </form>
            ) : (
                <form className="registerForm">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" id="firstName" className="firstName" name="firstName" placeholder='First name' />
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" id="lastName" className="lastName" name="lastName" placeholder='Last name' />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                    <label htmlFor="weddingDate">Wedding date</label>
                    <input type="date" id="weddingDate" name="weddingDate" onChange={handleWeddingDateChange}/>
                    <select className="theme" name="theme" id="theme" onChange={handleTheme}>
                        <option value="">Theme</option>
                        <option value="Beach party">Beach party</option>
                        <option value="Classic">Classic</option>
                        <option value="Modern">Modern</option>
                        <option value="Rock'n'Roll">Rock'n'Roll</option>
                    </select>
                    <button type="submit" text="Register" onClick={submitted} className='button'><p className='buttonText'>Register</p></button>
                </form>
            )}
            <p className="loginLinkSection">{linkText} <span onClick={switchClick} className="loginLink">{buttonText}</span></p>
        </div>
    );
}

export default Login;