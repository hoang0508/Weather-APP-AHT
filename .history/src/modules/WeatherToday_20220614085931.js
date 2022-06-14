import React from "react";
import styled from "styled-components";
import { useWeatherContext } from "../context/WeatherProvider";
import { FaAudible } from "react-icons/fa";
import { BsSun, BsFillSunsetFill } from "react-icons/bs";
import { WiSunset } from "react-icons/wi";
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
      margin-bottom: 10px;
      font-size: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    span {
      font-size: 20px;
      text-align: center;
      display: block;
    }
  }
`;

const WeatherToday = () => {
  const { weatherData } = useWeatherContext();
  const { uvi, wind_speed, humidity, visibility, sunrise, sunset } =
    weatherData?.current;
  return (
    <WeatherTodayStyled>
      <div className="weather-info">
        <h3 className="weather-info--name">UV index</h3>
        <div className="weather-info--image">
          <BsSun />
        </div>
        <span>{uvi}</span>
      </div>
      <div className="weather-info">
        <h3 className="weather-info--name">Wind status</h3>
        <div className="weather-info--image">
          <FaAudible />
        </div>
        <span>{wind_speed}km/h</span>
      </div>

      <div className="weather-info">
        <h3 className="weather-info--name">Sunsrice & Sunset</h3>
        <div className="weather-info--sun">
          <BsFillSunsetFill />
          <span></span>
        </div>
        <div className="weather-info--sun">
          <WiSunset />
          <span></span>
        </div>
      </div>
    </WeatherTodayStyled>
  );
};

export default WeatherToday;
