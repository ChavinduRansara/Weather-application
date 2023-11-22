import React, { useState, useEffect } from "react";
import ViewWeather from "../Component/ViewWeather";
import { useParams } from "react-router-dom";
import { dateTimeformatter,dateTimeformatterLive, geticonUrl, selectcolor } from "../Functions/functions";
import axios from "axios";
import CityData from "../cities.json"
import { API_KEY,API_URL } from "../Constants/constants";


function ViewWeatherScreen() {
  const id = useParams(); // Get the "id" parameter from the URL

  const [data,setData] = useState([])

  // Retrieve cached weather data from local storage
  // const cachedData = JSON.parse(localStorage.getItem("cachedWeatherData"));
  const CITY_IDS = (CityData.List.map((city) => city.CityCode).join(","));

  const parameters = {
    id: CITY_IDS,
    units: "metric",
    appid: API_KEY,
  };

  const apiParameters = new URLSearchParams(parameters);

  const fetchWeatherData = async () => {
    const weatherData = await axios.get(`${API_URL}?${apiParameters}`)
    console.log(weatherData.data.list[0])
    setData(weatherData.data.list)
  }

useEffect(()=>{
  fetchWeatherData()
  
},[])

  return (
    <div>
      {
        data && data.length > 0 ? (<>
        <ViewWeather
        city={data[id.city].name}
        country={data[id.city].sys.country}
        time={dateTimeformatterLive(data[id.city].sys.timezone)}
        temperature={Math.round(data[id.city].main.temp)}
        url={geticonUrl(data[id.city].weather[0].icon)}
        condition={data[id.city].weather[0].main}
        minTemp={data[id.city].main.temp_min}
        maxTemp={data[id.city].main.temp_max}
        pressure={data[id.city].main.pressure}
        humidity={data[id.city].main.humidity}
        visibility={data[id.city].visibility}
        windSpeed={data[id.city].wind.speed}
        windDirection={data[id.city].wind.deg}
        sunrise={dateTimeformatter(data[id.city].sys.sunrise,data[id.city].sys.timezone)}
        sunset={dateTimeformatter(data[id.city].sys.sunset,data[id.city].sys.timezone)}
        color={selectcolor(data[id.city].main.temp)}
      />
        </>):(<></>)
      }
      
    </div>
  );
}

export default ViewWeatherScreen;
