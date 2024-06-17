import './CaterersPage.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button.js';
import { useParams } from 'react-router-dom';
import Map from '../components/Map.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [caterers, setCaterer] = useState([]);
  const [supplierId, setSupplierId] = useState([]);
  const [categories, setCategory] = useState([]);
  const [booked, setBooked] = useState([]);
  const [venues, setVenues] = useState([]);
  let { categoriesName } = useParams();
  let { supplierName } = useParams();
  const userLogged = useSelector(state => state.user);

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/reviews`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${apiBaseUrl}/users`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${apiBaseUrl}/suppliers`)
      .then((res) => {
        setSupplier(res.data);
        res.data.map((supplier) => {
          if (supplier.supplier_name === supplierName) {
            setSupplierId(supplier._id);
          }
        }
        );
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${apiBaseUrl}/caterers`)
      .then((res) => {
        setCaterer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${apiBaseUrl}/categories`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${apiBaseUrl}/venues`)
      .then((res) => {
        setVenues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get(`${apiBaseUrl}/booked?user_id=${userLogged.user._id}`)
      .then((res) => {
        const bookedSuppliers = res.data.reduce((acc, booked) => {
          acc[booked.supplier_id] = true;
          return acc;
        }, {});
        setBooked(bookedSuppliers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();

  const toggleBooked = () => {
    const isBooked = booked[supplierId];
    if (isBooked) {
      axios
        .delete(`${apiBaseUrl}/booked`, {
          data: {
            user_id: userLogged.user._id,
            supplier_id: supplierId,
          },
        })
        .then((res) => {
          setBooked((prevBooked) => ({
            ...prevBooked,
            [supplierId]: false,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(`${apiBaseUrl}/booked/create`, {
          user_id: userLogged.user._id,
          supplier_id: supplierId,
        })
        .then((res) => {
          setBooked((prevBooked) => ({
            ...prevBooked,
            [supplierId]: true,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="App">
      <div className="image-container">
        <img className='back-arrow absolute' src={require('../icons/arrow-white.png')} alt="back" onClick={() => navigate(-1)} />
        <img className="supplierscards1" src={require('../media/chef (2).png')} alt="Caterer" />
        {supplier.map((supplier) => {
          if (supplier.supplier_name === supplierName) {
            let specialities
            let speciality
            let map
            if (categoriesName === "Caterers") {
              const caterer = caterers.find(caterer => caterer.supplier_id === supplier._id);
              if (caterer) {
                if (caterer.caterer_speciality.length = 1) {
                  specialities = "Speciality"
                } else if (caterer.caterer_speciality.length > 1) {
                  specialities = "Specialities"
                }
                console.log(caterer);
                speciality = caterer.caterer_speciality
              }
            }
            if (categoriesName === "Venues") {
              const venue = venues.find(venue => venue.supplier_id === supplier._id);
              if (venue) {
                specialities = "Location"
                speciality = venue.venue_address
                map = <Map keyId={venue._id} name={supplierName} address={venue.venue_address} latitude={venue.venue_latitude} longitude={venue.venue_longitude} />
              }
            }
            return (
              <div className="stroked-element1" key={supplier._id}><p className='supplier'></p>
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
            const reviewer = user.find(user => user._id === review.reviewer_id);
            const catererId = supplier.find(supplier => supplier._id === review.caterer_id);
            if (catererId) {
              if (catererId.supplier_name === "Salsa y maragaritas") {
                if (reviewer) {
                  return (
                    <div key={review._id} className="reviewCard">
                      <p className="reviewername">
                        {reviewer.firstName} {reviewer.lastName}
                        <img
                          className="groupstars"
                          src={require("../media/groupstars.png")}
                          alt="stars"
                        />
                      </p>
                      <p className="reviewText">{review.review}</p>
                    </div>
                  );
                }
              }
            }
          })}
        </div>


        <div className='addSupplier'>
          <p className='bookDescription'>Once you've booked a supplier,
            click here to add it.
            To remove, click again.</p>
          <div onClick={toggleBooked}>
            <Button text={booked[supplierId] ? 'Remove' : 'Book'} />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
