import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import '../views/App.scss';

function Map(props) {
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