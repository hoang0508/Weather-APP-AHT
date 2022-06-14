import React from "react";
import { useWeatherContext } from "../context/WeatherProvider";

const WeatherDetails = ({ data }) => {
  const { weatherData } = useWeatherContext();
  return (
    <>
      {data === 1655179200 && (
        <div>
          <div>2</div>
        </div>
      )}
    </>
  );
};

export default WeatherDetails;
