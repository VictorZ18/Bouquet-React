import React from "react";
import ImageSlider from "../components/image-slider";
import "./CaterersList.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import media from "../media/chef.png";

function App() {
  const [caterers, setCaterers] = useState([]);

  useEffect(() => {
    console.log("Inside useEffect");
    axios
      .get("http://localhost:4000/api/caterers")
      .then((res) => {
        setCaterers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Link to="/SuppliersCategories">
        <img
          className="back-arrow"
          src={require("../icons/arrow-left.png")}
          alt="arrow"
        />
      </Link>
      <div className="options">
        <h1 className="titlePage">Caterers </h1>
        <p className="filters">Filters</p>
      </div>
      <h2 className="plus-info">Matches for you:</h2>
      <Link to="/CaterersPage">
        <div className="slider-container">
          {caterers.map((caterer) => {
            if (caterer.caterer_speciality === "Mexican") {
              return (
                <div key={caterer._id} className="card">
                  <img className="cardImage" src={media} alt="caterer" />
                  <div className="card_description">
                    <div className="card_info">
                      <p className="cardName">{caterer.caterer_name}</p>
                      <p className="cardPrice">{caterer.caterer_price}</p>
                    </div>
                    <p className="cardSpeciality">
                      {caterer.caterer_speciality}
                    </p>
                    <p className="cardReview">
                      {caterer.caterer_review_number} reviews
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </Link>
      <p className="plus-info">Others:</p>
      <div className="slider-container">
        {caterers.map((caterer) => {
          if (caterer.caterer_speciality !== "Mexican") {
            return (
              <div key={caterer._id} className="card">
                <img className="cardImage" src={media} alt="caterer" />
                <div className="card_description">
                  <div className="card_info">
                    <p className="cardName">{caterer.caterer_name}</p>
                    <p className="cardPrice">{caterer.caterer_price}</p>
                  </div>
                  <p className="cardSpeciality">{caterer.caterer_speciality}</p>
                  <p className="cardReview">
                    {caterer.caterer_review_number} reviews
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
