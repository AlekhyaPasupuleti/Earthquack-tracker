import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const getColor = (mag) => {
  if (mag > 5) return "red";
  if (mag > 3) return "orange";
  return "green";
};

export default function MapView({ earthquakes }) {
  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {earthquakes.map((eq) => {
        const { mag, place, time, type } = eq.properties;
        const [lon, lat] = eq.geometry.coordinates;

        return (
          <CircleMarker
            key={eq.id}
            center={[lat, lon]}
            radius={mag * 1.5}
            pathOptions={{
              color: getColor(mag),
              className: mag > 5 ? "pulse-glow" : "",
            }}
          >
            <Tooltip direction="top" offset={[0, -10]} permanent>
              <span>{mag} | {type}</span>
            </Tooltip>
            <Popup>
              <strong>{place}</strong><br />
              Magnitude: <b>{mag}</b><br />
              Type: <b>{type}</b><br />
              Time: {new Date(time).toLocaleString()}
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
