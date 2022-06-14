import React from "react";
import { useWeatherContext } from "../context/WeatherProvider";

const WeatherWeek = () => {
  const { weatherData } = useWeatherContext();
  if (!weatherData?.daily) return;
  console.log(weatherData?.daily);
  return <div></div>;
};

export default WeatherWeek;
