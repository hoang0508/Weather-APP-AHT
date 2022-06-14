import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import WeatherApi from "../../apis/WeatherApi";
import "./WeatherApp.scss";
import WeatherLayout from "../../modules/WeatherLayout";
import { useWeatherContext } from "../../context/WeatherProvider";
const WeatherApp = () => {
  const { weatherData, handleSearchData } = useWeatherContext();
  return (
    <div
      className="weather"
      style={{ backgroundImage: 'url("./weather.jpg")' }}
    >
      <WeatherLayout data={weatherData} onChange={handleSearchData} />
    </div>
  );
};

export default WeatherApp;
