import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const WeatherCard = (props) => {
 
  

  return (
    <div className="flex flex-col h-[17rem]  rounded-lg shadow-lg cursor-pointer overflow-hidden">
      <div
        style={{ backgroundColor: `#${props.color}` }}
        className="flex-1 p-4 flex flex-col justify-between relative"
      > 
        {/* close button */}
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute top-4 right-4 text-white cursor-pointer z-30"
          onClick={props.onClose}
        />
        <div className="flex justify-between items-center mt-4">
          <div className="ml-8 ">
            {/* display city name and country */}
            <h2 className="text-white text-lg font-semibold">
              {props.city}, {props.country}
            </h2>
            {/* display date and time */}
            <p className="text-white text-xs ">{props.time[1]}, {props.time[0]}</p>
          </div>
          {/* display temperature */}
          <h1 className="text-white text-5xl font-semibold mr-10 ">
            {props.temperature}°c
          </h1>
        </div>
        <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          {/* icon */}
          <img
            src={props.url}
            alt="Weather Icon"
            width={40}
            height={40}
            className="ml-6" 
          />
          {/* weather condition */}
         <p className="text-white text-sm  lg:block lg:ml-0">{props.condition}</p>
          </div>
          <div className="mr-10">
            {/* display min and max temperature */}
            <p className="text-white text-sm">Temp Min: {props.minTemp}°c</p>
            <p className="text-white text-sm">Temp Max: {props.maxTemp}°c</p>
          </div>
        </div>
      </div>
      <div className="h-24 bg-[#383b47] p-4 flex items-stretch justify-center">
        <div className="border-r border-white pr-4 flex items-center">
          <div className="text-[0.55rem] sm:text-xs">
            {/* Display pressure, humidity and visibility */}
            <p className="text-white">Pressure: {props.pressure}hPa</p>
            <p className="text-white">Humidity: {props.humidity}%</p>
            <p className="text-white">Visibility: {props.visibility}km</p>
          </div>
        </div>
        <div className="border-r border-white px-12 flex items-center ">
          <div>
            {/* Display wind speed and direction */}
            <p className="text-white text-[0.55rem] sm:text-xs">{props.windSpeed}m/s {props.windDirection}Degree</p>
          </div>
        </div>
        <div className="pl-4 flex items-center text-[0.55rem] sm:text-xs">
          <div>
            {/* Display sunrise and sunset time  */}
            <p className="text-white">Sunrise: {props.sunrise[1]} </p>
            <p className="text-white">Sunset: {props.sunset[1]} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
