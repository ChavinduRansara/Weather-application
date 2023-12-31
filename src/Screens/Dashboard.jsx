import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import BgImage from "../Images/HeaderBG.jpg";
import Logo from "../Images/logo.png";
import Footer from "../Component/Footer";
import SearchBar from "../Component/SearchBar";
import WeatherCard from "../Component/WeatherCard";
import CityData from "../cities.json";
import getWeatherData from "../APIhelper/getWeatherData";
import { selectcolor,dateTimeformatter,dateTimeformatterLive,geticonUrl } from "../Functions/functions";

function Dashboard() {
  const [isCardShown, setIsCardShown] = useState(CityData.List.map(() => true));
  const [weatherData, setWeatherData] = useState([]);

  // Fetch weather data from the API
  const fetchWeatherData = useCallback(async () => {
    setWeatherData(await getWeatherData());
  },[])

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

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
          {console.log(weatherData)}
            {weatherData.map(
              (weather, index) =>
                isCardShown[index] && (
                  <div key={index} className="s1:w-[34%]  p-6 ">
                    <div>
                      {console.log(weather)}
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
                          time={dateTimeformatterLive(weather.sys.timezone)}
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
                          sunrise={dateTimeformatter(weather.sys.sunrise,weather.sys.timezone)}
                          sunset={dateTimeformatter(weather.sys.sunset,weather.sys.timezone)}
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
