import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

export default function MapComponent() {
  const position: LatLngExpression = [31.5, 34.47]; // Use LatLngExpression for type safety
  return (
    <MapContainer
      className="map"
      center={position}
      zoom={5}
      style={{ height: "400px", width: "100%", marginTop: "48px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // The attribution prop should be valid here
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>ارض العزة</Popup> {/* Popup text in Arabic */}
      </Marker>
    </MapContainer>
  );
}
