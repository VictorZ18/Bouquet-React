import React from "react";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";

function MessagesGuest() {
    const user = useSelector((state) => state.user);
    const wedding = useSelector((state) => state.wedding);
    
    return (
        <div>
            <h1>Messages</h1>
        <Navbar />
        </div>
    );
}

export default MessagesGuest;