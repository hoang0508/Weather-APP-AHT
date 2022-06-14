import React from "react";
import styled from "styled-components";
import { useWeatherContext } from "../context/WeatherProvider";
import { FaAudible, TiWeatherSunny } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
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
          <BsSun />
        </div>
        <span>8.14</span>
      </div>
      <div className="weather-info">
        <h3 className="weather-info--name">Wind status</h3>
        <div className="weather-info--image">
          <FaAudible />
        </div>
        <span>0.96km/h</span>
      </div>
    </WeatherTodayStyled>
  );
};

export default WeatherToday;
