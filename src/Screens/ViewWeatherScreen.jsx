import React from "react";
import ViewWeather from "../Component/ViewWeather";
import { useParams } from "react-router-dom";

function ViewWeatherScreen() {
  const id = useParams();

  const dateTimeformatter = (unixTime) => {
    let milliseconds = unixTime * 1000;
    let dateObject = new Date(milliseconds);

    const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
    const datOptions = { month: "short", day: "numeric" };
    let time = dateObject.toLocaleTimeString("en-US", timeOptions);
    let date = dateObject.toLocaleDateString("en-US", datOptions);

    return [date, time];
  };

  const iconBaseUrl = "https://openweathermap.org/img/wn/";
  const geticonUrl = (icon) => {
    return `${iconBaseUrl}${icon}.png`;
  };

  const colors = {
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
  const selectcolor = (temp) => {
    if (temp < 0) {
      return colors.darkBlue;
    } else if (temp >= 0 && temp < 5) {
      return colors.lightBlue;
    } else if (temp >= 5 && temp < 10) {
      return colors.darkPurple;
    } else if (temp >= 10 && temp < 15) {
      return colors.purple;
    } else if (temp >= 15 && temp < 20) {
      return colors.darkGreen;
    } else if (temp >= 20 && temp < 25) {
      return colors.lightGreen;
    } else if (temp >= 25 && temp < 30) {
      return colors.darkBrown;
    } else if (temp >= 30 && temp < 35) {
      return colors.brown;
    } else if (temp >= 35 && temp < 40) {
      return colors.darkRed;
    } else if (temp >= 40) {
      return colors.red;
    }
  };

  const cachedData = JSON.parse(localStorage.getItem("cachedWeatherData"));


  return (
    <div>
      <ViewWeather
        city={cachedData.data[id.city].name}
        country={cachedData.data[id.city].sys.country}
        time={dateTimeformatter(cachedData.data[id.city].dt)}
        temperature={Math.round(cachedData.data[id.city].main.temp)}
        url={geticonUrl(cachedData.data[id.city].weather[0].icon)}
        condition={cachedData.data[id.city].weather[0].main}
        minTemp={cachedData.data[id.city].main.temp_min}
        maxTemp={cachedData.data[id.city].main.temp_max}
        pressure={cachedData.data[id.city].main.pressure}
        humidity={cachedData.data[id.city].main.humidity}
        visibility={cachedData.data[id.city].visibility}
        windSpeed={cachedData.data[id.city].wind.speed}
        windDirection={cachedData.data[id.city].wind.deg}
        sunrise={dateTimeformatter(cachedData.data[id.city].sys.sunrise)}
        sunset={dateTimeformatter(cachedData.data[id.city].sys.sunset)}
        color={selectcolor(cachedData.data[id.city].main.temp)}
      />
    </div>
  );
}

export default ViewWeatherScreen;
