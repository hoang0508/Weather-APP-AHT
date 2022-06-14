import React from "react";
import { useWeatherContext } from "../context/WeatherProvider";

const WeatherDetails = ({ data }) => {
  const { weatherData } = useWeatherContext();
  const dataItem = weatherData && weatherData.length > 0;
  console.log(
    "🚀 ~ file: WeatherDetails.js ~ line 7 ~ WeatherDetails ~ dataItem",
    dataItem
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
