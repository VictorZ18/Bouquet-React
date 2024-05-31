import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import '../views/App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Map(props) {
  const [venues, setVenues] = useState([]);
  const [supplier, setSupplier] = useState([]);

  axios
    .get("http://localhost:4000/api/venues")
    .then((res) => {
      setVenues(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  axios
    .get("http://localhost:4000/api/suppliers")
    .then((res) => {
      setSupplier(res.data);
    })
    .catch((err) => {
      console.log(err);
    });


  return (
    <div>
      <MapContainer center={[props.latitude, props.longitude]} zoom={13} scrollWheelZoom={false} className='map' key={props.keyId}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[props.latitude, props.longitude]}>
          <Popup>
            {props.name} <br /> {props.address}
          </Popup>
        </Marker>
      </MapContainer>

    </div>
  )
}

export default Map; 