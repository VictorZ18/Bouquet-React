import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import '../views/App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Map() {
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
      {venues.map((venues) => {
        const supplierName = supplier.find(supplier => supplier._id === venues.supplier_id);
        if (supplierName) {
          return (
            <MapContainer center={[venues.venue_latitude, venues.venue_longitude]} zoom={13} scrollWheelZoom={false} className='map' key={venues._id}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[venues.venue_latitude, venues.venue_longitude]}>
                <Popup>
                  {supplierName.supplier_name} <br /> {venues.venue_address}
                </Popup>
              </Marker>
            </MapContainer>
          );
        }
      }
      )}

    </div>
  )
}

export default Map; 