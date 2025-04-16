import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const InstallationMap = () => {
  return (
    <MapContainer center={[28.6139, 77.2090]} zoom={5} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default InstallationMap;
