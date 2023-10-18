import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {
  Dashboard,
  ViewWeatherScreen,
} from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:city" element={<ViewWeatherScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
