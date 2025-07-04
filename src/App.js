import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import MapView from "./components/MapView";
import EarthquakeTable from "./components/EarthquakeTable";

const USGS_API =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=100";

function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [minMag, setMinMag] = useState(0);
  const [eventType, setEventType] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch(USGS_API)
      .then((res) => res.json())
      .then((data) => setEarthquakes(data.features));
  }, []);

  const filteredQuakes = earthquakes.filter((eq) => {
    const { mag, type } = eq.properties;
    const matches = mag >= minMag && (eventType === "" || type === eventType);
    const isSelected = !selectedId || eq.id === selectedId;
    return matches && isSelected;
  });

  return (
    <div className="container-fluid p-3">
      <h1 className="text-center mb-4 text-primary">🌍 Earthquake Tracker</h1>

      <Filters
        minMag={minMag}
        setMinMag={setMinMag}
        eventType={eventType}
        setEventType={setEventType}
      />

      <MapView earthquakes={filteredQuakes} />

      <EarthquakeTable
        earthquakes={filteredQuakes}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </div>
  );
}

export default App;
