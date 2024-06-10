import Button from '../components/button';
import './App.scss';
import './Welcome.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="welcome">
            <h1 className='welcomeText marginDouble'>Welcome to</h1>
            <img src="/media/Bouquet_logo.png" alt="Bouquet" className='logo' />
            <h2 className='welcomeText'>Where your wedding is in your hands.</h2>

            <div className='welcomeButton'>
                <p className='trigger'>Ready to join the adventure?</p>
                <Link to='/' className='registerLink'>
                    <Button text='Organize wedding' />
                </Link>
                <a href='/guestRegister' className='guestOption'>Or continue as a guest</a>
            </div>
        </div>
    );
}

export default Welcome;