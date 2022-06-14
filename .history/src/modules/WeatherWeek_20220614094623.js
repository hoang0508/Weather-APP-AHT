import React from "react";
import styled from "styled-components";
import { useWeatherContext } from "../context/WeatherProvider";

const WeatherWeekStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap:0 20px;
  `;

const WeatherWeek = () => {
  const { weatherData } = useWeatherContext();
  if (!weatherData?.daily) return;
  console.log(weatherData?.daily);
  return (
    <WeatherWeekStyles>
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
    </Ư>
  );
};

export default WeatherWeek;
