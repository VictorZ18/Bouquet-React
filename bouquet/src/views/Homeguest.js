import './App.scss';
import Clock from "../components/clock";
import Navbar from '../components/navbar';
import SideMenu from '../components/sideNav';
import WeddingHeader from '../components/weddingHeader';
import CouplePic from '../media/hannah-olinger-eNZayb-kkvE-unsplash.jpg';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Programdetails from '../components/programinfo';

function Homeguest() {
    const user = useSelector((state) => state.user);
    const wedding = useSelector((state) => state.wedding);
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const [days, setDays] = useState(0);
    const [organizer, setOrganizer] = useState({});
    const [guest, setGuest] = useState({});
    const [guestlist, setGuestlist] = useState({});
    const [event, setEvent] = useState({});

    axios.get(`${apiBaseUrl}/weddings/${wedding.wedding._id}`)
        .then(res => {
            const wedding = res.data;
            const weddingDate = new Date(wedding.wedding_date);
            const today = new Date();
            const timeDiff = weddingDate - today;
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            setDays(days);
        });

    useEffect(() => {
        axios.get(`${apiBaseUrl}/users/${wedding.wedding.user_id}`)
            .then(res => {
                setOrganizer(res.data);
            });
    }, [apiBaseUrl]);

    useEffect(() => {
        axios.get(`${apiBaseUrl}/guests`)
            .then(res => {
                const guests = res.data;
                const guest = guests.find(guest => guest.email === user.user.email);
                setGuest(guest);
                axios.get(`${apiBaseUrl}/guestlist`)
                    .then(res => {
                        const guestlists = res.data;
                        const guestlist = guestlists.find(guestlist => guestlist._id === guest.guestlistId);
                        setGuestlist(guestlist);
                        axios.get(`${apiBaseUrl}/events`)
                            .then(res => {
                                const events = res.data;
                                const event = events.find(event => event._id === guestlist.event_id);
                                setEvent(event);
                            });
                    });
            }
            );
    }, []);

    const deadline = new Date(Date.parse(new Date()) + days * 24 * 60 * 60 * 1000);

    const closeRectangle = () => {
        const rectangle = document.querySelector(".rectangle");
        const arrow = document.querySelector(".arrow-down");
        const title = document.querySelector(".titlePage");
        if (rectangle) {
            rectangle.classList.toggle("lower");
            arrow.classList.toggle("arrow-up");
            title.classList.toggle("titleLowMargin");
        }
    }

    return (
        <div className="App">
            <div className="imageContainer">
                <img src={CouplePic} alt="couple" className="couplePic" />
            </div>
            <header className="App-header">
                <WeddingHeader userName={organizer.firstName} />
            </header>
            <Clock countdown={deadline} />
            <div className="rectangle lower">
                <img src={require("../icons/arrow-down.png")} alt="arrow-down" className="arrow-down arrow-up" onClick={closeRectangle} />
                <div className="wrapper pageBottom">
                    <h1 className="titlePage titleMargin titleLowMargin">Program</h1>
                    <div className="todoContainer">
                        <Programdetails
                            name={event.event_name}
                            address={event.event_address}
                            start={event.start_hour}
                            end={event.end_hour}
                        />
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    );
}

export default Homeguest;


