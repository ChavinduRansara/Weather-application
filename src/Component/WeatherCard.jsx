import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import properties from "../props.json";

const WeatherCard = (props) => {
 
  

  return (
    <div className="flex flex-col h-[17rem] bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden w-88">
      <div
        style={{ backgroundColor: `#${props.color}` }}
        className="flex-1 bg-blue-500 p-4 flex flex-col justify-between relative"
      > 
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute top-4 right-4 text-white cursor-pointer z-30"
          onClick={props.onClose}
        />
        <div className="flex justify-between items-center mt-4">
          <div className="ml-8 ">
            <h2 className="text-white text-lg font-semibold">
              {props.city}, {props.country}
            </h2>
            <p className="text-white text-xs ">{props.time[1]}, {props.time[0]}</p>
          </div>
          <h1 className="text-white text-5xl font-semibold mr-10">
            {props.temperature}°c
          </h1>
        </div>
        <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <img
            src={props.url}
            alt="Weather Icon"
            width={40}
            height={40}
            className="ml-6" // Reduce the gap here
          />
         <p className="text-white text-sm  lg:block lg:ml-0">{props.condition}</p>
          </div>
          <div className="mr-10">
            <p className="text-white text-sm">Temp Min: {props.minTemp}°c</p>
            <p className="text-white text-sm">Temp Max: {props.maxTemp}°c</p>
          </div>
        </div>
      </div>
      <div className="h-24 bg-[#383b47] p-4 flex items-stretch justify-center">
        <div className="border-r border-white pr-4 flex items-center">
          <div className="text-xs">
            <p className="text-white">Pressure: {props.pressure}</p>
            <p className="text-white">Humidity: {props.humidity}%</p>
            <p className="text-white">Visibility: {props.visibility} km</p>
          </div>
        </div>
        <div className="border-r border-white px-12 flex items-center ">
          <div>
            <p className="text-white text-xs">{props.windSpeed}m/s {props.windDirection} Degree</p>
          </div>
        </div>
        <div className="pl-4 flex items-center text-xs">
          <div>
            <p className="text-white">Sunrise: {props.sunrise[1]} </p>
            <p className="text-white">Sunset: {props.sunset[1]} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
