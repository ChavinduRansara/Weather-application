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

    try {
      // Fetch weather data
      const response = await axios.get(`${API_URL}?${apiParameters}`);

      const newData = {
        data: response.data.list,
        timestamp: Date.now(),
      };

      localStorage.setItem("cachedWeatherData", JSON.stringify(newData)); // set Cache data

      return newData.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
};

export default getWeatherData;
