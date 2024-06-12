import "./Momentcreation.scss";
import "./App.scss";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import  {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Checklistpage = () => {
  const [wedding, setWedding] = useState({});
  const [selectedStartHour, setSelectedStartHour] = useState(null);
  const [selectedEndHour, setSelectedEndHour] = useState(null);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const { eventName } = useParams();
  console.log(user);
  useEffect(() => {
    axios.get(`${apiBaseUrl}/weddings`)
      .then(res => {
        console.log(res.data);
        const wedding = res.data.find(wedding => wedding.user_id === user.user._id);
        setWedding(wedding);
      })
  }, []);
  const handleStartHour = (e) => {
    setSelectedStartHour(e.target.value);
  }
  const handleEndHour = (e) => {
    setSelectedEndHour(e.target.value);
  }

  const submit = () => {
    const streetName = document.getElementById('streetName').value;
    const streetNumber = document.getElementById('streetNumber').value;
    const postcode = document.getElementById('postcode').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const start_hour = selectedStartHour;
    const end_hour = selectedEndHour;
    const description = document.getElementById('description').value;
    const parking = document.getElementById('parking').value;
    const extra = document.getElementById('extra').value;
    const name = eventName;
    console.log(streetName, streetNumber, postcode, city, country, start_hour, end_hour, description, parking, extra);
    var api_key = 'e2929cac460f4765a7e8088612e9dcdb';
    // reverse geocoding example (coordinates to address)
    //var latitude = '52.3877830';
    //var longitude = '9.7334394';
    //var query = latitude + ',' + longitude;
    var query = streetName + '.' + ' ' + streetNumber + "," + ' ' + postcode + ' ' + city + ',' + ' ' + country; //Zandpoortvest. 1, 2800 Mechelen, Belgium
    console.log(query);
    var api_url = 'https://api.opencagedata.com/geocode/v1/json'

    var request_url = api_url
      + '?'
      + 'key=' + api_key
      + '&q=' + encodeURIComponent(query)
      + '&pretty=1'
      + '&no_annotations=1';

    var request = new XMLHttpRequest();
    request.open('GET', request_url, true);
    request.onload = function () {
      if (request.status === 200) {
        // Success!
        var data = JSON.parse(request.responseText);
        if (data.results && data.results.length > 0) {
          var coordinates = data.results[0].geometry;
          console.log("Latitude:", coordinates.lat);
          console.log("Longitude:", coordinates.lng);
          axios.get(`${apiBaseUrl}/weddings`)
          axios.post(`${apiBaseUrl}/events/create`,
            {
              wedding_id: wedding._id,
              event_name: name,
              start_hour: start_hour,
              end_hour: end_hour,
              address_latitude: coordinates.lat,
              address_longitude: coordinates.lng,
              event_address: query,
              event_information: description,
              parking_address: parking,
              extra_info: extra
            })
            .then(res => {
              console.log(res);
              console.log(res.data);
              navigate('/Momentpage');
            })
        } else {
          console.log("No results found");
        }
      } else if (request.status <= 500) {
        console.log("unable to geocode! Response code: " + request.status);
        var data = JSON.parse(request.responseText);
        console.log('error msg: ' + data.status.message);
      } else {
        console.log("server error");
      }
    };
    request.onerror = function () {
      console.log("unable to connect to server");
    };
    request.send();
  }

  return (
    <div className="App ">
      <div className="leftarrow">
        <Link to="/Momentselection">
          <img
            className="back-arrow"
            src={require("../icons/arrow-white.png")}
            alt="arrow-right"
          />
        </Link>

      </div>
      <div className="cover">
        <img
          className="coverimg"
          src={require("../media/cityhall.png")}
          alt="event-cover"
        />
      </div>
      <div className="rectangle"></div>

      <div className="wrapper">
        <h1 className="titlePage eventInfo">{eventName}</h1>
        <h2 className="eventInfo">General information</h2>
        <form className="eventForm">
          <label htmlFor="streetName">Street name</label>
          <input type="text" id="streetName" className="streetName" name="streetName" placeholder='Street name' />
          <label htmlFor="streetNumber">Street number</label>
          <input type="text" id="streetNumber" className="streetNumber" name="streetNumber" placeholder='Street number' />
          <label htmlFor="postcode">Postcode</label>
          <input type="text" id="postcode" className="postcode" name="postcode" placeholder='Postcode' />
          <label htmlFor="city">City</label>
          <input type="text" id="city" className="city" name="city" placeholder='City' />
          <label htmlFor="country">Country</label>
          <input type="text" id="country" className="country" name="country" placeholder='Country' />
          <div className="grp">
            <select className="startHour" name="startHour" id="startHour"  onChange={handleStartHour}>
              <option value="">Start hour</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
            </select>
            <select className="endHour" name="endHour" id="endHour" onChange={handleEndHour}>
              <option value="">End hour</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
            </select>
          </div>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" className="description" name="description" placeholder='Description' />
        </form>

        <h2 className="eventInfo"> Practical information</h2>
        <form className="eventForm">
          <label htmlFor="parking">Parking address</label>
          <input type="text" id="parking" className="parking" name="parking" placeholder='Parking address' />
          <p className="alternative">
            If there is no official parking address, you can add a description on
            where to park for your guests.{" "}
          </p>
          <label htmlFor="extra">Extra info (dress code,...)</label>
          <input type="text" id="extra" className="extra" name="extra" placeholder='Extra info' />
        </form>
        <div className="contain">
          <p className="reminders">Assign supplier</p>
          <img
            className="arrow-down"
            src={require("../icons/arrow-down.png")}
            alt="arrow-right"
          />
        </div>
        <p className="text">
          Assigned supplier’s information will automatically be added to the
          practical information.
        </p>
          <div className="button" onClick={submit}>
            <p className="buttonText">Create event</p>
          </div>
      </div>
    </div>
  );
}

export default Checklistpage;
