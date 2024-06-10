import "./App.scss";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios";

function GuestRegister() {
    const [guests, setGuests] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [matchingGuest, setMatchingGuest] = useState(null);
    const user = useSelector((state) => state.user);
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

    useEffect(() => {
        axios.get(`${apiBaseUrl}/guests`)
            .then((res) => {
                setGuests(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [apiBaseUrl]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);

        // Find the matching guest
        const match = guests.find(guest =>
            guest.email.toLowerCase() === inputValue.toLowerCase()
        );
        setMatchingGuest(match);
    };

    const createGuest = async (e) => {
        e.preventDefault();
        const firstName = matchingGuest.firstName;
        const lastName = matchingGuest.lastName;
        const email = matchingGuest.email;
    };
            


    return (
        <div className="guestRegister">
            <h1 className='welcomeText marginDouble'>Please select your name</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
            {submitted && matchingGuest && (
                <div className="confirmation">
                    <h2>Guest Found:</h2>
                    <p>{matchingGuest.firstName} {matchingGuest.lastName}</p>
                    <p>Is this you?</p>
                    <div className="button" onClick={createGuest}>
                        <p className="buttonText">Yes</p>
                    </div>
                </div>
            )}
            {submitted && !matchingGuest && (
                <div>
                    <h2>No matching guest found.</h2>
                </div>
            )}
        </div>
    );
}

export default GuestRegister;
