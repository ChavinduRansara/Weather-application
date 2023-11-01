import { API_KEY,CITY_IDS } from "./constants";

const API_URL = `https://api.openweathermap.org/data/2.5/group?id=${CITY_IDS}&units=metric&appid=${API_KEY}`;

export default API_URL;