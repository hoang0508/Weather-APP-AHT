import React from "react";
import styled from "styled-components";
import { useWeatherContext } from "../context/WeatherProvider";
import timeConverter from "../Helper";

const WeatherWeekStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  .weather-week--info {
    background-color: #fff;
    padding: 5px;
    border-radius: 3px;
  }
`;

const WeatherWeek = () => {
  const { weatherData } = useWeatherContext();
  if (!weatherData?.daily) return;
  const data = weatherData?.daily;
  console.log("🚀 ~ file: WeatherWeek.js ~ line 20 ~ WeatherWeek ~ data", data);
  const { time } = timeConverter(1655355600);
  console.log("🚀 ~ file: WeatherWeek.js ~ line 23 ~ WeatherWeek ~ time", time);
  return (
    <WeatherWeekStyles>
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <div className="weather-week--info" key={item?.dt}>
            <h3 className="weather-week--days">
              {new Date(item?.dt * 1000).toISOString()}, 13/6
            </h3>
            <div className="weather-week--image">
              <img src="" alt="" />
            </div>
            <div className="weather-weeek--temp">
              <span>
                {Math.floor(item?.temp?.min)}
                <sup>o</sup>C
              </span>
              <span>
                {Math.floor(item?.temp?.max)}
                <sup>o</sup>C
              </span>
            </div>
          </div>
        ))}
    </WeatherWeekStyles>
  );
};

export default WeatherWeek;
