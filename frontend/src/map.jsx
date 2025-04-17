import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState, useEffect } from "react";


const createIcon = () =>
  L.divIcon({
    html: `<div style="font-size: 24px;">📡</div>`,
    className: "custom-marker",
    iconSize: [30, 30],
  });

const InstallationMap = () => {
  const [locations, setLocations] = useState([]);

  
  useEffect(() => {
    const fetchLocations = async () => {
      const res = await fetch("http://localhost:3000/api/locations");
      const data = await res.json();
      setLocations(data); 
    };

    fetchLocations();
  }, []);

  return (
    <MapContainer center={[28.6139, 77.2090]} zoom={5} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.latitude, location.longitude]}
          icon={createIcon()}
        >
          <Popup>
            <strong>Sensor Location</strong>
            <br />
            City: {location.city}
            
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default InstallationMap;
