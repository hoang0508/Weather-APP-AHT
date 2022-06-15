import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useWeatherContext } from "../context/WeatherProvider";
import timeConverter from "../Helper";
import WeatherDetails from "./WeatherDetails";

const WeatherWeekStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  .weather-week--info {
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
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
    color: #ff8008;
  }
  .weather-week--days {
    font-size: 16px;
    span {
      color: #ff8008;
    }
  }
  .weather-week--bg {
    width: 100%;
    height: auto;
    background-color: #2cccff;
  }
`;

const WeatherWeek = () => {
  const { weatherData } = useWeatherContext();
  const [dataDetails, setDataDetails] = useState();
  const weekRef = useRef(null);
  useEffect(() => {
    setDataDetails(weatherData?.daily?.[0]);
  }, [weatherData]);
  if (!weekRef.current) return;

  weekRef.current.style.backgroundColor = "blue";
  const handleWeekDetails = (item) => {
    setDataDetails(item);
  };
  if (!weatherData?.daily) return;
  const data = weatherData?.daily;
  return (
    <>
      <WeatherWeekStyles>
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div
              ref={weekRef}
              className={`weather-week--info`}
              key={item?.dt}
              onClick={() => handleWeekDetails(item)}
            >
              <h3 className="weather-week--days">
                {new Date(item?.dt * 1000).toLocaleDateString("vi-VN")},{" "}
                <span>{timeConverter(item?.dt)}</span>
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
                -
                <span>
                  {Math.floor(item?.temp?.max)}
                  <sup>o</sup>C
                </span>
              </div>
            </div>
          ))}
      </WeatherWeekStyles>
      <WeatherDetails data={dataDetails} />
    </>
  );
};

export default WeatherWeek;
