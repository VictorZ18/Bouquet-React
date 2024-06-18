import React from "react";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";

function Mediaguest() {
    const user = useSelector((state) => state.user);
    console.log(user);
    return (
        <div>
            <h1>Media</h1>
            <Navbar />
        </div>
    );
}

export default Mediaguest;