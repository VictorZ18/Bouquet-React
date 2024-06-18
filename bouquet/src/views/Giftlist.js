import React from "react";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";

function Giftlist() {
    const user = useSelector((state) => state.user);
    return (
        <div>
            <h1>Giftlist</h1>
            <Navbar />
        </div>
    );
}

export default Giftlist;