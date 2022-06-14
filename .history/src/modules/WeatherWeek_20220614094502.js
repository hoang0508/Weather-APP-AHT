import React from "react";
import { useWeatherContext } from "../context/WeatherProvider";

const WeatherWeek = () => {
  const { weatherData } = useWeatherContext();
  if (!weatherData?.daily) return;
  console.log(weatherData?.daily);
  return (
    <div>
      <h3 className="weather-week--item">
        <div className="weather-week--info">
          <h3 className="weather-week--days">Monday, 13/6</h3>
          <span></span>
          <div className="weather-weeek--temp">
            <span>
              25.2<sup>o</sup>C
            </span>
            <span>
              33.62<sup>o</sup>C
            </span>
          </div>
        </div>
      </h3>
    </div>
  );
};

export default WeatherWeek;
