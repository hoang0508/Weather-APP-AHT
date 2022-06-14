import React from "react";
import { useWeatherContext } from "../context/WeatherProvider";

const WeatherDetails = ({ data }) => {
  const { weatherData } = useWeatherContext();
  console.log(
    "🚀 ~ file: WeatherDetails.js ~ line 6 ~ WeatherDetails ~ weatherData",
    weatherData
  );

  return (
    <>
      {data === weatherData && (
        <div>
          <div>2</div>
        </div>
      )}
    </>
  );
};

export default WeatherDetails;
