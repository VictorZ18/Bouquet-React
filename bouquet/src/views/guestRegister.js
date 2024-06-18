import "./App.scss";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { setUser } from "../userSlice";
import { setWedding } from "../weddingSlice";
import { useDispatch } from "react-redux";

function GuestRegister() {
    const [guests, setGuests] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [matchingGuest, setMatchingGuest] = useState(null);
    const [event, setEvent] = useState(null);
    const [guestlist, setGuestlist] = useState([]);
    const user = useSelector((state) => state.user);
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const { weddingId, guestmail } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${apiBaseUrl}/events`)
            .then((res) => {
                const event = res.data.filter(event => event.wedding_id === weddingId);
                setEvent(event);
                if (event) {
                    axios.get(`${apiBaseUrl}/guestlist`)
                        .then((res) => {
                            const guestlist = res.data.filter(guest => event.map(e => e._id).includes(guest.event_id));
                            setGuests(guestlist);
                            if (guestlist) {
                                axios.get(`${apiBaseUrl}/guests`)
                                    .then((res) => {
                                        const guests = res.data.filter(guest => guestlist.map(g => g._id).includes(guest.guestlistId));
                                        setGuests(guests);
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    });
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [apiBaseUrl]);

    useEffect(() => {
        if (guestmail) {
            setSubmitted(true);

            // Find the matching guest
            const match = guests.find(guest =>
                guest.email === guestmail
            );
            setMatchingGuest(match);
        }
    }, [guestmail, guests, inputValue]);

    const createGuest = async (e) => {
        e.preventDefault();
        const hashedPassword = await bcrypt.hash(inputPassword, 10);
        axios.post(`${apiBaseUrl}/users/create`, {
            firstName: matchingGuest.firstName,
            lastName: matchingGuest.lastName,
            email: matchingGuest.email,
            password: hashedPassword,
            role: "guest",
            weddingId: weddingId
        })
            .then((res) => {
                console.log(res);
                const guest = res.data;
                const userId = guest._id;
                console.log(userId);
                axios.get(`${apiBaseUrl}/users/${userId}`)
                    .then(response => {
                        console.log(response.data);
                        const fetchedUser = response.data;
                        axios.get(`${apiBaseUrl}/weddings/${weddingId}`)
                            .then(res => {
                                console.log(res.data);
                                const fetchedWedding = res.data;
                                dispatch(setUser(fetchedUser)); 
                                dispatch(setWedding(fetchedWedding));
                                navigate(`/homeguest`);
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [inputPassword, setInputPassword] = useState('');
    const handlePassword = (event) => {
        setInputPassword(event.target.value);
    };

    const showPass = (event) => {
        const passwordInput = document.querySelector('.confirmGuest');
        passwordInput.classList.add('show');
    }


    return (
        <div className="guestRegister">
            {submitted && matchingGuest && (
                <div className="confirmation">
                    <h2>Guest Found:</h2>
                    <p>{matchingGuest.firstName} {matchingGuest.lastName}</p>
                    <p>Is this you?</p>
                    <div className="button" onClick={showPass}>
                        <p className="buttonText">Yes</p>
                    </div>
                    <p>If not, please click here:</p>
                    <form className="confirmGuest">
                        <input
                            type="password"
                            placeholder="Create your password"
                            value={inputPassword}
                            onChange={handlePassword}
                        />
                        <div onClick={createGuest}>
                            <Button
                                text="Create"
                            />
                        </div>
                    </form>
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
