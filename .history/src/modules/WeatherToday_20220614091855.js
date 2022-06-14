import React from "react";
import styled from "styled-components";
import { useWeatherContext } from "../context/WeatherProvider";
import { FaAudible, FaTemperatureHigh } from "react-icons/fa";
import { BsSun, BsFillSunsetFill } from "react-icons/bs";
import { WiSunset, WiHumidity } from "react-icons/wi";
import { AiFillEye } from "react-icons/ai";
const WeatherTodayStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
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
  const { uvi, wind_speed, humidity, visibility, sunrise, sunset, pressure } =
    weatherData?.current;
  return (
    <WeatherTodayStyled>
      <div className="weather-info">
        <h3 className="weather-info--name">UV index</h3>
        <div className="weather-info--image">
          <BsSun />
        </div>
        <span>{weatherData?.current?.uvi}</span>
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
          <span>{new Date(sunrise).toLocaleTimeString()}</span>
        </div>
        <div className="weather-info--sun">
          <WiSunset />
          <span>{new Date(sunset).toLocaleTimeString()}</span>
        </div>
      </div>

      <div className="weather-info">
        <h3 className="weather-info--name">Humidity</h3>
        <div className="weather-info--image">
          <WiHumidity />
        </div>
        <span>{humidity}%</span>
      </div>

      <div className="weather-info">
        <h3 className="weather-info--name">Visiblity</h3>
        <div className="weather-info--image">
          <AiFillEye />
        </div>
        <span>{visibility}km</span>
      </div>

      <div className="weather-info">
        <h3 className="weather-info--name">Pressure</h3>
        <div className="weather-info--image">
          <FaTemperatureHigh />
        </div>
        <span>{pressure} hPa</span>
      </div>
    </WeatherTodayStyled>
  );
};

export default WeatherToday;
