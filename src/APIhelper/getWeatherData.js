import axios from "axios";
import { API_URL, API_KEY } from "../Constants/constants";
import CityData from "../cities.json";

const getWeatherData = async () => {
  const cachedData = JSON.parse(localStorage.getItem("cachedWeatherData"));

  // Check if cached data exists and is not older than 5 minutes
  if (cachedData && Date.now() - cachedData.timestamp < 300000) {
    return cachedData.data;
  } else {
    // Get city ids
    const CITY_IDS = (CityData.List.map((city) => city.CityCode).join(","));

    // Set parameters for API call
    const parameters = {
      id: CITY_IDS,
      units: "metric",
      appid: API_KEY,
    };

    const apiParameters = new URLSearchParams(parameters);

    // Fetch weather data
    axios
      .get(`${API_URL}?${apiParameters}`)
      .then((res) => {
        const cachedData = {
          data: res.data.list,
          timestamp: Date.now(),
        };
        localStorage.setItem("cachedWeatherData", JSON.stringify(cachedData)); // set Cache data
        return res.data.list;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  }
};

export default getWeatherData;
