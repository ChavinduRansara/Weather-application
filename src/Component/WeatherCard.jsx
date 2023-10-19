import React from "react";

const WeatherCard = (props) => {
  

  return (
    <div className="flex flex-col h-[17rem] bg-white rounded-lg shadow-lg overflow-hidden w-96">
      <div className="flex-1 bg-blue-500 p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center mt-4">
          <div className="ml-8 ">
            <h2 className="text-white text-lg font-semibold">{props.city}, {props.country}</h2>
            <p className="text-white text-xs ">{props.time}</p>
          </div>
          <h1 className="text-white text-4xl font-semibold mr-10">{props.temperature}°c</h1>
        </div>
        <div className="flex justify-between items-center mb-2">
          <p className="text-white text-sm ml-10">{props.condition}</p>
          <div className="mr-10">
            <p className="text-white text-sm">Temp Min: {props.minTemp}°c</p>
            <p className="text-white text-sm">Temp Max: {props.maxTemp}°c</p>
          </div>
        </div>
      </div>
      <div className="h-24 bg-[#383b47] p-4 flex items-stretch justify-between">
        <div className="border-r border-white pr-4 flex items-center">
          <div className="text-xs">
            <p className="text-white">Pressure: {props.pressure}</p>
            <p className="text-white">Humidity: {props.humidity}%</p>
            <p className="text-white">Visibility: {props.visibility} km</p>
          </div>
        </div>
        <div className="border-r border-white px-4 flex items-center">
          <div>
            <p className="text-white text-xs">Wind Speed km/h</p>
          </div>
        </div>
        <div className="pl-4 flex items-center text-xs">
          <div>
            <p className="text-white">Sunrise: 6:05am </p>
            <p className="text-white">Sunset: 6:05pm </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
