import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Dashboard,
  ViewWeatherScreen,
} from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Define the Dashboard component for the root path */}
        <Route path="/:city" element={<ViewWeatherScreen />} /> {/* Define the ViewWeatherScreen component for paths with a city parameter */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
