import './CaterersPage.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/button.js';
import Map from '../components/Map.js';

function App() {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [caterers, setCaterers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [venues, setVenues] = useState([]);
  let { categoriesName, supplierName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true; // Track if the component is mounted

    axios.get("http://localhost:4000/api/reviews")
      .then((res) => {
        if (isMounted) setReviews(res.data);
      })
      .catch((err) => console.log(err));

    axios.get("http://localhost:4000/api/users")
      .then((res) => {
        if (isMounted) setUsers(res.data);
      })
      .catch((err) => console.log(err));

    axios.get("http://localhost:4000/api/suppliers")
      .then((res) => {
        if (isMounted) setSuppliers(res.data);
      })
      .catch((err) => console.log(err));

    axios.get("http://localhost:4000/api/caterers")
      .then((res) => {
        if (isMounted) setCaterers(res.data);
      })
      .catch((err) => console.log(err));

    axios.get("http://localhost:4000/api/categories")
      .then((res) => {
        if (isMounted) setCategories(res.data);
      })
      .catch((err) => console.log(err));

    axios.get("http://localhost:4000/api/venues")
      .then((res) => {
        if (isMounted) setVenues(res.data);
      })
      .catch((err) => console.log(err));

    return () => {
      isMounted = false; // Cleanup function to set isMounted to false when the component unmounts
    };
  }, []);

  return (
    <div className="App">
      <div className="image-container">
        <img className='back-arrow absolute' src={require('../icons/arrow-white.png')} alt="back" onClick={() => navigate(-1)} />
        <img className="supplierscards1" src={require('../media/chef (2).png')} alt="Caterer" />
        {suppliers.map((supplier) => {
          if (supplier.supplier_name === supplierName) {
            let specialities;
            let speciality;
            let map;
            if (categoriesName === "Caterers") {
              const caterer = caterers.find(caterer => caterer.supplier_id === supplier._id);
              if (caterer) {
                specialities = caterer.caterer_speciality.length === 1 ? "Speciality" : "Specialities";
                speciality = caterer.caterer_speciality;
              }
            }
            if (categoriesName === "Venues") {
              const venue = venues.find(venue => venue.supplier_id === supplier._id);
              if (venue) {
                specialities = "Location";
                speciality = venue.venue_address;
                map = <Map keyId={venue._id} name={supplierName} address={venue.venue_address} latitude={venue.venue_latitude} longitude={venue.venue_longitude} />;
              }
            }
            return (
              <div className="stroked-element1" key={supplier._id}>
                <h1 className="catererName"> {supplier.supplier_name} </h1>
                <div className='specialities'>
                  <h2>{specialities}</h2>
                  <p>{speciality}</p>
                  {map}
                </div>
              </div>
            );
          }
        })}

        <div className='catererDescription'>
          <p>Our restaurant offers catering services for your <br />wedding!
            <br />We offer Fajitas, Burritos and Tacos with several<br /> options and variations:<br /></p>
          <ul>
            <li>Vegetarian</li>
            <li>Vegan</li>
            <li>Beef</li>
            <li>Pork</li>
            <li>Chicken</li>
          </ul>
          We can serve up to 100 people with price ranges between 30€ to 1500€.
        </div>

        <div className='catererContact'>
          <h2>Contact information</h2>
          <p>+32 ... .. .. ..<br />
            lataqueria@restaurant.be
          </p>
          <p className='website'>LaTaqueria.be</p>
        </div>

        <div className='catererReviews'>
          <h2>Reviews
            <img className="groupstars" src={require('../media/groupstars.png')} alt="stars" />
          </h2>
          <p className='reviewLink'>Leave a review</p>
        </div>

        <div className='reviewsSlider'>
          {reviews.map((review) => {
            const reviewer = users.find(user => user._id === review.reviewer_id);
            const caterer = suppliers.find(supplier => supplier._id === review.caterer_id);
            if (caterer && caterer.supplier_name === "Salsa y maragaritas" && reviewer) {
              return (
                <div key={review._id} className="reviewCard">
                  <p className='reviewername'>{reviewer.firstName} {reviewer.lastName}
                    <img className="groupstars" src={require('../media/groupstars.png')} alt="stars" />
                  </p>
                  <p className='reviewText'>{review.review}</p>
                </div>
              );
            }
          })}
        </div>

        <div className='addSupplier'>
          <p className='bookDescription'>Once you've booked a supplier,
            click here to add it.
            To remove, click again.</p>
          <Button text="Book" width="100%" />
        </div>
      </div>
    </div>
  );
}

export default App;
