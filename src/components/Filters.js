export default function Filters({ minMag, setMinMag, eventType, setEventType }) {
  return (
    <div className="row mb-4">
      <div className="col-md-6">
        <label className="form-label">Minimum Magnitude</label>
        <input
          type="number"
          className="form-control"
          min="0"
          step="0.1"
          value={minMag}
          onChange={(e) => setMinMag(Number(e.target.value))}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Event Type</label>
        <select
          className="form-select"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        >
          <option value="">All</option>
          <option value="earthquake">Earthquake</option>
          <option value="quarry blast">Quarry Blast</option>
          <option value="explosion">Explosion</option>
        </select>
      </div>
    </div>
  );
}
