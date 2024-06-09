import React, { useState, useEffect } from 'react';
import MapLarge from '../components/mapLarge';
import { useNavigate } from 'react-router-dom';
import './App.scss';

function VenueMap() {
    const geocodeApiUrl = process.env.GEOCODE;
    const geocodeApiKey = process.env.GEOCODE_API_KEY;
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    console.log(geocodeApiKey, geocodeApiUrl, apiBaseUrl);
    const [inputValue, setInputValue] = useState('');
    const [cityQuery, setCityQuery] = useState('Mechelen');
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
    const [zoom, setZoom] = useState(7); 
    const api_key = 'e2929cac460f4765a7e8088612e9dcdb';
    const api_url = 'https://api.opencagedata.com/geocode/v1/json';
    const navigate = useNavigate();

    useEffect(() => {
        if (!cityQuery) return;

        const request_url = `${api_url}?key=${api_key}&q=${encodeURIComponent(cityQuery)}&pretty=1&no_annotations=1`;

        fetch(request_url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.results && data.results.length > 0) {
                    const coordinates = data.results[0].geometry;
                    console.log("Latitude:", coordinates.lat);
                    console.log("Longitude:", coordinates.lng);
                    setCoordinates({ lat: coordinates.lat, lng: coordinates.lng });
                    // Set zoom level based on your logic, for example:
                    setZoom(10); // Change zoom level to 10
                } else {
                    console.log("No results found");
                }
            })
            .catch(error => {
                console.error("Error fetching the geocoding data:", error);
            });
    }, [cityQuery]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setCityQuery(inputValue);
    };

    return (
        <div>
            <img className='back-arrow absolute' src={require('../icons/arrow-left.png')} alt="back" onClick={() => navigate(-1)} />
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={handleInputChange}
                    placeholder="Enter city name" 
                    className="search-city"
                />
                <button className="buttonSearch" type="submit">Search</button>
            </form>
            {coordinates.lat && coordinates.lng ? (
                <MapLarge locationLat={coordinates.lat} locationLng={coordinates.lng} zoom={zoom}/>
            ) : (
                <p>Loading map...</p>
            )}
        </div>
    );
}

export default VenueMap;
