# 🌍 Earthquake Tracker

A real-time earthquake monitoring dashboard that fetches and visualizes seismic activity using the [USGS Earthquake API](https://earthquake.usgs.gov/fdsnws/event/1/). This React-based app displays earthquake data on a map along with alerts and detailed statistics.

## 🚀 Features

- 🌐 Real-time data fetched from the USGS Earthquake API
- 🗺️ Interactive map showing earthquake locations
- 📋 List view of recent events with magnitude and region
- 🔎 Filtering by magnitude or region (optional)
- 📱 Responsive UI

## 🛠 Tech Stack

- **Frontend**: React.js, Leaflet.js, TypeScript
- **Styling**: CSS / TailwindCSS (if added)
- **API**: [USGS Earthquake GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

## 📦 Project Structure

Earthquack-tracker-main/
├── public/ # Static assets
├── src/ # Source code
│ ├── components/ # React components (Map, AlertList, etc.)
│ ├── App.tsx # Root component
│ └── ...
├── package.json
└── README.md


## 🧪 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Earthquack-tracker.git
cd Earthquack-tracker-main
npm install
npm start
The app will be available at http://localhost:3000

🌐 API Source
This app pulls live earthquake data from:
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson
