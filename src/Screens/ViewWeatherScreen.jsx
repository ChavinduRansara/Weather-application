import React from "react";
import ViewWeather from "../Component/ViewWeather";
import { useParams } from "react-router-dom";
import { dateTimeformatter, geticonUrl, selectcolor } from "../functions";

function ViewWeatherScreen() {
  const id = useParams(); // Get the "id" parameter from the URL

  // Retrieve cached weather data from local storage
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
