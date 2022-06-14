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
  .weather-week--image {
    display: flex;
    justify-content: center;
    height: 60px;
  }
  .weather-week--temp {
    display: flex;
    justify-content: center;
    gap: 0 10px;
    font-weight: 600;
    color: orange;
  }
`;

const WeatherWeek = () => {
  const { weatherData } = useWeatherContext();
  if (!weatherData?.daily) return;
  const data = weatherData?.daily;
  console.log("🚀 ~ file: WeatherWeek.js ~ line 20 ~ WeatherWeek ~ data", data);
  return (
    <WeatherWeekStyles>
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <div className="weather-week--info" key={item?.dt}>
            <h3 className="weather-week--days">
              {new Date(item?.dt * 1000).toLocaleDateString("en-Us")}
            </h3>
            <div className="weather-week--image">
              <img
                src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}.png`}
                alt=""
              />
            </div>
            <div className="weather-week--temp">
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
