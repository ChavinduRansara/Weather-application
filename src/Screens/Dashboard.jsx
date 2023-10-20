import React, { useState, useEffect, useHistory } from "react";
import { Link } from "react-router-dom";
import BgImage from "../Images/HeaderBG.jpg";
import Logo from "../Images/logo.png";
import Footer from "../Component/Footer";
import SearchBar from "../Component/SearchBar";
import WeatherCard from "../Component/WeatherCard";
import CityData from "../cities.json";
import axios from "axios";

function Dashboard() {
  const [isCardShown, setIsCardShown] = useState(CityData.List.map(() => true));
  const [weatherData, setWeatherData] = useState([]);

  let cityIds = CityData.List.map((city) => city.CityCode);
  console.log(cityIds);

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

  const q = [1248991, 1850147];

  useEffect(() => {
    const cachedData = JSON.parse(localStorage.getItem("cachedWeatherData"));
    if (cachedData && Date.now() - cachedData.timestamp < 300000) {
      setWeatherData(cachedData.data);
    } else {
      axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/group?id=${cityIds}&units=metric&appid=de90e2d59486272ca441d092b4703b70`,
      })
        .then((res) => {
          const cachedData = {
            data: res.data.list,
            timestamp: Date.now(),
          };
          localStorage.setItem("cachedWeatherData", JSON.stringify(cachedData));
          setWeatherData(res.data.list);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <div className="bg-cover bg-[#1f2128] min-h-screen flex flex-col">
      <div
        className="bg-cover bg-center h-[85vh] flex-grow relative"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="h-full flex flex-col justify-center text-white text-center">
          <div className="container mx-auto mt-[-300px]">
            <h1 className="text-4xl font-semibold mb-4">
              <img src={Logo} alt="Logo" className="inline-block mr-2 h-12" />{" "}
              Weather App
            </h1>
          </div>
          <div className="mx-auto">
            <SearchBar />
          </div>
        </div>
      </div>
      {isCardShown && (
        <div className="mt-[-300px] z-10">
          <div className="flex flex-wrap justify-center">
            {weatherData.map(
              (weather, index) =>
                isCardShown[index] && (
                  <div key={index} className="lg:w-[34%] p-6 ">
                    <div>
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
