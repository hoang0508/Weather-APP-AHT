import React from "react";
import styled from "styled-components";
import { useWeatherContext } from "../context/WeatherProvider";

const WeatherTodayStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0 40px;
  .weather-info {
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 4px;
    padding: 5px;
    &--image {
      width: 100px;
      display: block;
      margin: 0 auto 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      span {
        font-size: 20px;
        text-align: center;
        display: block;
      }
    }
  }
`;

const WeatherToday = () => {
  const { weatherData } = useWeatherContext();
  return (
    <WeatherTodayStyled>
      <div className="weather-info">
        <h3 className="weather-info--name">UV index</h3>
        <div className="weather-info--image">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
        <span>8.14</span>
      </div>
    </WeatherTodayStyled>
  );
};

export default WeatherToday;
