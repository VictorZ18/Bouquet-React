import React from 'react';
import "./CaterersList.scss";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import media from "../media/chef.png";
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.user);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [suppliers, setSuppliers] = useState([]);
  const [caterers, setCaterers] = useState([]);
  const [venues, setVenues] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [favourites, setFavourites] = useState({});
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
    axios.get(`${apiBaseUrl}/venues`)
      .then(res => {
        setVenues(res.data);
      })
      .catch(err => {
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

    axios
      .get(`${apiBaseUrl}/favourites?user_id=${user.user._id}`)
      .then((res) => {
        const favouriteSuppliers = res.data.reduce((acc, favourite) => {
          acc[favourite.supplier_id] = true;
          return acc;
        }, {});
        setFavourites(favouriteSuppliers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
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
  }, [suppliers, reviews]);

  const toggleFavourite = (supplierId) => {
    const isFavourite = favourites[supplierId];
    if (isFavourite) {
      axios
        .delete(`${apiBaseUrl}/favourites`, {
          data: {
            user_id: user.user._id,
            supplier_id: supplierId,
          },
        })
        .then((res) => {
          setFavourites((prevFavourites) => ({
            ...prevFavourites,
            [supplierId]: false,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(`${apiBaseUrl}/favourites/create`, {
          user_id: user.user._id,
          supplier_id: supplierId,
        })
        .then((res) => {
          setFavourites((prevFavourites) => ({
            ...prevFavourites,
            [supplierId]: true,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const getPriceSigns = (price) => {
    return '€'.repeat(price);
  };

  const mapView = document.querySelector('.mapView');
  if (mapView) {
    if (categoriesName === 'Venues') {
      document.querySelector('.mapView').style.display = 'block';
    } else {
      document.querySelector('.mapView').style.display = 'none';
    }
  };
  let extraInfo = "Mexican";

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
          if (categoriesName === 'Venues') {
            const venue = venues.find(venue => venue.supplier_id === supplier._id);
            if (venue) {
              extraInfo = venue.venue_address;
              if (venue.venue_address.length > 20) {
                extraInfo = venue.venue_address.substring(0, 20) + '...';
              }
            }
          } else if (categoriesName === 'Photographers') {
            extraInfo = "";
          } else if (categoriesName === 'Caterers') {
            const caterer = caterers.find(caterer => caterer.supplier_id === supplier._id);
            if (caterer) {
              extraInfo = caterer.caterer_speciality;
              if (caterer.caterer_speciality.length > 1) {
                extraInfo = caterer.caterer_speciality[0] + " - " + caterer.caterer_speciality[1]
              } else {
                extraInfo = caterer.caterer_speciality
              }
            }
          } else if (categoriesName === 'Music') {
            extraInfo = "";
          } else if (categoriesName === 'Florists') {
            extraInfo = "";
          } else if (categoriesName === 'Transport') {
            extraInfo = "";
          } else if (categoriesName === 'Decorations') {
            extraInfo = "";
          }
          const category = categories.find(category => category.category_name === categoriesName);
          if (category && supplier.categories_id === category._id) {
            return (
              <div key={supplier._id} className="card">
                <Link to={`/CaterersPage/${categoriesName}/${supplier.supplier_name}`}>
                  <img className="cardImage" src={media} alt={supplier.supplier_name} />
                </Link>
                <div className="card_description">
                  <div className="card_info">
                    <Link to={`/CaterersPage/${categoriesName}/${supplier.supplier_name}`}>
                      <p className="cardName">{supplier.supplier_name}</p>
                    </Link>
                    <img
                      className='favourite'
                      src={favourites[supplier._id] ? require('../media/Star_colored.png') : require('../media/Star.png')}
                      alt='favourite'
                      onClick={() => toggleFavourite(supplier._id)}
                    />
                  </div>
                  <Link to={`/CaterersPage/${categoriesName}/${supplier.supplier_name}`}>
                    <div className="card_info">
                      <p className="cardExtra">{extraInfo}</p>
                      <p className="cardPrice">{getPriceSigns(supplier.supplier_price)}</p>
                    </div>
                    <p className="cardReview">{supplier.supplier_review_number} reviews</p>
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
      <p className='plus-info'>Others:</p>
      <div className="slider-container">
        {suppliers.map((supplier) => {
          const category = categories.find(category => category.category_name === categoriesName);
          if (category && supplier.categories_id === category._id) {
            return (
              <div key={supplier._id} className="card">
                <Link to={`/CaterersPage/${categoriesName}/${supplier.supplier_name}`}>
                  <img className="cardImage" src={media} alt='supplier' />
                  <div className="card_description">
                    <div className="card_info">
                      <p className="cardName">{supplier.supplier_name}</p>
                      <p className="cardPrice">{getPriceSigns(supplier.supplier_price)}</p>
                    </div>
                    <p className="cardReview">{supplier.supplier_review_number} reviews</p>
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
