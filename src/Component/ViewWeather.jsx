import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BgImage from "../Images/HeaderBG.jpg";
import Logo from "../Images/logo.png";
import Footer from "../Component/Footer";

const ViewWeather = (props) => {

  return (
    <div className="bg-cover bg-[#1f2128] min-h-screen flex flex-col">
      <div
      // Add a background image
        className="bg-cover bg-center h-[85vh] flex-grow relative"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="h-full flex flex-col justify-center text-white text-center">
          <div className="container mx-auto mt-[-450px]">
            <h1 className="text-4xl font-semibold mb-4">
              {/* logo and name */}
              <img src={Logo} alt="Logo" className="inline-block mr-2 h-12" />
              Weather App
            </h1>
          </div>
        </div>

        <div className="flex flex-col h-[24rem] bg-white rounded-lg shadow-lg overflow-hidden  cursor-pointer z-25 mt-[-450px] w-[80%] lg:w-[50%] mx-auto">
          <div
            style={{ backgroundColor: `#${props.color}` }}
            className="flex-1 bg-blue-500 p-4 flex flex-col justify-between relative"
          > 
            {/* Add a link to navigate back to the home page */}
            <a href="/">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="absolute top-4 left-4 text-white cursor-pointer"
              />
            </a>

            <div className="text-center text-white">
              {/* display city name and country */}
              <h1 className="text-[25px] text-bold">
                {props.city}, {props.country}
              </h1>
              {/* display date and time */}
              <p className="text-sm ">
                {props.time[1]}, {props.time[0]}
              </p>
            </div>
            <div className="flex   divide-x-2 divide-blue-200 pb-[30px] pt-[0px]">
              <div className="pr-6 w-[50%] pt-[28px] text-right   text-white ">
                {/* Display weather icon and condition */}
                <img
                  src={props.url}
                  alt="Weather Icon"
                  width={50}
                  height={50}
                  className="ml-[-10px]" 
                  style={{ display: "unset" }}
                />
                {/* weather condition */}
                <p className="text-sm ">{props.condition}</p>
              </div>
              <div className="pl-6 w-[50%] text-left text-white pb-[13px]">
                {/* Display temperature, min temp and max temp */}
                <h1 className="text-[50px] mb-[5px]">{props.temperature}°c</h1>
                <p className="text-sm ">Temp Min: {props.minTemp}°c</p>
                <p className="text-sm ">Temp Max: {props.maxTemp}°c</p>
              </div>
            </div>
          </div>

          <div className="h-24 bg-[#383b47] p-4 flex items-stretch justify-between divide-x-2 divide-blue-400">
            <div className=" pr-10 flex justify-end items-center w-[35%]">
              <div className="text-xs">
                {/* Display pressure, humidity and visibility */}
                <p className="text-white">Pressure: {props.pressure}hPa</p>
                <p className="text-white">Humidity: {props.humidity}%</p>
                <p className="text-white">Visibility: {props.visibility}km</p>
              </div>
            </div>
            <div className=" px-4 flex justify-center items-center text-center w-[30%]">
              <div>
                {/* Display wind speed and direction */}
                <p className="text-white text-xs">
                  {props.windSpeed}m/s {props.windDirection} Degree
                </p>
              </div>
            </div>
            <div className="pl-10 flex justify-start items-center text-xs w-[35%]">
              <div>
                {/* Display sunrise and sunset time */}
                <p className="text-white">Sunrise: {props.sunrise[1]} </p>
                <p className="text-white">Sunset: {props.sunset[1]} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewWeather;
