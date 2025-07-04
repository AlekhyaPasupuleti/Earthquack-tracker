export default function EarthquakeTable({ earthquakes, selectedId, setSelectedId }) {
  return (
    <div className="mt-5">
      <h3>⚠️ Earthquake Alerts</h3>

      {selectedId && (
        <button className="btn btn-secondary mb-2" onClick={() => setSelectedId(null)}>
          Clear Selected Event Filter
        </button>
      )}

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Place</th>
            <th>Magnitude</th>
            <th>Type</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {earthquakes.map((eq) => (
            <tr
              key={eq.id}
              onClick={() => setSelectedId(eq.id)}
              style={{
                cursor: "pointer",
                background: eq.id === selectedId ? "#f0f8ff" : "",
              }}
            >
              <td>{eq.properties.place}</td>
              <td>{eq.properties.mag}</td>
              <td>{eq.properties.type}</td>
              <td>{new Date(eq.properties.time).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
