import "./CaterersPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button.js";

function App() {
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState([]);
  const [caterer, setCaterer] = useState([]);

  useEffect(() => {
    console.log("Inside useEffect");
    axios
      .get("http://localhost:4000/api/reviews")
      .then((res) => {
        setReviews(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:4000/api/users")
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:4000/api/caterers")
      .then((res) => {
        setCaterer(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <div className="image-container">
        <Link to="/CaterersList">
          <img
            className="back-arrow absolute"
            src={require("../icons/arrow-white.png")}
            alt="back"
          />
        </Link>
        <img
          className="supplierscards1"
          src={require("../media/chef (2).png")}
          alt="Caterer"
        />
        <div className="stroked-element1">
          <p className="supplier"></p>
          <h1 className="catererName"> La Taqueria </h1>
          <div className="specialities">
            <h2>Specialities</h2>
            <p>Mexican</p>
          </div>
          <div className="catererDescription">
            <p>
              Our restaurant offers catering services for your <br />
              wedding!
              <br />
              We offer Fajitas, Burritos and Tacos with several
              <br /> options and variations:
              <br />
            </p>
            <ul>
              <li>Vegetarian</li>
              <li>Vegan</li>
              <li>Beef</li>
              <li>Pork</li>
              <li>Chicken</li>
            </ul>
            We can serve up to 100 people with price ranges between 30€ to
            1500€.
          </div>

          <div className="catererContact">
            <h2>Contact information</h2>
            <p>
              +32 ... .. .. ..
              <br />
              lataqueria@restaurant.be
            </p>
            <p className="website">LaTaqueria.be</p>
          </div>

          <div className="catererReviews">
            <h2>
              Reviews
              <img
                className="groupstars"
                src={require("../media/groupstars.png")}
                alt="stars"
              />
            </h2>
            <p className="reviewLink">Leave a review</p>
          </div>

          <div className="reviewsSlider">
            {reviews.map((review) => {
              const reviewer = user.find(
                (user) => user._id === review.reviewer_id
              );
              const catererId = caterer.find(
                (caterer) => caterer._id === review.caterer_id
              );
              if (catererId) {
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
            })}
          </div>

          <div className="addSupplier">
            <p className="bookDescription">
              Once you've booked a supplier, click here to add it. To remove,
              click again.
            </p>
            <Button text="Book" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
