import React from "react";
import { useWeatherContext } from "../context/WeatherProvider";
import timeConverter from "../Helper";

const WeatherDetails = ({ data }) => {
  const { weatherData } = useWeatherContext();
  const dataItem = weatherData?.daily.find((item) => item.dt === data);
  return (
    <>
      <div className="weather-week--details">
        <div className="details-left">
          <div>
            {new Date(dataItem?.dt * 1000).toLocaleDateString("vi-VN")},{" "}
            <span>{timeConverter(dataItem?.dt)}</span>
          </div>
        </div>
        <div className="details-right"></div>
      </div>
    </>
  );
};

export default WeatherDetails;
