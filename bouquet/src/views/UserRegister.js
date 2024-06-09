import "./App.scss";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import "./UserRegister.scss";
import Login from "../components/login";

const Register = () => {
    return (
        <div className="register">
            <div className="leftarrow">
                <Link to="/Welcome">
                    <img
                        className="back-arrow"
                        src={require("../icons/arrow-left.png")}
                        alt="arrow-right"
                    />
                </Link>
            </div>
            <Login />
        </div>
    );
};

export default Register;