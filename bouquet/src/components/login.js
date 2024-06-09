import React, { useState } from 'react';
import '../views/App.scss';
import './login.scss';
import Button from './button.js';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../userSlice.js';

function Login() {
    const dispatch = useDispatch();
    const [buttonText, setButtonText] = useState('Register');
    const [pageName, setPageName] = useState('Welcome back!');
    const [pageText, setPageText] = useState('Login to your account');
    const [linkText, setLinkText] = useState('Don\'t have an account?');
    const [isLogin, setIsLogin] = useState(true);
    const [user, setUsers] = useState([]);
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
        axios.get('http://localhost:4000/api/users')
            .then(res => {
                const data = res.data;
                const user = data.find(user => user.firstName === username);
                if (user) {
                    bcrypt.compare(password, user.password)
                        .then((result) => {
                            if (result) {
                                console.log('Login successful');
                                const userId = user._id;
                                axios.get(`http://localhost:4000/api/users/${userId}`)
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
        const name = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            axios.post('http://localhost:4000/api/users/create',
                { firstName: name, lastName: name, email: email, password: hashedPassword })
                .then(res => {
                    if (res) {
                        const user = res.data;
                        console.log('Registering successful');
                        const userId = user._id;
                        console.log(userId);
                        axios.get(`http://localhost:4000/api/users/${userId}`)
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
                .catch (err => {
        console.log(err);
    });
} catch (error) {
    console.error('Error hashing password', error);
}

    };

/*axios.post('http://localhost:4000/api/users/create')
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });*/
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
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className="username" name="username" placeholder='Username' />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                <button type="submit" text="Register" onClick={submitted} className='button'><p className='buttonText'>Register</p></button>
            </form>
        )}
        <p className="loginLinkSection">{linkText} <span onClick={switchClick} className="loginLink">{buttonText}</span></p>
    </div>
);
}

export default Login;