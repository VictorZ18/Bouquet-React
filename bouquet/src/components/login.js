import React, { useState } from 'react';
import '../views/App.scss';
import './login.scss';
import Button from './button.js';
import axios from 'axios';

function Login() {
    const [buttonText, setButtonText] = useState('Register');
    const [isLogin, setIsLogin] = useState(true);
    const [users, setUsers] = useState([]);

    const switchClick = () => {
        setIsLogin(!isLogin);
        setButtonText(isLogin ? 'Login' : 'Register');
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
            {isLogin ? (
                <form className="loginForm">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="username" name="username" />
                    <Button type='submit' text="Login" />
                </form>
            ) : (
                <form className="registerForm">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="username" name="username" />
                    <label htmlFor="role">Role</label>
                    <select type="role" id="role" className="role" name="role">
                        <option value="organizer">Organizer</option>
                        <option value="guest">Guest</option>
                    </select>
                    <Button type='submit' text="Register" />
                </form>
            )}
            <button className="switch" onClick={switchClick}>{buttonText}</button>  
        </div>
    );
}

export default Login;