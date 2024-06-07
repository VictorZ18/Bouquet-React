import "./App.scss";
import "./Suppliers.scss";
import Supp from "../components/suppliers";
import Navbar from "../components/navbar";
import SideMenu from "../components/sideNav";
import Button from "../components/button";
import { Link } from "react-router-dom";
//import React, { useEffect } from 'react';

function Suppliers() {
  /*useEffect(() => {
    const handleLoad = () => {
      let booksign = document.querySelector('.booksign');
      console.log(booksign);
    };
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  } , []);*/
  return (
    <div className="App">
      <SideMenu />
      <p className="title"> Choose below the suppliers you will be needing!</p>
      <Supp />
      <p className="footer">
        You can add later if you booked your own suppliers.
      </p>
      <Link to="/suppliersCategories">
      <div className="marginBottom">
        <Button text="Confirm" />
      </div>
      </Link>
      <Navbar />
    </div>
  );
}

export default Suppliers;
