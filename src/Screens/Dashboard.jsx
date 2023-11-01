import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BgImage from "../Images/HeaderBG.jpg";
import Logo from "../Images/logo.png";
import Footer from "../Component/Footer";
import SearchBar from "../Component/SearchBar";
import WeatherCard from "../Component/WeatherCard";
import CityData from "../cities.json";
import axios from "axios";
import API_URL from "../apiHelper";
import { selectcolor,dateTimeformatter,geticonUrl } from "../functions";

function Dashboard() {
  const [isCardShown, setIsCardShown] = useState(CityData.List.map(() => true));
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // Function to fetch weather data
    const cachedData = JSON.parse(localStorage.getItem("cachedWeatherData"));   
    // Check if cached data exists and is not older than 5 minutes
    if (cachedData && Date.now() - cachedData.timestamp < 300000) {
      setWeatherData(cachedData.data);
    } else {
      // Fetch weather data
      axios({
        method: "GET",
        url: API_URL,
      })
        .then((res) => {
          const cachedData = {
            data: res.data.list,
            timestamp: Date.now(),
          };
          localStorage.setItem("cachedWeatherData", JSON.stringify(cachedData)); // set Cache data
          setWeatherData(res.data.list); // Set weather data
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="bg-cover bg-[#1f2128] min-h-screen flex flex-col">
      <div
      // Add a background image
        className="bg-cover bg-center h-[85vh] flex-grow relative"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="h-full flex flex-col justify-center text-white text-center">
          <div className="container mx-auto mt-[-300px]">
            <h1 className="text-4xl font-semibold mb-4">
              {/* logo and name */}
              <img src={Logo} alt="Logo" className="inline-block mr-2 h-12" />
              Weather App
            </h1>
          </div>
          <div className="mx-auto">
            {/* Search bar component */}
            <SearchBar />
          </div>
        </div>
      </div>
      {isCardShown && (
        <div className="mt-[-350px] z-10">
          <div className="flex flex-wrap justify-center">
            {weatherData.map(
              (weather, index) =>
                isCardShown[index] && (
                  <div key={index} className="s1:w-[34%]  p-6 ">
                    <div>
                      {/* Use the Link component to navigate to the /:index route */}
                      <Link to={`/${index}`} key={index}>
                        <WeatherCard
                          onClose={() => {
                            const newIsCardShown = [...isCardShown];
                            newIsCardShown[index] = false;
                            setIsCardShown(newIsCardShown);
                          }}
                          key={index}
                          city={weather.name}
                          country={weather.sys.country}
                          time={dateTimeformatter(weather.dt)}
                          temperature={Math.round(weather.main.temp)}
                          url={geticonUrl(weather.weather[0].icon)}
                          condition={weather.weather[0].main}
                          minTemp={weather.main.temp_min}
                          maxTemp={weather.main.temp_max}
                          pressure={weather.main.pressure}
                          humidity={weather.main.humidity}
                          visibility={weather.visibility}
                          windSpeed={weather.wind.speed}
                          windDirection={weather.wind.deg}
                          sunrise={dateTimeformatter(weather.sys.sunrise)}
                          sunset={dateTimeformatter(weather.sys.sunset)}
                          color={selectcolor(weather.main.temp)}
                        />
                      </Link>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Dashboard;
