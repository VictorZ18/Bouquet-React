import "@stripe/stripe-js";
import "./Paymentcheckout.scss";
import React from "react";
import { Link } from "react-router-dom";

import Checkout from "../components/Checkout";

export default function Paymentcheckout() {
  return (
    <div className="App">
      <Link to="/Guestlist">
        <img
          className="back-arrow"
          src={require("../icons/arrow-left.png")}
          alt="arrow-right"
        />
      </Link>
      <Checkout />
    </div>
  );
}
