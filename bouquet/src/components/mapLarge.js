import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../views/App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MapLarge(props) {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [venues, setVenues] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [key, setKey] = useState(0); // Key to force re-render of MapContainer

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/venues`)
      .then((res) => {
        setVenues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${apiBaseUrl}/suppliers`)
      .then((res) => {
        setSupplier(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  useEffect(() => {
    // Increment the key to force re-render of MapContainer
    setKey(prevKey => prevKey + 1);
  }, [props.locationLat, props.locationLng]); // Re-run effect whenever coordinates change

  if (supplier.length > 0 && venues.length > 0) {
    return (
      <div>
        <MapContainer key={key} center={[props.locationLat, props.locationLng]} zoom={props.zoom} scrollWheelZoom={false} className='mapLarge'>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {venues.map((venue) => {
            const supplierName = supplier.find(supplier => supplier._id === venue.supplier_id);
            return (
              <Marker position={[venue.venue_latitude, venue.venue_longitude]} key={venue._id}>
                <Popup>
                  <Link to={`/CaterersPage/Venues/${supplierName.supplier_name}`}>
                    {supplierName.supplier_name} <br /> {venue.venue_address}
                  </Link>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    )
  } else {
    // Render loading indicator or placeholder while data is being fetched
    return <p>Loading...</p>;
  }
}

export default MapLarge;
