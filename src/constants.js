import CityData from "./cities.json";

export const API_KEY = process.env.REACT_APP_API_KEY;
export const ICON_BASE_URL = "https://openweathermap.org/img/wn/";
export const CITY_IDS = CityData.List.map((city) => city.CityCode);
export const COLORS = {
    lightBlue: "388ee7",
    purple: "6249cc",
    lightGreen: "40b681",
    brown: "de944e",
    red: "9c3a3a",
    darkBlue: "2f3a4b",
    darkGreen: "2f4b3a",
    darkBrown: "4b3a2f",
    darkRed: "4b2f2f",
    darkPurple: "4b2f4b",
  };
