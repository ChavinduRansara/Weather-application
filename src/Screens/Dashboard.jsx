import React, { useState, useEffect } from "react";
import BgImage from "../Images/HeaderBG.jpg";
import Logo from "../Images/logo.png";
import Footer from "../Component/Footer";
import SearchBar from "../Component/SearchBar";
import WeatherCard from "../Component/WeatherCard";
import CityData from "../cities.json";
import axios from "axios";

function Dashboard() {
  const [isCardShown, setIsCardShown] = useState(true);
  const [weatherData, setWeatherData] = useState([]); 
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [time, setTime] = useState("");
  const [temperature, setTemperature] = useState("");
  const [condition, setCondition] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [visibility, setVisibility] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDirection, setWindDirection] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  let cityIds = CityData.List.map(city => city.CityCode);
  console.log(cityIds);

  const timeformatter = (unixTime) => {
    let milliseconds = unixTime * 1000;
    let dateObject = new Date(milliseconds);
    const hour = dateObject.getHours();
    const minute = dateObject.getMinutes();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[dateObject.getMonth()];

    // Format the time with 'am' or 'pm'
    const ampm = hour >= 12 ? "pm" : "am";
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // Convert 0 to 12 for 12-hour format

    // Create the formatted date string
    const formattedDate = `${formattedHour}.${minute}${ampm}, ${month} ${dateObject.getDate()}`;
    return formattedDate;
  };
  const q = [1248991,1850147]

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/group?id=${q}&units=metric&appid=de90e2d59486272ca441d092b4703b70`,
    })
      .then((res) => {
        // setCity(res.data.list[0].name);
        // setCountry(res.data.list[0].sys.country);
        // setTime(timeformatter(res.data.list[0].dt));
        // setTemperature(res.data.list[0].main.temp);
        // setCondition(res.data.list[0].weather[0].main);
        // setMinTemp(res.data.list[0].main.temp_min);
        // setMaxTemp(res.data.list[0].main.temp_max);
        // setPressure(res.data.list[0].main.pressure);
        // setHumidity(res.data.list[0].main.humidity);
        // setVisibility(res.data.list[0].visibility);
        // setWindSpeed(res.data.list[0].wind.speed);
        // setWindDirection(res.data.list[0].wind.deg);
        // setSunrise(res.data.list[0].sys.sunrise);
        // setSunset(res.data.list[0].sys.sunset);
        setWeatherData(res.data.list);
        console.log(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
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
      {weatherData.map((weather, index) => (
        
        <div key={index} className="lg:w-[34%] p-6 ">
        <WeatherCard
          onClose={() => setIsCardShown(false)}
          city={weather.name}
          country={weather.sys.country}
          time={timeformatter(weather.dt)}
          temperature={weather.main.temp}
          condition={weather.weather[0].main}
          minTemp={weather.main.temp_min}
          maxTemp={weather.main.temp_max}
          pressure={weather.main.pressure}
          humidity={weather.main.humidity}
          visibility={weather.visibility}
          windSpeed={weather.wind.speed}
          windDirection={weather.wind.deg}
          sunrise={weather.sys.sunrise}
          sunset={weather.sys.sunset}
        />
      </div>
        
      ))}
    </div>
  </div>
  )}
  <Footer />
</div>


  );
}

export default Dashboard;
