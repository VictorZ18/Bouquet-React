import React from 'react';
import "./CaterersList.scss";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import media from "../media/chef.png";
import MapLarge from '../components/mapLarge';
import * as buffer from 'buffer';
import { encode } from 'js-base64';

function App() {

  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [suppliers, setSuppliers] = useState([]);
  const [caterers, setCaterers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState([]);
  let { categoriesName } = useParams();

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/suppliers`)
      .then((res) => {
        setSuppliers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${apiBaseUrl}/caterers`)
      .then((res) => {
        setCaterers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${apiBaseUrl}/reviews`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${apiBaseUrl}/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  if (suppliers.length > 0) {
    for (let i = 0; i < suppliers.length; i++) {
      if (suppliers[i].supplier_price == 1) {
        suppliers[i].supplier_price = "€";
      } else if (suppliers[i].supplier_price == 2) {
        suppliers[i].supplier_price = "€€";
      } else if (suppliers[i].supplier_price == 3) {
        suppliers[i].supplier_price = "€€€";
      }
    }
  };
  if (reviews.length > 0 && suppliers.length > 0) {
    const reviewCounts = {};
    for (let i = 0; i < reviews.length; i++) {
      const catererId = reviews[i].caterer_id;
      reviewCounts[catererId] = (reviewCounts[catererId] || 0) + 1;
    }
    for (let j = 0; j < suppliers.length; j++) {
      const supplierId = suppliers[j]._id;
      suppliers[j].supplier_review_number = reviewCounts[supplierId] || 0;
    }
  }

  /* const caterer = caterers.find(caterer => caterer.supplier_id === supplier._id);
           if(caterer){
             if (!caterer.caterer_speciality.includes("Mexican")) {
             }
           }
   */
  return (
    <div className="App">
      <Link to="/SuppliersCategories">
        <img
          className="back-arrow"
          src={require("../icons/arrow-left.png")}
          alt="arrow"
        />
      </Link>
      <div className='options'>
        <Link to="/VenueMap">
          <p className='mapView'>See on map</p>
        </Link>
        <p className='filters'>Filters</p>
      </div>
      <h2 className='plus-info'>Matches for you:</h2>
      <div className="slider-container">
        {suppliers.map((supplier) => {
          const category = categories.find(category => category.category_name === categoriesName);
          if (category) {
            if (supplier.categories_id === category._id) {
              return (
                <div key={supplier._id} className="card">
                  <Link to={`/CaterersPage/${categoriesName}/${supplier.supplier_name}`}>
                  <img src={supplier.supplier_picture} alt={supplier.supplier_name} />
                    <div className="card_description">
                      <div className="card_info">
                        <p className="cardName">{supplier.supplier_name}</p>
                        <p className="cardPrice">{supplier.supplier_price}</p>
                      </div>
                      <p className="cardReview">{supplier.supplier_review_number} reviews</p>
                    </div>
                  </Link>
                </div>
              );
            }
          }
        })}
      </div>
      <p className='plus-info'>Others:</p>
      <div className="slider-container">
        {suppliers.map((supplier) => {
          const category = categories.find(category => category.category_name === categoriesName);
          if (category) {
            if (supplier.categories_id === category._id) {
              return (
                <div key={supplier._id} className="card">
                  <Link to={`/CaterersPage/${categoriesName}/${supplier.supplier_name}`}>
                    <img className="cardImage" src={media} alt='supplier' />
                    <div className="card_description">
                      <div className="card_info">
                        <p className="cardName">{supplier.supplier_name}</p>
                        <p className="cardPrice">{supplier.supplier_price}</p>
                      </div>
                      <p className="cardReview">{supplier.supplier_review_number} reviews</p>
                    </div>
                  </Link>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
}

export default App;
